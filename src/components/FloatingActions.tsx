import React from 'react';
import { Phone, MessageCircle, MessageSquare, Flame, Sparkles, Home } from 'lucide-react';

interface FloatingActionsProps {
  onNavigateHome: () => void;
  onNavigateHot: () => void;
  onNavigateQuiz: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onNavigateHome,
  onNavigateHot,
  onNavigateQuiz,
}) => {
  return (
    <>
      {/* Desktop Floating Right Action Dock */}
      <aside aria-label="Quick Actions" className="hidden md:flex fixed right-4 bottom-28 z-40 flex-col gap-3">
        {/* Hotline 1800 1091 */}
        <a
          href="tel:18001091"
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#004e9f] text-white shadow-[0_8px_24px_rgba(0,78,159,0.3)] hover:scale-110 hover:bg-[#0066cc] transition-all relative"
          title="Gọi 1800 1091"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-[#283044] text-[#eef0ff] text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            1800 1091 (Miễn phí 24/7)
          </span>
        </a>

        {/* Zalo Button */}
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#00d2ff] text-[#001f28] shadow-[0_8px_24px_rgba(0,210,255,0.3)] hover:scale-110 transition-all relative"
          title="Zalo Tư Vấn 5G"
        >
          <MessageCircle className="w-5 h-5 font-bold" />
          <span className="absolute right-14 bg-[#283044] text-[#eef0ff] text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Zalo tư vấn 5G
          </span>
        </a>

        {/* Messenger Button */}
        <a
          href="https://m.me"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#3a3ac8] text-white shadow-[0_8px_24px_rgba(58,58,200,0.3)] hover:scale-110 hover:bg-[#5356e1] transition-all relative"
          title="Nhắn tin Messenger"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute right-14 bg-[#283044] text-[#eef0ff] text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Nhắn tin Messenger
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <nav 
        aria-label="Mobile Bottom Bar" 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-[#e2e7ff] shadow-[0_-2px_12px_rgba(0,102,204,0.08)]"
      >
        <div className="flex items-center justify-around h-16 px-1">
          <button
            onClick={onNavigateHome}
            className="flex flex-col items-center justify-center gap-1 text-[#414753] hover:text-[#004e9f] flex-1 py-1"
          >
            <Home className="w-5 h-5" />
            <span className="text-[11px] font-semibold">Trang chủ</span>
          </button>

          <button
            onClick={onNavigateHot}
            className="flex flex-col items-center justify-center gap-1 text-[#414753] hover:text-[#004e9f] flex-1 py-1"
          >
            <Flame className="w-5 h-5 text-[#f97316]" />
            <span className="text-[11px] font-semibold">Gói Hot</span>
          </button>

          <button
            onClick={onNavigateQuiz}
            className="flex flex-col items-center justify-center gap-1 text-[#414753] hover:text-[#004e9f] flex-1 py-1"
          >
            <Sparkles className="w-5 h-5 text-[#004e9f]" />
            <span className="text-[11px] font-semibold">Quiz chọn</span>
          </button>

          <a
            href="tel:18001091"
            className="flex flex-col items-center justify-center gap-1 text-[#414753] hover:text-[#004e9f] flex-1 py-1"
          >
            <Phone className="w-5 h-5 text-[#00677f]" />
            <span className="text-[11px] font-semibold">Hotline</span>
          </a>
        </div>
      </nav>
    </>
  );
};
