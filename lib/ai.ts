'use client'

import type { Message, AIResponse } from '@/types/index'

// Mock AI responses database
const aiResponses: Record<string, AIResponse> = {
  // Greetings
  'hello': { message: '👋 Hello! I\'m JARVIS, your personal AI assistant. How can I help you today?' },
  'hi': { message: '👋 Hey there! Ready to assist. What do you need?' },
  'good morning': { message: '🌅 Good morning! Have a great day ahead!' },
  'good night': { message: '🌙 Sleep well! See you tomorrow!' },

  // Help commands
  'help': {
    message: `📚 Here are my available commands:\n
    • "add task" - Create a new task
    • "show tasks" - View all tasks
    • "weather" - Get weather info
    • "news" - Latest updates
    • "time" - Current time
    • "reminder" - Set reminders
    • "calculate" - Math calculations
    • "tell joke" - Get a laugh
    • "motivation" - Inspirational quote`,
    command: 'help'
  },

  // Time related
  'time': {
    message: `⏰ Current time: ${new Date().toLocaleTimeString()}`,
    command: 'time'
  },
  'date': {
    message: `📅 Today's date: ${new Date().toLocaleDateString()}`,
    command: 'date'
  },

  // Weather
  'weather': {
    message: '🌤️ Weather for Delhi: 28°C, Sunny. Humidity: 65%, Wind: 12 km/h',
    command: 'weather'
  },
  'weather in london': {
    message: '🌦️ Weather for London: 18°C, Cloudy. Humidity: 72%, Wind: 8 km/h',
    command: 'weather'
  },

  // News
  'news': {
    message: '📰 Top News:\n• AI advancements breaking records\n• Tech startup raises $100M funding\n• Innovation in renewable energy',
    command: 'news'
  },

  // Tasks
  'add task': {
    message: '✅ What task would you like to add? Please describe it.',
    command: 'addTask'
  },
  'show tasks': {
    message: '📋 Showing your tasks...',
    command: 'showTasks'
  },
  'clear tasks': {
    message: '🗑️ All tasks cleared!',
    command: 'clearTasks'
  },

  // Jokes
  'tell joke': {
    message: '😄 Why did the AI go to school? Because it wanted to improve its learning model!\n\nWant another one?'
  },
  'joke': {
    message: '🤣 A SQL query walks into a bar, walks up to two tables and asks... "Can I join you?"\n\nHaha!'
  },

  // Motivation
  'motivation': {
    message: '💪 "The only way to do great work is to love what you do." - Steve Jobs\n\nYou\'ve got this!'
  },
  'motivate': {
    message: '✨ "Success is not final, failure is not fatal." - Winston Churchill\n\nKeep pushing!'
  },

  // Calculations
  'calculate 2 + 2': {
    message: '🧮 2 + 2 = 4'
  },
  'math': {
    message: '🔢 I can help with calculations! Just say "calculate" followed by your math problem.'
  },

  // System commands
  'status': {
    message: '✅ All systems online and ready! JARVIS is functioning at 100% capacity.',
    command: 'status'
  },
  'capabilities': {
    message: '🤖 JARVIS Capabilities:\n• Natural language processing\n• Task management\n• Real-time information\n• Voice recognition ready\n• Smart automation\n• Weather & News updates',
    command: 'capabilities'
  },

  // General fallback patterns
  'what is': {
    message: '🔍 I\'m learning to understand that! Can you be more specific?'
  },
  'how to': {
    message: '📖 I can guide you through that. Please provide more details!'
  },
  'remind': {
    message: '⏱️ Reminder set! I\'ll notify you at the scheduled time.',
    command: 'reminder'
  },
}

// Get AI response based on user input
export const getAIResponse = (userInput: string): AIResponse => {
  const input = userInput.toLowerCase().trim()

  // Direct match
  if (aiResponses[input]) {
    return aiResponses[input]
  }

  // Partial match - check if input contains any command
  for (const [key, response] of Object.entries(aiResponses)) {
    if (input.includes(key)) {
      return response
    }
  }

  // Smart fallbacks
  if (input.includes('calculate') || input.match(/\d+\s*[\+\-\*/]\s*\d+/)) {
    try {
      const result = eval(input.replace('calculate', '').trim())
      return { message: `🧮 Result: ${result}` }
    } catch {
      return { message: '❌ I couldn\'t calculate that. Please check your math expression.' }
    }
  }

  if (input.includes('remind me')) {
    return { message: '⏱️ Reminder will be set. Please specify the time!' }
  }

  if (input.includes('set alarm')) {
    return { message: '⏲️ Alarm set successfully!' }
  }

  if (input.includes('thank')) {
    return { message: '😊 You\'re welcome! Happy to help!' }
  }

  if (input.length === 0) {
    return { message: '👂 I\'m listening... What do you need?' }
  }

  // Default response
  return {
    message: `🤔 I understood: "${userInput}". I'm still learning about this topic. Try saying "help" to see my available commands!`
  }
}

// Generate unique message ID
export const generateMessageId = (): string => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Generate unique task ID
export const generateTaskId = (): string => {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}
