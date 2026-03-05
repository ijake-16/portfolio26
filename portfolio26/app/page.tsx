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
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-snug break-keep">
            탄탄한 이공학적 근거로 기술적 한계를 비즈니스로 치환하고, 구현을 넘어 제품이 사용자에게 닿는 모든 순간을 책임집니다.
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
                  [졸업프로젝트] WASM 기반의 고성능 Zero-Client 원격 데스크톱 보안 솔루션.
                  서버 부하 문제를 해결하고 복잡한 Rust 시스템을 브라우저 네이티브 환경으로 최적화했습니다.
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
              <div className="aspect-video bg-zinc-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                  <Code2 size={48} strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-200/80 to-transparent" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-bold text-zinc-800">Tech for Impact</h3>
                    <ExternalLink size={15} className="text-zinc-500" />
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
              <div className="aspect-video bg-zinc-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-500">
                  <Rocket size={48} strokeWidth={1} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-200/80 to-transparent" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-bold text-zinc-800">Boardbuddy</h3>
                    <ExternalLink size={15} className="text-zinc-500" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 px-1">
                <p className="text-zinc-600 text-sm leading-relaxed">
                  [사이드프로젝트] 연합 스노보드 동아리 운영의 페인포인트를 해결하는 수익형 플랫폼.
                  기획부터 개발까지 전 과정을 주도하며 대규모 트래픽 환경의 동시성 및 데이터 정합성 문제를 해결했습니다.
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
              <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
                {`EXPERIENCE-DRIVEN INSIGHT
"경험은 관찰을 낳고, 관찰은 통찰이 되어 비로소 세상에 필요한 기술이 됩니다."

단순히 코드를 구현하는 것을 넘어, 현장에 대한 깊은 관찰로 문제의 본질을 꿰뚫는 것을 즐깁니다. 저는 대학 생활 동안 스노보드 동아리 운영부터 KAIST에서의 전산학 연구까지 경계 없는 경험을 쌓으며, 수많은 데이터 포인트를 연결해 세상을 바라보는 고유한 통찰력을 길러왔습니다.

엔지니어링의 정교함과 기획자의 전략적 시각을 바탕으로 기술과 세상 사이의 다리를 놓습니다. 제가 가진 기술적 판단력으로 복잡한 비효율을 걷어내고 세상을 더 살기 좋은 곳으로 바꾸는 것, 그것은 제게 가장 큰 성취이자 즐거움입니다.`}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Leadership</h3>
              <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
                {`OBSERVATION-LED STEWARDSHIP
"팀을 향한 깊은 관찰은 최적의 조율을 낳고, 이는 곧 프로젝트를 끝까지 완수해내는 실천적 책임이 됩니다."

저에게 리더십은 구성원 개개인의 역량과 팀의 병목을 세밀하게 관찰하여, 모두가 본연의 전문성에 몰입할 수 있는 환경을 설계하는 과정입니다. 다수의 단체를 운영하고 프로젝트를 이끌며 다양한 이해관계자 사이 간극을 메우는 조율자로 활동해왔으며, 이 과정에서 얻은 통찰을 바탕으로 팀의 에너지를 하나의 목표로 결집합니다. 어떤 변수 속에서도 프로젝트를 끝까지 완수해내는 강력한 오너십은, 제가 수많은 경험을 통해 체득한 리더로서의 가장 핵심적인 본질입니다.`}
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