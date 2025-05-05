"use client"

import { Send } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant"
  content: string
}


export function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hi there! I'm the CareWeb AI assistant. How can I help you today? You can ask me about appointments, services, or general medical information.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
  
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
  
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are CareWeb AI Assistant, a helpful assistant for a healthcare clinic. Keep in mind you are a demo as well, so you cannot provide details which are too exact.",
            },
            ...messages,
            userMessage,
          ],
        }),
      })
      
      if (!res.ok) {
        const errorBody = await res.text()
        console.error("OpenAI API error:", res.status, errorBody)
        throw new Error(`OpenAI API returned ${res.status}`)
      }

      const data = await res.json()
  
      const reply: Message = {
        role: "assistant",
        content: data.choices?.[0]?.message?.content ?? "No response.",
      }
  
      setMessages((prev) => [...prev, reply])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Something went wrong. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }
  
  
  

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
      <div className="bg-blue-600 p-4 text-white">
        <h3 className="font-poppins text-lg font-semibold">CareWeb AI Assistant</h3>
        <p className="text-sm text-white/80">Ask me anything about your clinic visit</p>
      </div>

      <div className="h-80 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 max-w-[80%] rounded-2xl p-3 ${
              message.role === "user" ? "ml-auto bg-blue-600 text-white" : "bg-slate-100 text-slate-800"
            }`}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="mb-4 max-w-[80%] rounded-2xl bg-slate-100 p-3 text-slate-800">
            <div className="flex space-x-2">
              <div className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></div>
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Type your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={isLoading}>
            <Send size={18} />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
