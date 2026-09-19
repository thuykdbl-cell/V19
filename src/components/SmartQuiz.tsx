import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Wifi, 
  PlayCircle, 
  Zap, 
  PhoneOff, 
  PhoneCall, 
  Headphones, 
  Share2, 
  Tv, 
  Bot, 
  PiggyBank, 
  Wallet, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw 
} from 'lucide-react';
import { TelecomPackage } from '../types';

interface SmartQuizProps {
  onSelectRecommended: (pkgId: string) => void;
  allPackages: TelecomPackage[];
}

export const SmartQuiz: React.FC<SmartQuizProps> = ({ onSelectRecommended, allPackages }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    data?: 'low' | 'medium' | 'heavy';
    voice?: 'low' | 'internal' | 'both';
    app?: 'social' | 'tv' | 'ai_game';
    budget?: 'budget_low' | 'budget_med' | 'budget_high';
  }>({});

  const handleSelectData = (val: 'low' | 'medium' | 'heavy') => {
    setAnswers({ ...answers, data: val });
    setStep(2);
  };

  const handleSelectVoice = (val: 'low' | 'internal' | 'both') => {
    setAnswers({ ...answers, voice: val });
    setStep(3);
  };

  const handleSelectApp = (val: 'social' | 'tv' | 'ai_game') => {
    setAnswers({ ...answers, app: val });
    setStep(4);
  };

  const handleSelectBudget = (val: 'budget_low' | 'budget_med' | 'budget_high') => {
    setAnswers({ ...answers, budget: val });
    setStep(5); // Result
  };

  const handleReset = () => {
    setAnswers({});
    setStep(1);
  };

  // Compute recommendation
  let recPkgId = 'D159V';
  let recReason = 'Gói cước toàn diện số 1 với 6GB/ngày, miễn phí thoại nội mạng ≤30 phút và tặng kèm truyền hình MyTV OTT.';

  if (answers.app === 'ai_game') {
    recPkgId = 'GENAI155';
    recReason = 'Tích hợp bản quyền trợ lý AI vnGenAI đỉnh cao, 3GB/ngày và miễn phí 100% data lướt TikTok mượt mà.';
  } else if (answers.budget === 'budget_low') {
    recPkgId = 'VD130';
    recReason = 'Mức giá siêu tiết kiệm chỉ 130.000đ/tháng với 2GB/ngày và miễn phí thoại nội & ngoại mạng.';
  } else if (answers.budget === 'budget_high' || answers.data === 'heavy') {
    recPkgId = 'VIP249';
    recReason = 'Dung lượng cực khủng 10GB/ngày (300GB/tháng) kèm miễn phí 100% data xem YouTube, TikTok, MyTV.';
  }

  const recPkg = allPackages.find((p) => p.id === recPkgId);

  const getProgressBarWidth = () => {
    switch (step) {
      case 1:
        return '25%';
      case 2:
        return '50%';
      case 3:
        return '75%';
      case 4:
        return '90%';
      case 5:
        return '100%';
      default:
        return '25%';
    }
  };

  return (
    <section id="quick-quiz" className="w-full py-16 bg-[#f2f3ff] border-t border-[#e2e7ff]">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#e2e7ff] relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="w-full bg-[#eaedff] h-2.5 rounded-full mb-8 overflow-hidden">
            <div
              className="bg-[#004e9f] h-full transition-all duration-500 rounded-full"
              style={{ width: getProgressBarWidth() }}
            />
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#004e9f] font-extrabold px-3 py-1 bg-[#004e9f]/10 rounded-full">
                  <BrainCircuit className="w-3.5 h-3.5" /> Trắc Nghiệm Thông Minh (Bước 1/4)
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#131b2e] mt-2">
                  Bước 1: Nhu cầu sử dụng Data của bạn thế nào?
                </h2>
                <p className="text-xs sm:text-sm text-[#414753] mt-1">
                  Chọn câu trả lời gần đúng nhất với sinh hoạt hàng ngày
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleSelectData('low')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#004e9f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center shrink-0">
                      <Wifi className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Cơ bản (Lướt web, đọc báo, chat Zalo)
                      </div>
                      <div className="text-xs text-[#414753]">Khoảng 1GB - 2GB / ngày</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#004e9f] transition-colors" />
                </button>

                <button
                  onClick={() => handleSelectData('medium')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#004e9f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center shrink-0">
                      <PlayCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Trung bình (Xem video, lướt TikTok, họp online nhẹ)
                      </div>
                      <div className="text-xs text-[#414753]">Khoảng 3GB - 6GB / ngày</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#004e9f] transition-colors" />
                </button>

                <button
                  onClick={() => handleSelectData('heavy')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#004e9f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-[#004e9f]" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Rất nhiều (Phim 4K, Game online, Phát WiFi liên tục)
                      </div>
                      <div className="text-xs text-[#414753]">Từ 7GB - 10GB / ngày hoặc Data chu kỳ khủng</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#004e9f] transition-colors" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#00677f] font-extrabold px-3 py-1 bg-[#00677f]/10 rounded-full">
                  <PhoneCall className="w-3.5 h-3.5" /> Nhu Cầu Thoại (Bước 2/4)
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#131b2e] mt-2">
                  Bước 2: Nhu cầu gọi thoại liên lạc của bạn ra sao?
                </h2>
                <p className="text-xs sm:text-sm text-[#414753] mt-1">
                  VinaPhone giúp bạn tối ưu chi phí gọi nội mạng và ngoại mạng
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleSelectVoice('low')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#00677f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00677f]/10 text-[#00677f] flex items-center justify-center shrink-0">
                      <PhoneOff className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Ít gọi thoại thông thường
                      </div>
                      <div className="text-xs text-[#414753]">Chủ yếu gọi qua ứng dụng OTT (Zalo, Messenger)</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#00677f] transition-colors" />
                </button>

                <button
                  onClick={() => handleSelectVoice('internal')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#00677f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00677f]/10 text-[#00677f] flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Thường xuyên gọi nội mạng VinaPhone
                      </div>
                      <div className="text-xs text-[#414753]">Cần gọi người thân, gia đình, đồng nghiệp cùng mạng</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#00677f] transition-colors" />
                </button>

                <button
                  onClick={() => handleSelectVoice('both')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#00677f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00677f]/10 text-[#00677f] flex items-center justify-center shrink-0">
                      <Headphones className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Gọi rất nhiều mọi mạng (Ngoại mạng + Nội mạng)
                      </div>
                      <div className="text-xs text-[#414753]">Cần trên 150 - 300 phút gọi liên mạng mỗi tháng</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#00677f] transition-colors" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div>
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#3a3ac8] font-extrabold px-3 py-1 bg-[#3a3ac8]/10 rounded-full">
                  <Share2 className="w-3.5 h-3.5" /> Ứng Dụng Yêu Thích (Bước 3/4)
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#131b2e] mt-2">
                  Bước 3: Ứng dụng bạn dùng thường xuyên nhất là gì?
                </h2>
                <p className="text-xs sm:text-sm text-[#414753] mt-1">
                  Gói cước có thể miễn cước 100% dung lượng data cho app này
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleSelectApp('social')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#3a3ac8]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3a3ac8]/10 text-[#3a3ac8] flex items-center justify-center shrink-0">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Lướt Mạng Xã Hội (TikTok, YouTube, Facebook)
                      </div>
                      <div className="text-xs text-[#414753]">Cần gói miễn cước Data riêng cho ứng dụng video</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#3a3ac8] transition-colors" />
                </button>

                <button
                  onClick={() => handleSelectApp('tv')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#3a3ac8]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3a3ac8]/10 text-[#3a3ac8] flex items-center justify-center shrink-0">
                      <Tv className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Xem Truyền Hình & Thể Thao MyTV
                      </div>
                      <div className="text-xs text-[#414753]">Cần bản quyền phim & các kênh thể thao trực tiếp</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#3a3ac8] transition-colors" />
                </button>

                <button
                  onClick={() => handleSelectApp('ai_game')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#3a3ac8]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3a3ac8]/10 text-[#3a3ac8] flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Trí tuệ nhân tạo vnGenAI hoặc Chơi game
                      </div>
                      <div className="text-xs text-[#414753]">Tối ưu hiệu suất làm việc hoặc đường truyền game low-ping</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#3a3ac8] transition-colors" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div>
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#004e9f] font-extrabold px-3 py-1 bg-[#004e9f]/10 rounded-full">
                  <Wallet className="w-3.5 h-3.5" /> Ngân Sách Dự Kiến (Bước 4/4)
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#131b2e] mt-2">
                  Bước 4: Mức ngân sách dự kiến hàng tháng của bạn?
                </h2>
                <p className="text-xs sm:text-sm text-[#414753] mt-1">
                  Chỉ một bước cuối để tìm ra gói cước chân ái
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleSelectBudget('budget_low')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#004e9f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center shrink-0">
                      <PiggyBank className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Dưới 150.000đ / tháng
                      </div>
                      <div className="text-xs text-[#414753]">Ưu tiên tối ưu ngân sách chi tiêu tốt nhất</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-[#004e9f] transition-colors" />
                </button>

                <button
                  onClick={() => handleSelectBudget('budget_med')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#004e9f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center shrink-0">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        150.000đ – 200.000đ / tháng
                      </div>
                      <div className="text-xs text-[#414753]">Đầy đủ quyền lợi Data cực đã + Thoại thoải mái</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-[#004e9f] transition-colors" />
                </button>

                <button
                  onClick={() => handleSelectBudget('budget_high')}
                  className="p-4 rounded-2xl bg-[#f2f3ff] hover:bg-[#e2e7ff] transition-all text-left flex items-center justify-between group border border-transparent hover:border-[#004e9f]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center shrink-0">
                      <Crown className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#131b2e]">
                        Trên 200.000đ / tháng
                      </div>
                      <div className="text-xs text-[#414753]">Trải nghiệm VIP cao cấp, không giới hạn</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-[#004e9f] transition-colors" />
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Result Screen */}
          {step === 5 && (
            <div className="p-6 rounded-2xl bg-[#f2f3ff] text-center border border-[#e2e7ff]">
              <div className="w-16 h-16 rounded-full bg-[#004e9f] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                <Sparkles className="w-8 h-8 text-[#b6ebff]" />
              </div>

              <span className="text-xs uppercase tracking-wider text-[#004e9f] font-bold px-3 py-1 bg-white rounded-full shadow-sm">
                Đề Xuất Phù Hợp Nhất
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#131b2e] mt-2">
                Gói Cước Tối Ưu: <span className="text-[#004e9f]">{recPkg?.name || recPkgId}</span>
              </h3>

              {recPkg && (
                <div className="text-lg font-black text-[#f97316] mt-1">
                  {recPkg.price.toLocaleString('vi-VN')} {recPkg.periodText} • {recPkg.dailyDataText}
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#414753] max-w-lg mx-auto mt-2 mb-6 leading-relaxed">
                {recReason}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => onSelectRecommended(recPkgId)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#f97316] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#ea580c] transition-all"
                >
                  Đăng Ký Gói Này Ngay
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#414753] text-xs sm:text-sm font-bold hover:bg-[#e2e7ff] transition-all flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  Làm lại câu hỏi
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
