import React from 'react';
import Link from 'next/link';
import { Github, Mail, ExternalLink, Code2, Rocket, ShieldCheck, ChevronDown } from 'lucide-react';
import EducationCard from '@/components/EducationCard';
import Orb from '@/components/Orb';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen text-zinc-900 selection:bg-zinc-100 relative">

      {/* 0. Orb — anchored near hero, no scroll follow */}
      {/* <div className="absolute left-2/5 -translate-x-1/2 top-16 w-[680px] h-[680px] -z-10">
        <Orb
          hue={54}
          hoverIntensity={0.32}
          rotateOnHover={true}
          forceHoverState={false}
        />
      </div> */}

      {/* 1. Navigation: 아주 최소한의 정보만 담은 상단 바 */}
      <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-zinc-100/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/apple-touch-icon.png" alt="JAKE.DEV Logo" className="w-8 h-8 rounded-lg shadow-sm" />
            <span className="font-bold tracking-tighter text-xl">JAKE.DEV</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="mailto:jaybin7@gmail.com" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        {/* 2. Hero Section: 본인의 정체성을 한 줄로 정의 */}
        <section className="space-y-6 py-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Technical PM&middot;PO <br />
            <span className="text-zinc-400">& Developer.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-snug break-keep">
            심도 있는 이공학적 전문성을 통해 '기술적 가능성'을 최적의 제품 경험으로 구현해 냅니다. 기능 구현을 넘어, 사용자가 제품을 만나는 모든 순간의 완성도를 고민하고 관리합니다.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/ijake-16" className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all">
              <Github size={20} />
            </a>
            <a href="mailto:jaybin7@gmail.com" className="p-2 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </section>



        {/* Projects Section */}
        <section id="projects" className="space-y-2">
          <div className="flex items-end justify-between border-b border-zinc-100 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          </div>
          <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 py-4">Featured Projects</p>

          {/* Featured: 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 space-y-8">

            {/* Card 1: Rust 보안 프로젝트 */}
            <Link href="/projects/rdp" className="group space-y-4 block">
              <div className="aspect-video rounded-2xl overflow-hidden relative bg-[#09090B] border border-zinc-800 group-hover:shadow-[0_8px_30px_rgba(220,38,38,0.2)] transition-all duration-500 group-hover:-translate-y-1">
                <svg className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
                  {/* Abstract Red/Black Security */}
                  <rect x="-50" y="0" width="250" height="225" fill="#18181B" />
                  <circle cx="180" cy="112" r="90" fill="#991B1B" />
                  <path d="M260 225 L350 40 L440 225 Z" fill="#000000" />
                  <circle cx="350" cy="40" r="24" fill="#DC2626" />
                  <circle cx="350" cy="40" r="8" fill="#FFFFFF" />
                  <rect x="60" y="40" width="60" height="60" rx="16" fill="#EF4444" />
                  <rect x="0" y="160" width="120" height="30" fill="#7F1D1D" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/50 to-transparent" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-lg font-bold text-white">Zero-Client WebVDI</h3>
                      <ExternalLink size={15} className="text-red-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-600 text-sm leading-relaxed">
                  [졸업프로젝트] Rust-on-React 아키텍처로 구현한 차세대 Zero-Client 원격 데스크톱.
                  Rust 기반 RDP 보안 시스템을 WASM으로 컴파일하여 브라우저에 이식하고, 뷰포트 기반 실시간 해상도 자동 협상(Auto-negotiation)등의 기능을 통해 별도의 설치 없이도 네이티브 수준의 지연 없는 원격 경험을 제공합니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Rust/WASM', 'Full-Stack', '1-person'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>



            {/* Card 2: 카카오 임팩트 */}
            <Link href="/projects/bttf" className="group space-y-3 block">
              <div className="aspect-video rounded-2xl overflow-hidden relative bg-[#FEF08A] border border-yellow-300 group-hover:shadow-[0_8px_30px_rgba(234,179,8,0.3)] transition-all duration-500 group-hover:-translate-y-1">
                <svg className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
                  {/* Abstract Yellow/Green Impact/Safety */}
                  <path d="M0 0 L250 0 L150 225 L0 225 Z" fill="#FDE047" />
                  <rect x="180" y="20" width="140" height="140" rx="32" fill="#EAB308" transform="rotate(15 250 90)" />
                  <circle cx="120" cy="130" r="80" fill="#16A34A" />
                  <circle cx="120" cy="130" r="32" fill="#FEF08A" />
                  <path d="M260 225 L340 60 L420 225 Z" fill="#22C55E" />
                  <rect x="40" y="40" width="40" height="80" fill="#CA8A04" />
                  <circle cx="340" cy="60" r="20" fill="#15803D" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-bold text-white">Tech for Impact</h3>
                    <ExternalLink size={15} className="text-green-400" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 px-1">
                <p className="text-zinc-600 text-sm leading-relaxed">
                  [카카오임팩트] 재난 안전 교육의 물리적 한계를 깨는 게이미피케이션 플랫폼.
                  기술 기획(PM)과 풀스택 개발에 참여하며 두 단계에 걸쳐 상용화 수준으로 고도화했습니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['SolidJS', 'React', 'Tech PM', '10+ members'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Card 3: 보드버디 */}
            <Link href="/projects/boardbuddy" className="group space-y-3 block">
              <div className="aspect-video rounded-2xl overflow-hidden relative bg-[#EFF6FF] border border-blue-100 group-hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] transition-all duration-500 group-hover:-translate-y-1">
                <svg className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
                  {/* Abstract Blue/White Wintersports */}
                  <path d="M120 225 L320 0 L450 100 L450 225 Z" fill="#BFDBFE" />
                  <path d="M-50 225 L150 -50 L350 150 L450 225 Z" fill="#FFFFFF" />
                  <path d="M0 225 L200 40 L400 225 Z" fill="#60A5FA" />
                  <rect x="160" y="70" width="120" height="24" rx="12" fill="#2563EB" transform="rotate(30 220 82)" />
                  <circle cx="80" cy="80" r="48" fill="#93C5FD" />
                  <circle cx="80" cy="80" r="16" fill="#EFF6FF" />
                  <circle cx="280" cy="40" r="16" fill="#1D4ED8" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-bold text-white">Boardbuddy</h3>
                    <ExternalLink size={15} className="text-blue-300" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 px-1">
                <p className="text-zinc-600 text-sm leading-relaxed">
                  [사이드프로젝트] 연합 스노보드 동아리 운영의 페인포인트를 해결하는 수익형 플랫폼.
                  기획부터 개발까지 전 과정을 주도하며 대규모 트래픽 환경의 동시성 및 데이터 정합성 문제를 해결했습니다. 현재 베타테스팅중
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Spring Boot', 'Product Owner', '2-people'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

          </div>

          {/* Other Projects: list view */}
          <details className="group border-t border-zinc-100">
            <summary className="flex items-center justify-between cursor-pointer list-none py-4 outline-none [&::-webkit-details-marker]:hidden">
              <p className="text-xs uppercase tracking-widest font-bold text-zinc-400">Other Projects</p>
              <ChevronDown size={16} className="text-zinc-400 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="pb-4">
              {[
                { title: 'PintOS', year: '2024', desc: '[Core OS 구현] 스탠퍼드 대학교 교육용 프레임워크 기반. 멀티스레딩, 가상 메모리 등 범용 운영체제 핵심 로직 설계 및 C언어 구현' },
                { title: 'AI SLAM Robot', year: '2023', desc: '[재난 방재 자율주행 모빌리티] 소방 인력 생존율 개선 목적. TurtleBot 기반 라이다 센서 및 부분 자율주행 알고리즘을 결합한 실시간 화재 내부 구조 SLAM 라우팅 파이프라인 구축' },
                { title: 'Ethics Writing Extension', year: '2023', desc: '[윤리적 텍스트 교정 크롬 확장 앱] 기술 윤리 문제 개선 목적. 비윤리적이거나 편향된 웹 텍스트 입력 감지 및 올바른 방향성에 대한 사용자 실시간 교정 가이드 도구 제공' },
                { title: 'Bioinformatics ProbeDNA Finder', year: '2022', desc: '[유전자 염기서열 추천 시스템] 아데노바이러스 진단 정확도 개선 목적. 대규모 유전체 데이터(DNA) 내 최적의 바이오센싱 프로브 시퀀스를 추출하는 데이터 마이닝 파이썬 스크립트 개발' },
                { title: 'Adenovirus Quantitative Sensor', year: '2019', desc: '[현장 진단용 전기화학 바이오센서] 기존 결막염 바이러스 진단 비용/시간 한계 극복. 타겟 단백질 반응 시 신속하고 정량적인 측정이 가능한 센서 프로토타입 연구 및 구현 (고교 졸업 논문)' },
                { title: 'Biomimetic Superomniphobic Surface', year: '2018', desc: '[구조적 자가세척(연잎 효과) 나노 표면연구] 산업 표면 오염 제약 해결 목적. 물체 표면 장력 메커니즘을 응용해 물과 기름을 튕겨내는 마이크로 구조 생체모방 입자 표면 설계 (고교 R&E)' },
              ].map((p) => (
                <div key={p.title} className="group/item flex flex-col gap-1 py-4 border-b border-zinc-100 hover:bg-zinc-50 -mx-2 px-2 rounded transition-colors cursor-pointer">
                  <div className="flex items-baseline gap-6 w-full">
                    <span className="text-xs text-zinc-400 tabular-nums w-10 shrink-0">{p.year}</span>
                    <span className="font-semibold text-sm flex-1">{p.title}</span>
                    <ExternalLink size={13} className="text-zinc-300 group-hover/item:text-zinc-500 transition-colors shrink-0" />
                  </div>
                  <div className="flex justify-end pl-16">
                    <span className="text-zinc-500 text-sm text-right break-keep leading-relaxed">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </details>

        </section>

        {/* 4. About Section */}
        <section id="about" className="space-y-12 border-t border-zinc-100 pt-10">
          <div className="flex items-end justify-between border-b border-zinc-100 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">About</h2>
          </div>

          {/* Philosophy & Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Philosophy</h3>
              <div className="text-zinc-600 text-sm leading-relaxed space-y-4">
                <div>
                  <h4 className="font-bold text-zinc-900 text-base tracking-wide">EXPERIENCE-DRIVEN INSIGHT</h4>
                  <p className="italic text-zinc-500 mt-1">"경험은 관찰을 낳고, 관찰은 통찰이 되어 비로소 세상에 필요한 기술이 됩니다."</p>
                </div>
                <p>
                  단순히 코드를 구현하는 것을 넘어, 현장에 대한 깊은 관찰로 문제의 본질을 꿰뚫는 것을 즐깁니다. 저는 대학 생활 동안 다양한 동아리 운영부터 KAIST에서의 전산학 연구까지 경계 없는 경험을 쌓으며, 수많은 데이터 포인트를 연결해 세상을 바라보는 고유한 통찰력을 길러왔습니다.
                </p>
                <p>
                  엔지니어링의 정교함과 기획자의 전략적 시각을 바탕으로 기술과 세상 사이의 다리를 놓습니다. 제가 가진 기술적 판단력으로 복잡한 비효율을 걷어내고 세상을 더 살기 좋은 곳으로 바꾸는 것, 그것은 제게 가장 큰 성취이자 즐거움입니다.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Leadership</h3>
              <div className="text-zinc-600 text-sm leading-relaxed space-y-4">
                <div>
                  <h4 className="font-bold text-zinc-900 text-base">OBSERVATION-LED STEWARDSHIP</h4>
                  <p className="italic">"팀을 향한 깊은 관찰은 최적의 조율을 낳고, 이는 곧 프로젝트를 끝까지 완수해내는 실천적 책임이 됩니다."</p>
                </div>
                <p>
                  저에게 리더십은 구성원 개개인의 역량과 팀의 병목을 세밀하게 관찰하여, 모두가 본연의 전문성에 몰입할 수 있는 환경을 설계하는 과정입니다. 다수의 단체를 운영하고 프로젝트를 이끌며 다양한 이해관계자 사이 간극을 메우는 조율자로 활동해왔으며, 이 과정에서 얻은 통찰을 바탕으로 팀의 에너지를 하나의 목표로 결집합니다. 어떤 변수 속에서도 프로젝트를 끝까지 완수해내는 강력한 오너십은, 제가 수많은 경험을 통해 체득한 리더로서의 가장 핵심적인 본질입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4 border-t border-zinc-100">

            {/* Education */}
            <div className="space-y-5">
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Education</h3>
              <div className="space-y-4">
                <EducationCard />
                <div className="space-y-1">
                  <p className="font-semibold text-sm leading-snug">Gyeonggi Science High School for the Gifted</p>
                  <p className="text-zinc-400 text-xs">2017 – 2020</p>
                </div>
              </div>
              <div className="pt-2">
                <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-3">Certification</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-900 text-white rounded">
                    정보처리기사 · 2025
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-900 text-white rounded">
                    OPIc AL · 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-5">
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Technical Skills</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs text-zinc-400 font-medium">Proficient</p>
                  <div className="flex flex-wrap gap-2">
                    {['C/C++', 'Python', 'SQL', 'Java', 'Swift', 'R', 'React', 'FastAPI', 'SolidJS', 'Docker'].map(s => (
                      <span key={s} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-800 text-white rounded">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-zinc-400 font-medium">Experienced</p>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Node.js', 'WebAssembly', 'Scala', 'Rust'].map(s => (
                      <span key={s} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-5">
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold">Korean</span>
                  <span className="text-xs text-zinc-400">Native</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold">English</span>
                  <span className="text-xs text-zinc-400">OPIc AL · 2025</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold"></span>
                  <span className="text-xs text-zinc-400">Exchange Program, Cardiff, UK · 2023</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold"></span>
                  <span className="text-xs text-zinc-400">Overseas Experience, NC, USA · 2010-2012</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 5. Footer */}
      <footer className="bg-zinc-50 py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">"어제보다 더 나은 솔루션을 위해 고민하는 동료를 찾으시나요?"</h2>
          <p className="text-zinc-500 whitespace-pre-line">
            새로운 기술적 도전이나 가치를 만드는 프로젝트 제안은 언제나 환영입니다. 가벼운 커피챗부터 깊이 있는 기술 토크까지, 소중한 만남을 기다립니다.
          </p>
          <a href="mailto:jaybin7@gmail.com" className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors">
            Get in Touch
          </a>
          <p className="text-zinc-400 text-xs pt-10">© 2026 Jeongbin Kim. Built with Next.js & Vercel.</p>
        </div>
      </footer>
    </div>
  );
}