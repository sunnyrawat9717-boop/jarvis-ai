'use client'

import { Newspaper, ExternalLink } from 'lucide-react'

const mockNews = [
  {
    id: 1,
    title: 'AI Breakthroughs in 2024',
    category: 'Technology',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'Latest Updates in Web Development',
    category: 'Tech',
    time: '4 hours ago',
  },
  {
    id: 3,
    title: 'Global Market Trends Analysis',
    category: 'Business',
    time: '6 hours ago',
  },
  {
    id: 4,
    title: 'Innovation in Renewable Energy',
    category: 'Science',
    time: '8 hours ago',
  },
]

export default function NewsFeed() {
  return (
    <div className="glass-dark rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold glow-text flex items-center gap-2">
          <Newspaper size={24} /> Latest News
        </h2>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {mockNews.map((news) => (
          <div
            key={news.id}
            className="p-4 bg-dark/50 rounded-lg hover:bg-dark/70 transition group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white group-hover:text-accent transition">
                  {news.title}
                </p>
                <div className="flex gap-2 items-center mt-2">
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-400">{news.time}</span>
                </div>
              </div>
              <ExternalLink
                size={18}
                className="text-gray-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent text-sm font-semibold hover:bg-accent/20 transition">
        View All News
      </button>
    </div>
  )
}
