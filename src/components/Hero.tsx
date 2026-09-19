import React from 'react';
import { 
  Zap, 
  PhoneCall, 
  Sparkles, 
  Tv, 
  Flame, 
  BrainCircuit, 
  Gauge, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onQuizClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onQuizClick }) => {
  return (
    <section 
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#001f28] text-white pt-24 pb-16 lg:pb-24"
    >
      {/* Ambient 5G Network Wave & Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0066cc]/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[520px] h-[520px] rounded-full bg-[#00d2ff]/20 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#5356e1]/30 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Telemetry / Badge Bar */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md shadow-sm mb-4 border border-white/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d2ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00d2ff]"></span>
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-[#b6ebff]">
                Hạ tầng 5G VinaPhone VNPT Toàn Quốc
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4">
              CHỌN ĐÚNG GÓI CƯỚC<br />
              <span className="bg-gradient-to-r from-[#b6ebff] via-[#00d2ff] to-[#aac7ff] bg-clip-text text-transparent">
                KẾT NỐI TRỌN MỌI NHU CẦU
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#dae2fd] font-normal max-w-2xl mb-6 leading-relaxed">
              Data tốc độ cao • Gọi thả ga • 5G Siêu Tốc • Truyền hình MyTV • vnGenAI • Gaming Low-Ping
            </p>

            {/* Badges Cluster */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 hover:bg-white/20 transition-colors">
                <Zap className="w-3.5 h-3.5 text-[#00d2ff]" /> 5G Ready Siêu Tốc
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 hover:bg-white/20 transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-[#00d2ff]" /> Miễn Phí Gọi Nội Mạng
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 hover:bg-white/20 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-[#00d2ff]" /> vnGenAI Tích Hợp
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 hover:bg-white/20 transition-colors">
                <Tv className="w-3.5 h-3.5 text-[#00d2ff]" /> MyTV OTT Chuẩn 4K
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm shadow-[0_8px_24px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all"
                id="hero-explore-btn"
              >
                <Flame className="w-5 h-5 text-white" />
                <span>KHÁM PHÁ GÓI CƯỚC</span>
              </button>

              <button
                onClick={onQuizClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm backdrop-blur-md border border-white/20 transition-all hover:-translate-y-0.5"
                id="hero-quiz-btn"
              >
                <BrainCircuit className="w-5 h-5 text-[#00d2ff]" />
                <span>TƯ VẤN THÔNG MINH (30s)</span>
              </button>
            </div>

            {/* Trust Micro-Proof */}
            <div className="mt-8 flex items-center gap-3 text-[#dae2fd] text-xs">
              <div className="flex items-center -space-x-2">
                <span className="w-7 h-7 rounded-full bg-[#0066cc] text-white flex items-center justify-center text-[10px] font-bold shadow-sm ring-2 ring-[#001f28]">
                  5G
                </span>
                <span className="w-7 h-7 rounded-full bg-[#00677f] text-white flex items-center justify-center text-[10px] font-bold shadow-sm ring-2 ring-[#001f28]">
                  AI
                </span>
                <span className="w-7 h-7 rounded-full bg-[#3a3ac8] text-white flex items-center justify-center text-[10px] font-bold shadow-sm ring-2 ring-[#001f28]">
                  OTT
                </span>
              </div>
              <span>Cam kết phủ sóng trên 99% dân số • Tối ưu cước 40%</span>
            </div>
          </div>

          {/* Hero Right Column: Image & Telemetry Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl p-2 border border-white/20 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoQvNRoJ1NF2Xvnzk1YtljZ1wONLzpZM9N6tDMB1fuF93sS0jQMt7G7ZYSI2Jxs4LfQMeMqCh5VeRfi7IBAHAnR46Mxo7eP9ct_CQmkTmDgNvGbne4jJFx2YP_GV5hBpmqHcSv7XcejJPeBVAXST_Zkuf-qL4nbINn_eisRgjpgwvDjB0FYNT2SmCjaZ7ch1w6OxwE1DaD8soH7hNXvQYvdc1Eghx3cz1cpZy6byRJqwRNHjk3Jn5n"
                alt="Trải nghiệm VinaPhone 5G tốc độ cao"
                className="w-full h-[380px] sm:h-[440px] md:h-[480px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f28]/95 via-transparent to-transparent rounded-xl pointer-events-none" />

              {/* Floating Top Right Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg text-[#004e9f] font-bold text-xs flex items-center gap-1.5 border border-white/40">
                <ShieldCheck className="w-4 h-4 text-[#f97316]" />
                <span>VNPT Telecom 2025</span>
              </div>

              {/* Floating Bottom Telemetry Glass Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-xl text-[#131b2e] shadow-xl flex items-center justify-between border border-white/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#004e9f]/10 text-[#004e9f] flex items-center justify-center shrink-0">
                    <Gauge className="w-5 h-5 text-[#004e9f]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#414753] font-medium">Tốc độ tải 5G đỉnh cao</div>
                    <div className="text-xl sm:text-2xl font-black text-[#004e9f] tracking-tight">
                      1.2 Gbps
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded bg-[#d7e3ff] text-[#001b3e]">
                    <Zap className="w-3 h-3 text-[#004e9f]" /> Siêu mượt
                  </span>
                  <div className="text-xs text-[#414753] mt-0.5 font-medium">Độ trễ 4ms</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
