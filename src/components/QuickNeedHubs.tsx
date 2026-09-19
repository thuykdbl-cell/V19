import React from 'react';
import { 
  Signal, 
  PhoneCall, 
  Film, 
  Gamepad2, 
  Sparkles, 
  Users, 
  Building2 
} from 'lucide-react';

interface QuickNeedHubsProps {
  activeNeed: string;
  onSelectNeed: (needKey: string) => void;
}

export const QuickNeedHubs: React.FC<QuickNeedHubsProps> = ({ activeNeed, onSelectNeed }) => {
  const needs = [
    { id: 'data', label: 'DATA NHIỀU', icon: Signal },
    { id: 'call', label: 'GỌI NHIỀU', icon: PhoneCall },
    { id: 'entertainment', label: 'XEM PHIM – TRUYỀN HÌNH', icon: Film },
    { id: 'gaming', label: 'CHƠI GAME', icon: Gamepad2 },
    { id: 'ai', label: 'AI TIÊN PHONG', icon: Sparkles },
    { id: 'family', label: 'GIA ĐÌNH', icon: Users },
    { id: 'enterprise', label: 'DOANH NGHIỆP', icon: Building2 },
  ];

  return (
    <section id="nhu-cau-cua-ban" className="w-full py-12 lg:py-16 bg-[#f2f3ff] border-y border-[#e2e7ff]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-wider text-[#004e9f] font-bold px-3 py-1 bg-[#004e9f]/10 rounded-full">
            Lựa Chọn Theo Thói Quen
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#131b2e] tracking-tight mt-2">
            BẠN ĐANG CẦN GÌ CHO CHIẾC ĐIỆN THOẠI?
          </h2>
          <p className="text-sm sm:text-base text-[#414753] max-w-xl mx-auto mt-2">
            Bấm chọn nhu cầu chính để lọc các gói cước được đề xuất phù hợp nhất ngay tức thì.
          </p>
        </div>

        {/* Quick Need Hubs Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {needs.map((item) => {
            const Icon = item.icon;
            const isActive = activeNeed === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectNeed(item.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
                  isActive
                    ? 'bg-[#004e9f] text-white shadow-[0_4px_16px_rgba(0,78,159,0.3)] scale-105 ring-2 ring-[#0066cc]'
                    : 'bg-white text-[#414753] hover:bg-[#e2e7ff] hover:text-[#004e9f]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#b6ebff]' : 'text-[#004e9f]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
