import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Share2, Globe, Tv } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="w-full bg-[#f2f3ff] text-[#414753] pt-16 pb-28 md:pb-16 border-t border-[#e2e7ff]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VSQMRX_Rql7BecbhFhC2Uxz8vbv_LmQnBR3K7725TZfMxtQUUofPTDhQxQ8MfbFmn7ESJfPjG5p3E4-Y9CpsLX3oUWzmF-AFmFuJnhU93ewCqgbV9L0eGjh0cVAfsGDk-rnGS48OSZRfcyo3-_xN1Y2xpTUSEVfpBaFAmqy_P51KiXZOzd3d69Sh93Ifmr07SgD5MEdTBQ1TRFahqi_IaqNHGOg_NiFTXAlMwlRnze5ri8gH6d3u2tKw"
                alt="VinaPhone VNPT Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-xl font-black text-[#004e9f]">
                VNPT VinaPhone
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#414753] leading-relaxed">
              Tổng công ty Dịch vụ Viễn thông VNPT - Tiên phong chuyển đổi số quốc gia và hạ tầng mạng 5G tốc độ cao dẫn đầu Việt Nam.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#004e9f]">
                <Share2 className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#004e9f]">
                <Globe className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#004e9f]">
                <Tv className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Col 2: Dịch vụ */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#131b2e] uppercase tracking-wider">
              Dịch vụ Viễn thông Di động
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => onScrollTo('danh-sach-goi')} 
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Gói cước 5G Siêu Tốc YOLO
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('danh-sach-goi')} 
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Gói cước Thoại & Data Đỉnh Cao (D159V, VD130)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('dang-ky-tu-van')} 
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Đăng ký eSIM VinaPhone Online
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('dang-ky-tu-van')} 
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Chọn SIM Số Đẹp Phong Thủy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('dang-ky-tu-van')} 
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Chuyển Mạng Giữ Số (MNP)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Chính sách & Hỗ trợ */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#131b2e] uppercase tracking-wider">
              Chính sách & Hỗ trợ
            </h4>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm">
              <li>
                <span className="hover:text-[#004e9f] cursor-pointer">Chính sách bảo mật thông tin</span>
              </li>
              <li>
                <span className="hover:text-[#004e9f] cursor-pointer">Điều khoản & Điều kiện sử dụng</span>
              </li>
              <li>
                <button 
                  onClick={() => onScrollTo('hoi-dap')} 
                  className="hover:text-[#004e9f] transition-colors text-left"
                >
                  Trung tâm giải đáp thắc mắc FAQ
                </button>
              </li>
              <li>
                <span className="hover:text-[#004e9f] cursor-pointer">Điểm giao dịch & Cửa hàng VinaPhone</span>
              </li>
              <li>
                <span className="hover:text-[#004e9f] cursor-pointer">Hướng dẫn thanh toán VNPT Money</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Thông tin liên hệ */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-[#131b2e] uppercase tracking-wider">
              Thông tin liên hệ
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#004e9f] shrink-0 mt-0.5" />
                <span>Tòa nhà VNPT, số 57 phố Huỳnh Thúc Kháng, Láng Hạ, Đống Đa, Hà Nội</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#004e9f] shrink-0" />
                <span>Tổng đài CSKH: <strong>1800 1091</strong> (24/7)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#004e9f] shrink-0" />
                <span>cskh@vnpt.vn</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#c1c6d5]/60 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-[#727784]">
          <p>
            © 2025 Tổng công ty Dịch vụ Viễn thông (VNPT VinaPhone). Giấy phép cung cấp dịch vụ viễn thông số 469/GP-BTTTT cấp ngày 14/10/2016 bởi Bộ TT&TT.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#00677f]" />
            <span>Bảo mật chuẩn ISO/IEC 27001</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
