import React, { useState, useRef, useEffect } from 'react';
import { getTravelRecommendation } from '../services/gemini';
import { ChatMessage } from '../types';
import { Send, Sparkles, Loader2, Bot } from 'lucide-react';

export const AIGuide: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: 'model', text: 'Mabuhay! I am your AI Travel Guide. Ask me about itineraries in Palawan, surfing spots in Siargao, or where to find the best Adobo!' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: query };
    setChatHistory(prev => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    const responseText = await getTravelRecommendation(userMessage.text);
    
    setChatHistory(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-guide" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-bold mb-4">
                <Sparkles size={14} />
                <span>Powered by Gemini</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-deep-ocean">Plan Your Dream Trip</h2>
            <p className="text-slate-500 mt-2">Get instant, personalized itineraries and local tips.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col h-[600px]">
            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                {chatHistory.map((msg, idx) => (
                    <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-800' : 'bg-tropical-teal'}`}>
                            {msg.role === 'user' ? <div className="text-white text-xs">You</div> : <Bot className="text-white w-5 h-5" />}
                        </div>
                        <div className={`p-4 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-sm ${
                            msg.role === 'user' 
                            ? 'bg-slate-800 text-white rounded-tr-none' 
                            : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-tropical-teal flex items-center justify-center">
                            <Loader2 className="text-white w-4 h-4 animate-spin" />
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100">
                            <span className="text-slate-400 text-sm">Thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100">
                <form onSubmit={handleSearch} className="relative">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="e.g., 'Plan a 3-day trip to Boracay for a couple...'"
                        className="w-full pl-6 pr-14 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-tropical-teal/50 focus:bg-white transition-all outline-none text-slate-700"
                    />
                    <button 
                        type="submit" 
                        disabled={isLoading || !query.trim()}
                        className="absolute right-2 top-2 p-2 bg-tropical-teal text-white rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};
