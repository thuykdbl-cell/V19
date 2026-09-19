import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Tôi nên chọn gói nào nếu chủ yếu dùng Internet lướt web & xem phim?',
      a: 'Nếu bạn chỉ có nhu cầu truy cập Internet, các gói như YOLO100 (30GB/tháng - 100k), YOLO100M (Free Data YouTube, TikTok, Facebook - 100k) hoặc gói siêu tốc 5G150 (6GB/ngày - 150k) là sự lựa chọn hợp lý và tiết kiệm nhất mà không bị tốn chi phí cho phút thoại không dùng đến.',
    },
    {
      q: 'Gói cước nào vừa có nhiều phút gọi, vừa có Data tốc độ cao mỗi ngày?',
      a: 'Gói VD130 (2GB/ngày, miễn phí gọi nội mạng ≤10 phút, 80 phút ngoại mạng - 130k) và đặc biệt gói D159V (6GB/ngày, miễn phí gọi nội mạng ≤30 phút, 200 phút ngoại mạng, 200 SMS - 159k) là hai gói cước tích hợp toàn diện được tin dùng nhiều nhất hiện nay.',
    },
    {
      q: 'Gói cước nào có bản quyền MyTV chuẩn xem trực tiếp bóng đá và truyền hình?',
      a: 'Các gói D159V, VIP199, VIP249 đều được tích hợp sẵn tài khoản truyền hình MyTV Gói Chuẩn/Mobile với gần 180 kênh truyền hình trong nước & quốc tế, trọn vẹn các giải đấu thể thao độc quyền, xem miễn phí 100% dung lượng Data 4G/5G khi đăng nhập trên smartphone và smart TV.',
    },
    {
      q: 'Gói nào tích hợp giải pháp trí tuệ nhân tạo vnGenAI?',
      a: 'Gói cước GENAI155 (155.000đ/tháng) là gói cước tiên phong độc quyền của VinaPhone VNPT tặng kèm tài khoản trải nghiệm trợ lý AI thông minh vnGenAI giúp tra cứu tài liệu tiếng Việt chính xác, tạo nội dung, dịch thuật và tối ưu công việc mỗi ngày.',
    },
    {
      q: 'Khi hết dung lượng Data tốc độ cao trong ngày thì hệ thống xử lý như thế nào?',
      a: 'Tùy từng gói cước: Đối với các gói kiểm soát cước (như VD130, D159V, VIP...), khi hết dung lượng tốc độ cao trong ngày hệ thống sẽ tạm dừng truy cập để tránh phát sinh cước ngoài ý muốn cho khách hàng và sẽ tự động cấp lại dung lượng mới vào 0h00 ngày hôm sau. Đối với gói U150, bạn được truy cập không giới hạn ở tốc độ tiêu chuẩn.',
    },
    {
      q: 'Tôi có thể thanh toán chu kỳ dài 6 tháng hoặc 12 tháng để nhận chiết khấu không?',
      a: 'Có! Hầu hết các gói cước chính như D159V, VD130, U900, U1500 đều hỗ trợ chu kỳ 6 tháng (tặng thêm 1 tháng) hoặc chu kỳ 12 tháng (tặng thêm 2 tháng) giúp khách hàng tiết kiệm chi phí tới 20% và tiện lợi sử dụng suốt cả năm.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="hoi-dap" className="w-full py-16 lg:py-20 bg-[#faf8ff]">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#004e9f] font-bold px-3 py-1 bg-[#004e9f]/10 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" /> Giải Đáp Nhanh Thắc Mắc
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#131b2e] tracking-tight mt-2">
            CÂU HỎI THƯỜNG GẶP VỀ DỊCH VỤ VINAPHONE
          </h2>
          <p className="text-xs sm:text-sm text-[#414753] mt-2">
            Thông tin minh bạch, rõ ràng theo quy định mới nhất từ VNPT
          </p>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e7ff] transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-[#131b2e] hover:text-[#004e9f] transition-colors gap-3"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#004e9f] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#414753] leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
