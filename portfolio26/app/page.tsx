import React from 'react';
import Link from 'next/link';
import { Github, Mail, ExternalLink, Code2, Rocket, ShieldCheck } from 'lucide-react';
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
          <span className="font-bold tracking-tighter text-xl">JAKE.DEV</span>
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
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed">
            심도있는 이공학적 기본기를 바탕으로 기술적 한계를 비즈니스 기회로 바꿉니다.
            단순히 기능을 만드는 것을 넘어, 실제 사용자에게 닿는 제품의 일생을 관리합니다.
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

            {/* Card 1: 보드버디 */}
            <Link href="/projects/boardbuddy" className="group space-y-4 block">
              <div className="aspect-video bg-zinc-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                  <Rocket size={48} strokeWidth={1} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Boardbuddy</h3>
                  <ExternalLink size={15} className="text-zinc-400" />
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  스노보드 동아리 운영 자동화를 위한 풀스택 웹 서비스.
                  기획부터 베타테스팅, 실제 운영까지 제품 전 과정을 리딩했습니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Next.js', 'Vercel', 'PostgreSQL'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Card 2: 카카오 임팩트 */}
            <Link href="/projects/bttf" className="group space-y-4 block">
              <div className="aspect-video bg-zinc-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                  <Code2 size={48} strokeWidth={1} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Kakao Impact Project</h3>
                  <ExternalLink size={15} className="text-zinc-400" />
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  사회적 취약점 개선을 위한 솔루션 개발 및 코엑스 컨퍼런스 발표.
                  2년간의 점진적 개선을 통해 임팩트를 측정하고 검증했습니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['React', 'Social Impact', 'Data Analysis'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

            {/* Card 3: Rust 보안 프로젝트 */}
            <Link href="/projects/rdp" className="group space-y-4 block">
              <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden relative">
                <ShieldCheck className="absolute top-6 right-6 text-zinc-800" size={80} />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-lg font-bold text-white">Rust Security RDP</h3>
                      <ExternalLink size={15} className="text-zinc-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-600 text-sm leading-relaxed">
                  C++ 기반 보안 솔루션을 Rust로 분석하고 웹(WASM)으로 이식한 졸업 프로젝트.
                  기술적 복잡성을 사용자 친화적인 웹 인터페이스로 재가공했습니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Rust', 'WebAssembly', 'Security'].map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>

          </div>

          {/* Other Projects: list view */}
          <div className="space-y-0 border-t border-zinc-100">
            <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 py-4">Other Projects</p>
            {[
              { title: 'Project Title A', year: '2025', desc: '한 줄 설명을 여기에 작성하세요.' },
              { title: 'Project Title B', year: '2024', desc: '한 줄 설명을 여기에 작성하세요.' },
              { title: 'Project Title C', year: '2024', desc: '한 줄 설명을 여기에 작성하세요.' },
              { title: 'Project Title D', year: '2023', desc: '한 줄 설명을 여기에 작성하세요.' },
            ].map((p) => (
              <div key={p.title} className="group flex items-baseline gap-6 py-4 border-b border-zinc-100 hover:bg-zinc-50 -mx-2 px-2 rounded transition-colors cursor-pointer">
                <span className="text-xs text-zinc-400 tabular-nums w-10 shrink-0">{p.year}</span>
                <span className="font-semibold text-sm flex-1">{p.title}</span>
                <span className="text-zinc-500 text-sm hidden md:block">{p.desc}</span>
                <ExternalLink size={13} className="text-zinc-300 group-hover:text-zinc-500 transition-colors shrink-0" />
              </div>
            ))}
          </div>

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
              <p className="text-zinc-600 text-sm leading-relaxed">
                "기술은 문제를 해결할 때 가장 아름답다"고 믿습니다.
                코드 한 줄이 비즈니스 지표에 미치는 영향을 고민하며 개발합니다.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Leadership</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                다양한 팀 프로젝트에서 기획 리드와 팀장을 맡아
                베타테스팅 성공과 컨퍼런스 발표를 이끌어냈습니다.
              </p>
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
                <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-900 text-white rounded">
                  정보처리기사 · 2025
                </span>
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