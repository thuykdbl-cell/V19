import React from 'react';
import { 
  Package, 
  Radio, 
  Repeat, 
  Headphones 
} from 'lucide-react';

export const CredibilityMetrics: React.FC = () => {
  const metrics = [
    {
      value: '30+',
      label: 'Đa Dạng Gói Cước',
      desc: 'Lựa chọn phong phú từ cá nhân, học sinh sinh viên đến doanh nghiệp lớn.',
      icon: Package,
      bg: 'bg-[#d7e3ff] text-[#004e9f]',
    },
    {
      value: '100%',
      label: 'Hạ Tầng 5G Hiện Đại',
      desc: 'Mạng lưới phủ sóng rộng khắp các tỉnh thành trọng điểm toàn quốc.',
      icon: Radio,
      bg: 'bg-[#b6ebff] text-[#00677f]',
    },
    {
      value: '2 Chiều',
      label: 'Linh Hoạt Trả Trước/Sau',
      desc: 'Dễ dàng nâng cấp hoặc chuyển đổi hình thức thuê bao không gián đoạn.',
      icon: Repeat,
      bg: 'bg-[#e1e0ff] text-[#3a3ac8]',
    },
    {
      value: '24/7',
      label: 'Hỗ Trợ Miễn Phí',
      desc: 'Tổng đài 1800 1091 và đội ngũ giao dịch viên luôn sẵn sàng giải đáp.',
      icon: Headphones,
      bg: 'bg-[#aac7ff] text-[#004e9f]',
    },
  ];

  return (
    <section className="w-full py-16 bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white shadow-sm border border-[#e2e7ff] flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 rounded-full ${m.bg} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-black text-[#131b2e] tracking-tight">
                  {m.value}
                </div>
                <div className="text-base font-bold text-[#004e9f] mt-1">
                  {m.label}
                </div>
                <p className="text-xs sm:text-sm text-[#414753] mt-2 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
