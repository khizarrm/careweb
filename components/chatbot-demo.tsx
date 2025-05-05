"use client"

import { Send } from "lucide-react"
import { useState, useRef, useEffect } from "react"

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
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const [messageCount, setMessageCount] = useState(0)
  const MAX_MESSAGES = 10


  // Scroll to bottom when messages change
  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages])
  

  const handleSend = async () => {
    if (!input.trim() || isLoading || messageCount >= MAX_MESSAGES) return
  
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
              content: `
              You are CareWeb AI Assistant, a helpful and friendly virtual assistant for a modern health clinic.

              The clinic is open:
              - Monday to Friday: 8:00 AM to 6:00 PM
              - Saturday: 9:00 AM to 1:00 PM
              - Closed on Sundays and public holidays

              Services offered include:
              - General family medicine
              - Pediatric care
              - Minor surgeries
              - Preventive checkups
              - Vaccinations
              - Lab tests and diagnostics

              Our surgeons include:
              - Dr. Sarah Ahmed (General Surgery, Tues/Thurs)
              - Dr. James Mugenzi (Orthopedic Surgeon, Mon/Wed)
              - Dr. Aisha Kareem (Pediatric Surgery, Fridays)

              You should respond clearly, professionally, and helpfully. Provide answers about clinic hours, doctors, appointment bookings, and services offered. If a user asks something outside your scope (like medical advice), politely redirect them to book an appointment.

              Stay concise and informative. Always ask a follow-up if the user's question is vague or could mean multiple things.
              `
              ,
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
      setMessageCount((count) => count + 1)
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
    <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-lg hover:shadow-xl transition-all duration-500 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"></div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-4 text-white relative">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-16 h-16 bg-white/30 rounded-full -ml-8 -mt-8"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/30 rounded-full -mr-12 -mb-12"></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bot"
            >
              <path d="M12 8V4H8"></path>
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-poppins text-lg font-semibold">CareWeb AI Assistant</h3>
            <p className="text-sm text-white/80">
              Ask me anything about your clinic visit <br />
              Since this is a demo, all information here is hypothetical.
            </p>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div
        ref={chatContainerRef}
        className="h-80 overflow-y-auto p-4 relative"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 25%)",
          backgroundSize: "20px 20px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 max-w-[80%] rounded-2xl p-3 ${
              message.role === "user"
                ? "ml-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md animate-fadeIn"
                : "bg-blue-50 text-slate-800 border border-blue-100 animate-fadeIn"
            }`}
            style={{
              animationDelay: "0.1s",
              animationFillMode: "backwards",
              boxShadow:
                message.role === "user" ? "0 4px 15px rgba(37, 99, 235, 0.2)" : "0 4px 15px rgba(0, 0, 0, 0.05)",
            }}
          >
            {message.content}
          </div>
        ))}
        {isLoading && (
          <div className="mb-4 max-w-[80%] rounded-2xl bg-blue-50 border border-blue-100 p-3 text-slate-800 shadow-md">
            <div className="flex space-x-2">
              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400" style={{ animationDelay: "0.2s" }}></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-blue-100 p-4 relative">
        <div className="flex gap-2">
          <div
            className={`flex-1 relative transition-all duration-300 ${isFocused ? "ring-2 ring-blue-400 ring-opacity-50 rounded-md" : ""}`}
          >
            {messageCount >= MAX_MESSAGES && (
              <div className="text-sm text-red-500 mb-2 text-center">
                You've reached the demo limit of {MAX_MESSAGES} messages.
              </div>
            )}

            <Input
              placeholder="Type your question here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 border-blue-200 focus-visible:ring-blue-400 pr-10"
            />
            {input.length > 0 && (
              <button
                onClick={() => setInput("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            )}
          </div>
          <Button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-md"
          >
            <Send size={18} />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <div className="mt-2 text-center text-xs text-slate-400">Try asking about appointments, hours, or services</div>
      </div>
    </div>
  )
}
