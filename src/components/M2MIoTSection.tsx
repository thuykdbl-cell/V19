import React from 'react';
import { 
  Cpu, 
  MapPin, 
  Video, 
  CreditCard, 
  Building, 
  Headphones 
} from 'lucide-react';

interface M2MIoTSectionProps {
  onContactIoT: () => void;
}

export const M2MIoTSection: React.FC<M2MIoTSectionProps> = ({ onContactIoT }) => {
  return (
    <section id="m2m-iot-section" className="w-full py-8 bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="p-6 lg:p-10 rounded-3xl bg-gradient-to-r from-[#dae2fd]/50 to-[#e2e7ff]/60 border border-[#c1c6d5]/50 backdrop-blur-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004e9f]/10 text-[#004e9f] text-xs font-bold mb-3">
                <Cpu className="w-3.5 h-3.5" /> 
                Giải Pháp Kết Nối Công Nghiệp & Đô Thị Thông Minh
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#131b2e] mb-2 tracking-tight">
                SIM CHUYÊN DỤNG M2M & IOT VINAPHONE
              </h3>

              <p className="text-xs sm:text-sm text-[#414753] leading-relaxed mb-6 max-w-3xl">
                Hệ thống SIM viễn thông thiết kế đặc thù cho các thiết bị công nghiệp hoạt động bền bỉ trong môi trường khắc nghiệt: Định vị GPS xe ô tô, camera giám sát giao thông thông minh, trạm quan trắc môi trường, đồng hồ đo điện nước tự động, máy POS thanh toán và giải pháp Smart City.
              </p>

              {/* 4 Feature Tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-[#131b2e]">
                <div className="p-3 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-white/60">
                  <MapPin className="w-4 h-4 text-[#004e9f] shrink-0" />
                  <span>Định vị GPS</span>
                </div>
                <div className="p-3 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-white/60">
                  <Video className="w-4 h-4 text-[#004e9f] shrink-0" />
                  <span>Camera AI</span>
                </div>
                <div className="p-3 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-white/60">
                  <CreditCard className="w-4 h-4 text-[#004e9f] shrink-0" />
                  <span>Máy POS ngân hàng</span>
                </div>
                <div className="p-3 bg-white rounded-xl flex items-center gap-2 shadow-sm border border-white/60">
                  <Building className="w-4 h-4 text-[#004e9f] shrink-0" />
                  <span>Smart City IoT</span>
                </div>
              </div>
            </div>

            {/* Right Contact Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-[#e2e7ff] text-center">
              <div className="w-12 h-12 rounded-full bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center mb-3">
                <Headphones className="w-6 h-6" />
              </div>
              <div className="text-base font-bold text-[#131b2e]">Dự Án Doanh Nghiệp & IoT</div>
              <p className="text-xs text-[#414753] mb-4 mt-1">
                Cung cấp giải pháp định mức riêng, API quản trị SIM từ xa trên cổng IoT Portal VNPT.
              </p>
              <button
                onClick={onContactIoT}
                className="w-full py-3 rounded-xl bg-[#004e9f] hover:bg-[#0066cc] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                Liên Hệ Chuyên Viên IoT
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
