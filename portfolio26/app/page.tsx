import React from 'react';
import { Github, Mail, ExternalLink, Code2, Rocket, ShieldCheck } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-100">

      {/* 1. Navigation: 아주 최소한의 정보만 담은 상단 바 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">JAKE.DEV</span>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="mailto:your-email@example.com" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-32">

        {/* 2. Hero Section: 본인의 정체성을 한 줄로 정의 */}
        <section className="space-y-6 py-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Technical PM <br />
            <span className="text-zinc-400">& Developer.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
            전산학적 기본기를 바탕으로 기술적 한계를 비즈니스 기회로 바꿉니다.
            단순히 기능을 만드는 것을 넘어, 실제 사용자에게 닿는 제품의 생애주기를 관리합니다.
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

        {/* 3. Project Section: 3대 핵심 프로젝트 강조 */}
        <section id="projects" className="space-y-12">
          <div className="flex items-end justify-between border-b border-zinc-100 pb-4">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <span className="text-zinc-400 text-sm">03 Selected Works</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* 프로젝트 카드 1: 보드버디 */}
            <div className="group space-y-4">
              <div className="aspect-video bg-zinc-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                  <Rocket size={60} strokeWidth={1} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Boardbuddy</h3>
                  <ExternalLink size={16} className="text-zinc-400" />
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  스노보드 동아리 운영 자동화를 위한 풀스택 웹 서비스.
                  기획부터 베타테스팅, 실제 운영까지 제품 전 과정을 리딩했습니다.
                </p>
                <div className="flex gap-2 pt-2">
                  {['Next.js', 'Vercel', 'PostgreSQL'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 프로젝트 카드 2: 카카오 임팩트 */}
            <div className="group space-y-4">
              <div className="aspect-video bg-zinc-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                  <Code2 size={60} strokeWidth={1} />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Kakao Impact Project</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  사회적 취약점 개선을 위한 솔루션 개발 및 코엑스 컨퍼런스 발표.
                  2년간의 점진적 개선을 통해 임팩트를 측정하고 검증했습니다.
                </p>
                <div className="flex gap-2 pt-2">
                  {['React', 'Social Impact', 'Data Analysis'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 프로젝트 카드 3: Rust 보안 프로젝트 (졸업작품) */}
            <div className="group space-y-4 md:col-span-2 mt-4">
              <div className="aspect-[21/9] bg-zinc-900 rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden">
                <ShieldCheck className="absolute top-10 right-10 text-zinc-800" size={120} />
                <div className="relative z-10 space-y-2">
                  <h3 className="text-xl font-bold text-white">Rust Security RDP Solution</h3>
                  <p className="text-zinc-400 text-sm max-w-xl">
                    C++ 기반 보안 솔루션을 Rust로 분석하고 웹(WASM)으로 이식한 졸업 프로젝트.
                    기술적 복잡성을 사용자 친화적인 웹 인터페이스로 재가공했습니다.
                  </p>
                  <div className="flex gap-2 pt-2">
                    {['Rust', 'WebAssembly', 'Security'].map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/10 rounded text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Skills & Philosophy */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-12 py-10 border-t border-zinc-100">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Philosophy</h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              "기술은 문제를 해결할 때 가장 아름답다"고 믿습니다.
              코드 한 줄이 비즈니스 지표에 미치는 영향을 고민하며 개발합니다.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Technical Stack</h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              React, Next.js, Rust, Tailwind CSS를 즐겨 사용하며
              Docker와 Vercel을 이용한 배포 및 운영 경험이 있습니다.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Leadership</h2>
            <p className="text-zinc-600 text-sm leading-relaxed">
              다양한 팀 프로젝트에서 기획 리드와 팀장을 맡아
              베타테스팅 성공과 컨퍼런스 발표를 이끌어냈습니다.
            </p>
          </div>
        </section>

      </main>

      {/* 5. Footer */}
      <footer className="bg-zinc-50 py-20 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">함께 가치를 만들 준비가 되셨나요?</h2>
          <p className="text-zinc-500">새로운 도전을 위한 커피챗은 언제나 환영입니다.</p>
          <a href="mailto:jaybin7@gmail.com" className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors">
            Get in Touch
          </a>
          <p className="text-zinc-400 text-xs pt-10">© 2026 Jeongbin Kim. Built with Next.js & Vercel.</p>
        </div>
      </footer>
    </div>
  );
}