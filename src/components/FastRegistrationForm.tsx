import React, { useState } from 'react';
import { TelecomPackage } from '../types';
import { Send, CheckCircle2, ShieldCheck, Phone, User, FileText } from 'lucide-react';

interface FastRegistrationFormProps {
  selectedPackageId: string;
  onPackageChange: (pkgId: string) => void;
  allPackages: TelecomPackage[];
  customNote?: string;
}

export const FastRegistrationForm: React.FC<FastRegistrationFormProps> = ({
  selectedPackageId,
  onPackageChange,
  allPackages,
  customNote = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [simType, setSimType] = useState('prepaid');
  const [note, setNote] = useState(customNote);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Synchronize when customNote changes
  React.useEffect(() => {
    if (customNote) {
      setNote(customNote);
    }
  }, [customNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanPhone = phone.replace(/\s+/g, '');
    if (!cleanPhone || cleanPhone.length < 10 || !/^[0-9]+$/.test(cleanPhone)) {
      setErrorMessage('Vui lòng nhập đúng số điện thoại di động gồm 10 chữ số (vd: 0912345678).');
      return;
    }

    if (!fullName.trim()) {
      setErrorMessage('Vui lòng nhập họ và tên của bạn.');
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <section id="dang-ky-tu-van" className="w-full py-16 bg-[#f2f3ff] border-t border-[#e2e7ff]">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#e2e7ff]">
          
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider text-[#004e9f] font-bold px-3 py-1 bg-[#004e9f]/10 rounded-full">
              Kích Hoạt Nhanh Trực Tuyến
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#131b2e] tracking-tight mt-2">
              CHỌN GÓI PHÙ HỢP – ĐĂNG KÝ NGAY
            </h2>
            <p className="text-xs sm:text-sm text-[#414753] mt-2">
              Để lại số điện thoại, chuyên viên VinaPhone sẽ liên hệ xác nhận và hướng dẫn kích hoạt miễn phí trong 5 phút.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#131b2e] mb-1.5 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#004e9f]" /> Họ và tên quý khách *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn An"
                  className="w-full h-12 px-4 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-sm outline-none border border-transparent focus:border-[#004e9f] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#131b2e] mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#004e9f]" /> Số điện thoại di động *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ví dụ: 0912345678"
                  className="w-full h-12 px-4 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-sm outline-none border border-transparent focus:border-[#004e9f] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#131b2e] mb-1.5">
                  Gói cước bạn quan tâm *
                </label>
                <select
                  required
                  value={selectedPackageId}
                  onChange={(e) => onPackageChange(e.target.value)}
                  className="w-full h-12 px-3 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-xs sm:text-sm outline-none border border-transparent focus:border-[#004e9f] focus:bg-white transition-all font-medium"
                >
                  <option value="D159V">D159V - 159k (6GB/ngày, 1.500p nội, 200p ngoại, MyTV)</option>
                  <option value="VD130">VD130 - 130k (2GB/ngày, miễn phí gọi nội mạng, 80p ngoại)</option>
                  <option value="GENAI155">GENAI155 - 155k (3GB/ngày, vnGenAI, TikTok free)</option>
                  <option value="D169G">D169G - 169k (7GB/ngày, Game Liên Quân free, 2.000p)</option>
                  <option value="VIP199">VIP199 - 199k (8GB/ngày, 2.000p nội, 250p ngoại)</option>
                  <option value="VIP249">VIP249 - 249k (10GB/ngày, Free YouTube/TikTok/MyTV)</option>
                  <option value="VIP349">VIP349 - 349k (10GB/ngày, 4.000p nội, 400p ngoại)</option>
                  <option value="VIP499">VIP499 - 499k (500GB/tháng, MultiSIM, 4.000p)</option>
                  <option value="5G150">5G150 - 150k (6GB/ngày tốc độ 5G siêu nhanh)</option>
                  <option value="YOLO100">YOLO100 - 100k (1GB/ngày - 30GB/tháng)</option>
                  <option value="YOLO100M">YOLO100M - 100k (Miễn phí YouTube, TikTok, Facebook)</option>
                  <option value="YOLO125Z">YOLO125Z - 125k (7GB/ngày trong vùng & toàn quốc)</option>
                  <option value="U150">U150 - 150k (Data không giới hạn chu kỳ)</option>
                  <option value="U900">U900 - 900k (Chu kỳ 6 tháng, 500GB/tháng)</option>
                  <option value="U1500">U1500 - 1.500k (Chu kỳ 12 tháng trọn gói)</option>
                  <option value="VTALK99">VTalk99 - 99k (Thoại nhóm Doanh Nghiệp SME)</option>
                  <option value="OFFICE199">Office199 - 199k (Văn phòng số, 6GB/ngày)</option>
                  <option value="TG249">TG249 - 249k (Thương gia lãnh đạo, 8GB/ngày)</option>
                  <option value="IOT_SIM">SIM IoT / M2M Giám sát thiết bị</option>
                  <option value="OTHER">Gói cước khác / Cần tư vấn thêm</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#131b2e] mb-1.5">
                  Hình thức sim hiện tại
                </label>
                <select
                  value={simType}
                  onChange={(e) => setSimType(e.target.value)}
                  className="w-full h-12 px-3 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-xs sm:text-sm outline-none border border-transparent focus:border-[#004e9f] focus:bg-white transition-all font-medium"
                >
                  <option value="prepaid">SIM VinaPhone Trả Trước</option>
                  <option value="postpaid">SIM VinaPhone Trả Sau</option>
                  <option value="mnp">Đổi mạng giữ số sang VinaPhone (MNP)</option>
                  <option value="new_esim">Mua SIM mới / Đăng ký eSIM mới</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#131b2e] mb-1.5 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#004e9f]" /> Ghi chú yêu cầu thêm (Tùy chọn)
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ví dụ: Gọi tư vấn trong giờ hành chính, muốn đăng ký chu kỳ 6 tháng..."
                className="w-full p-3.5 rounded-xl bg-[#f2f3ff] text-[#131b2e] text-sm outline-none border border-transparent focus:border-[#004e9f] focus:bg-white transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-bold shadow-[0_8px_24px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2 transition-all mt-2 active:scale-[0.99]"
            >
              <Send className="w-5 h-5 text-white" />
              <span>NHẬN TƯ VẤN & KÍCH HOẠT NGAY</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-center text-xs text-[#727784] mt-1">
              <ShieldCheck className="w-4 h-4 text-[#00677f]" />
              <span>Thông tin được mã hóa bảo mật theo chuẩn ISO/IEC 27001 của Tập đoàn VNPT.</span>
            </div>
          </form>

          {/* Success Banner */}
          {isSubmitted && (
            <div className="mt-6 p-4 rounded-xl bg-[#b6ebff] text-[#001f28] flex items-center gap-3 border border-[#00d2ff]">
              <CheckCircle2 className="w-7 h-7 text-[#00677f] shrink-0" />
              <div>
                <div className="text-sm font-bold">Đăng ký thành công!</div>
                <div className="text-xs sm:text-sm mt-0.5">
                  Chuyên viên VinaPhone sẽ liên hệ số điện thoại <strong>{phone}</strong> trong ít phút để xác nhận và hướng dẫn kích hoạt gói <strong>{selectedPackageId}</strong>.
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
