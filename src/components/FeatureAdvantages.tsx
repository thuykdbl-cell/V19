import React from 'react';
import { 
  Signal, 
  Rocket, 
  Tv, 
  Gamepad2, 
  Sparkles, 
  Headphones, 
  ArrowRight 
} from 'lucide-react';

interface FeatureAdvantagesProps {
  onFeatureClick: (type: string) => void;
}

export const FeatureAdvantages: React.FC<FeatureAdvantagesProps> = ({ onFeatureClick }) => {
  const features = [
    {
      id: 'data',
      title: 'Data Linh Hoạt Tối Đa',
      desc: 'Từ gói tiết kiệm cơ bản 1GB/ngày đến các gói khủng 10GB/ngày (300GB - 500GB/tháng), đáp ứng chính xác dung lượng thực tế của bạn mà không lãng phí chi phí.',
      actionText: 'Tìm gói Data',
      icon: Signal,
      iconBg: 'bg-[#d7e3ff] text-[#001b3e]',
      accentColor: 'text-[#004e9f]',
    },
    {
      id: '5g',
      title: 'Kết Nối 5G Tốc Độ Cao',
      desc: 'Trải nghiệm Internet di động 5G thế hệ mới với băng thông cực đại, độ trễ siêu thấp hỗ trợ xem video 4K/8K không chờ load và tải tệp tin dung lượng lớn trong tích tắc.',
      actionText: 'Khám phá 5G',
      icon: Rocket,
      iconBg: 'bg-[#b6ebff] text-[#001f28]',
      accentColor: 'text-[#00677f]',
    },
    {
      id: 'entertainment',
      title: 'Giải Trí Chuẩn OTT MyTV',
      desc: 'Tích hợp tài khoản MyTV Mobile miễn phí data truy cập, sở hữu gần 180 kênh truyền hình trong nước, quốc tế cùng kho phim bản quyền chiếu rạp đỉnh cao.',
      actionText: 'Kho kênh MyTV',
      icon: Tv,
      iconBg: 'bg-[#e1e0ff] text-[#07006c]',
      accentColor: 'text-[#3a3ac8]',
    },
    {
      id: 'gaming',
      title: 'Data Tối Ưu Cho Gaming',
      desc: 'Các gói cước được tối ưu riêng luồng kết nối máy chủ Liên Quân Mobile, Free Fire, PUBG Mobile giúp chỉ số Ping luôn ổn định dưới 20ms, không lo giật lag.',
      actionText: 'Gói Gaming',
      icon: Gamepad2,
      iconBg: 'bg-[#aac7ff] text-[#001b3e]',
      accentColor: 'text-[#004e9f]',
    },
    {
      id: 'ai',
      title: 'AI & Công Nghệ vnGenAI',
      desc: 'VinaPhone tiên phong tích hợp quyền lợi trí tuệ nhân tạo tạo sinh vnGenAI vào gói cước di động, hỗ trợ soạn thảo, tra cứu kiến thức và xử lý công việc tự động.',
      actionText: 'Tìm hiểu vnGenAI',
      icon: Sparkles,
      iconBg: 'bg-[#47d6ff]/30 text-[#004e60]',
      accentColor: 'text-[#00677f]',
    },
    {
      id: 'support',
      title: 'Tư Vấn Hỗ Trợ 24/7',
      desc: 'Tổng đài 1800 1091 phục vụ miễn phí cước gọi 24/7 cùng mạng lưới hơn 1.000 điểm giao dịch VNPT trải dài cả nước luôn sẵn sàng đồng hành cùng bạn.',
      actionText: 'Gọi 1800 1091',
      icon: Headphones,
      iconBg: 'bg-[#c0c1ff]/30 text-[#2f2ebe]',
      accentColor: 'text-[#3a3ac8]',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs uppercase tracking-wider text-[#004e9f] font-extrabold px-3 py-1 bg-[#004e9f]/10 rounded-full mb-2">
            Hạ Tầng Viễn Thông Dẫn Đầu
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#131b2e] tracking-tight">
            6 LỢI THẾ VƯỢT TRỘI CỦA VINAPHONE
          </h2>
          <p className="text-sm sm:text-base text-[#414753] max-w-2xl mt-2 leading-relaxed">
            Trải nghiệm hệ sinh thái kết nối công nghệ số tối ưu nhất cho đời sống, giải trí và doanh nghiệp hiện đại.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onFeatureClick(item.id)}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between border border-[#e2e7ff] cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#004e9f]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />
                
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#131b2e] mb-2 group-hover:text-[#004e9f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#414753] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 ${item.accentColor} text-xs font-bold group-hover:gap-2.5 transition-all`}>
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
