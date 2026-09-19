import React from 'react';
import { 
  Signal, 
  Phone, 
  Rocket, 
  Tv, 
  Gamepad2, 
  Bot 
} from 'lucide-react';

interface QuickTickerProps {
  onQuickSelect: (need: string) => void;
}

export const QuickTicker: React.FC<QuickTickerProps> = ({ onQuickSelect }) => {
  const items = [
    { id: 'data', label: 'DATA CAO', icon: Signal },
    { id: 'call', label: 'GỌI NHIỀU', icon: Phone },
    { id: '5g', label: 'KẾT NỐI 5G', icon: Rocket },
    { id: 'entertainment', label: 'MYTV OTT', icon: Tv },
    { id: 'gaming', label: 'GAMING', icon: Gamepad2 },
    { id: 'ai', label: 'vnGenAI', icon: Bot },
  ];

  return (
    <section className="w-full bg-[#004e9f] text-white py-2.5 shadow-md overflow-hidden relative border-y border-[#0066cc]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onQuickSelect(item.id)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg hover:bg-white/15 transition-all text-xs font-bold tracking-wide text-white hover:scale-105 active:scale-95"
              >
                <Icon className="w-4 h-4 text-[#b6ebff] shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
