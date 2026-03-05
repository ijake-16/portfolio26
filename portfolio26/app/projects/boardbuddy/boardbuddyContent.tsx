'use client';

import React, { useState } from 'react';
import {
    ExternalLink, Calendar, Users, BarChart3, ShieldCheck,
    Settings, Download, Smartphone, Zap, Database, TrendingUp,
    Snowflake, Award, MessageSquare, Briefcase
} from 'lucide-react';

export default function BoardbuddyContent() {
    const [lang, setLang] = useState<'ko' | 'en'>('ko');

    return (
        <div className="space-y-24 pb-32">
            {/* 1. Hero Section: Branding & Identity */}
            <section className="space-y-8">
                <div className="aspect-[21/9] bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 rounded-[2.5rem] overflow-hidden relative flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="text-center space-y-4 px-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold mb-2">
                            <Snowflake size={16} className="animate-pulse" />
                            {lang === 'ko' ? '베타 테스팅 완료 & 3,000+ 유저 확보' : 'Beta Completed & 3,000+ Users Secured'}
                        </div>
                        <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter uppercase">
                            Boardbuddy
                        </h2>
                        <p className="text-white/90 font-medium text-lg sm:text-xl max-w-2xl mx-auto">
                            {lang === 'ko'
                                ? '연합 스노보드 동아리 운영의 페인포인트를 해결하는 올인원 시즌방 관리 플랫폼'
                                : 'All-in-One Season-room Management for University Snowboard Unions'}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900">보드버디</h1>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black rounded-full uppercase">Beta Version 1.0</span>
                        </div>
                        <p className="text-zinc-500 text-lg font-medium flex items-center gap-2">
                            <Calendar size={18} /> 2025.11 – Present (Next Season Launching)
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-sm font-bold hover:bg-zinc-800 transition-all">
                            {lang === 'ko' ? 'EN' : 'KO'}
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                    {['React', 'Spring Boot', 'Redis', 'PostgreSQL', 'Product Ownership', 'UI/UX Design', 'BM Strategy'].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-zinc-50 text-zinc-600 text-xs font-bold rounded-xl border border-zinc-200 shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* 2. Problem & Background: Founder's Perspective */}
            <section className="grid lg:grid-cols-2 gap-16 items-start border-t border-zinc-100 pt-16">
                <div className="space-y-6">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-black text-blue-600 flex items-center gap-2">
                        <Award size={18} /> The Founder's Pain Point
                    </h2>
                    <h3 className="text-4xl font-bold text-zinc-900 leading-tight">
                        "회장 출신 개발자가 직접 경험한<br />관리의 비효율을 해결하다"
                    </h3>
                    <div className="space-y-4 text-zinc-600 text-[17px] leading-relaxed">
                        <p>
                            대학 연합 스노보드 동아리 회장으로 활동하며 수백 명의 부원과 수천만 원 규모의 시즌방(임대 숙소) 예산을 관리했습니다.
                            하지만 현장은 <strong>카카오톡 투표와 구글 캘린더 수동 대조</strong>라는 원시적인 방식에 머물러 있었습니다.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                                <p className="text-red-700 font-bold text-sm mb-1">Admin Overhead</p>
                                <p className="text-xs text-red-600/80 italic">매주 10시간 이상 소요되는 인원 확정 및 정산 업무</p>
                            </div>
                            <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                                <p className="text-red-700 font-bold text-sm mb-1">Data Inconsistency</p>
                                <p className="text-xs text-red-600/80 italic">실시간 현황 파악 불가로 인한 노쇼 및 초과 예약 발생</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-50 rounded-[2rem] p-8 md:p-12 space-y-8 border border-zinc-100">
                    <h4 className="font-bold text-zinc-900 text-xl flex items-center gap-2">
                        <Settings className="w-6 h-6 text-blue-500" /> 핵심 솔루션: 자율형 웹앱
                    </h4>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-blue-500"><Zap size={20} /></div>
                            <div>
                                <p className="font-bold text-zinc-800">초기 셋팅 자동화</p>
                                <p className="text-sm text-zinc-500">운영진이 방 설정과 인원 제한만 입력하면, 이후 모든 예약은 부원들이 스스로 기록</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-blue-500"><Download size={20} /></div>
                            <div>
                                <p className="font-bold text-zinc-800">데이터 추출 시스템</p>
                                <p className="text-sm text-zinc-500">기록을 이미지나 엑셀로 즉시 추출하여 보고 및 정산 편의성 극대화</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-blue-500"><Users size={20} /></div>
                            <div>
                                <p className="font-bold text-zinc-800">강습 매칭 엔진</p>
                                <p className="text-sm text-zinc-500">부원 간 강습 신청 및 수락 기능을 연동하여 교육 인프라 통합</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 3. Feature Deep Dive: Iteration by Feedback */}
            <section className="space-y-12 border-t border-zinc-100 pt-16">
                <div className="text-center space-y-4">
                    <h2 className="text-sm uppercase tracking-widest font-black text-blue-500">Product Iteration</h2>
                    <h3 className="text-4xl font-bold text-zinc-900">사용자 피드백으로 완성된 디테일</h3>
                    <p className="text-zinc-500 max-w-2xl mx-auto">베타 테스팅 기간 동안 수집된 실제 동아리원들의 의견을 수용하여 기능을 고도화했습니다.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Customizable Reservation",
                            desc: "스키장마다 다른 시즌방 입/퇴실 시간 및 주말/평등 구분 로직을 동아리 성격에 맞게 커스터마이징할 수 있는 설정 기능을 추가했습니다.",
                            icon: <Settings className="text-blue-500" />
                        },
                        {
                            title: "Export & Report",
                            desc: "단순 조회를 넘어, 단톡방 공유를 위한 이미지 캡처 도구와 행정 처리를 위한 엑셀 추출 기능을 구현해 현장 만족도를 높였습니다.",
                            icon: <Download className="text-blue-500" />
                        },
                        {
                            title: "Lesson Management",
                            desc: "동아리 내 선배-후배 간의 강습을 체계적으로 관리하고 싶은 니즈를 파악하여 강습 모집 및 예약 기능을 추가했습니다.",
                            icon: <Users className="text-blue-500" />
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="group p-8 bg-white border border-zinc-100 rounded-3xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-zinc-900">{item.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Technical Challenge & Architecture */}
            <section className="border-t border-zinc-100 pt-16 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 self-start w-full max-w-[800px] mx-auto relative px-8">
                    <span className="absolute -left-12 sm:-left-32 top-1/2 -translate-y-1/2 text-[80px] sm:text-[100px] font-black text-zinc-100 italic tracking-tighter select-none opacity-80 z-0">TECH</span>
                    <div className="space-y-1 bg-white/50 backdrop-blur-sm z-10 p-2">
                        <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-blue-600">Engineering Challenges</h2>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                            {lang === 'ko' ? '대규모 유입과 데이터 정합성을 위한 고민' : 'Tackling Scale and Data Integrity'}
                        </h3>
                    </div>
                </div>

                <div className="w-full max-w-[700px] sm:max-w-[900px] lg:max-w-[1024px] mx-auto bg-[#1a1a1c] rounded-[2rem] sm:rounded-[2.5rem] p-6 pt-10 pb-6 sm:p-10 lg:px-16 lg:py-16 text-zinc-300 shadow-2xl relative">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
                        {/* Left Column: Text content */}
                        <div className="flex-1 space-y-12 lg:pr-4 pt-4">
                            {/* Synergy */}
                            <div className="space-y-4">
                                <h4 className="flex items-center gap-3 text-blue-500 font-bold uppercase tracking-[0.15em] text-xs sm:text-sm">
                                    <Database size={18} className="shrink-0" /> Full-Stack Synergy
                                </h4>
                                <p className="text-[15px] sm:text-[16px] leading-[1.8] text-zinc-300/80 break-keep">
                                    {lang === 'ko' ? (
                                        <>
                                            사용자가 집중되는 시즌 피크 타임의 <strong className="text-white font-semibold">동시성 이슈(Race Condition)</strong>를 해결하기 위해
                                            <strong className="text-white font-semibold"> Redis</strong>를 활용한 분산 락(Distributed Lock) 전략을 백엔드 팀과 설계했습니다.
                                            프론트엔드에서는 쾌적한 UX를 위해 낙관적 업데이트(Optimistic UI)를 적용했습니다.
                                        </>
                                    ) : (
                                        <>
                                            To resolve <strong className="text-white font-medium">Race Conditions</strong> during peak season traffic, I designed a <strong className="text-white font-medium">Redis</strong>-based Distributed Lock strategy with the backend team. On the frontend, implemented Optimistic UI updates to ensure a seamless and responsive user experience.
                                        </>
                                    )}
                                </p>
                            </div>

                            {/* Performance */}
                            <div className="space-y-4">
                                <h4 className="flex items-center gap-3 text-blue-500 font-bold uppercase tracking-[0.15em] text-xs sm:text-sm">
                                    <Smartphone size={18} className="shrink-0" /> Responsive Performance
                                </h4>
                                <p className="text-[15px] sm:text-[16px] leading-[1.8] text-zinc-300/80 break-keep">
                                    {lang === 'ko' ? (
                                        <>
                                            영하의 추운 스키장에서 모바일로 접속하는 유저들을 위해 <strong className="text-white font-semibold">경량화된 React 컴포넌트 구조</strong>를 채택했습니다.
                                            복잡한 캘린더 라이브러리를 직접 커스터마이징하여 불필요한 리렌더링을 80% 이상 감소시켰습니다.
                                        </>
                                    ) : (
                                        <>
                                            Adopted a <strong className="text-white font-medium">lightweight React component architecture</strong> tailored for users accessing the app via mobile in freezing ski resort conditions. By heavily customizing complex calendar libraries, we reduced unnecessary re-renders by over 80%.
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Code Editor style card */}
                        <div className="w-full lg:w-[320px] shrink-0 lg:-mr-10">
                            <div className="w-full bg-[#212124] rounded-2xl p-8 border border-[#2d2d30] shadow-2xl relative h-full flex flex-col justify-center">
                                <h5 className="text-white font-bold text-[18px] flex items-center gap-3 mb-10 leading-snug">
                                    <TrendingUp className="text-[#3b82f6] shrink-0" size={20} />
                                    <span className="flex flex-col"><span>Tech Stack</span><span>Detail</span></span>
                                </h5>

                                <div className="space-y-0 font-mono text-[13px]">
                                    <div className="flex items-start justify-between gap-4 py-4 border-b border-[#2d2d30]">
                                        <span className="text-[#737373] mt-1 shrink-0">Frontend</span>
                                        <span className="text-blue-300 leading-[1.8] text-left w-[110px]">React,<br />Tailwind<br />CSS</span>
                                    </div>
                                    <div className="flex items-start justify-between gap-4 py-4 border-b border-[#2d2d30]">
                                        <span className="text-[#737373] mt-1 shrink-0">Backend</span>
                                        <span className="text-blue-300 leading-[1.8] text-left w-[110px]">Spring<br />Boot,<br />JPA</span>
                                    </div>
                                    <div className="flex items-start justify-between gap-4 py-4 border-b border-[#2d2d30]">
                                        <span className="text-[#737373] mt-1 shrink-0">Cache/DB</span>
                                        <span className="text-emerald-300 leading-[1.8] text-left w-[110px]">Redis,<br />PostgreSQL</span>
                                    </div>
                                    <div className="flex items-start justify-between gap-4 py-4">
                                        <span className="text-[#737373] mt-1 shrink-0">Collaboration</span>
                                        <span className="text-pink-300 leading-[1.8] text-left w-[110px]">Git,<br />Notion,<br />Figma</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Business & Future: The Roadmap */}
            <section className="border-t border-zinc-100 pt-16">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Business Model & Growth</h2>
                        <h3 className="text-4xl font-black text-zinc-900 tracking-tight">From Hobby<br />To Startup</h3>
                        <p className="text-zinc-500 leading-relaxed">
                            베타 테스팅 성공 후, 연합 동아리 전체 보급이 확정되었습니다. 이제 단순한 툴을 넘어 <strong>수익성을 갖춘 플랫폼</strong>으로 진화합니다.
                        </p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden group">
                            <BarChart3 className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform" />
                            <div className="space-y-2">
                                <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Target Users</p>
                                <h4 className="text-5xl font-black">3,000+</h4>
                            </div>
                            <p className="text-blue-50/80 text-sm leading-relaxed">
                                2025/26 시즌 전국 연합 동아리 네트워크를 통한 공격적인 유저 유치 확정.
                            </p>
                        </div>
                        <div className="p-10 bg-zinc-900 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden group">
                            <Briefcase className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform" />
                            <div className="space-y-2">
                                <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Monetization</p>
                                <h4 className="text-4xl font-black">Ads & Fees</h4>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                스키장/렌탈샵 타겟 광고 인벤토리 확보 및 강습 매칭 수수료 모델 검토 중.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Closing Ment: Learnings */}
            <section className="bg-zinc-50 rounded-[3rem] p-12 md:p-20 text-center space-y-8 border border-zinc-100">
                <h3 className="text-3xl font-bold text-zinc-900">What I Learned from Boardbuddy</h3>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-3">
                        <h4 className="font-bold text-zinc-900 flex items-center gap-2 italic underline underline-offset-4 decoration-blue-500">
                            # 사용자 중심의 서비스 운영
                        </h4>
                        <p className="text-zinc-600 leading-relaxed text-sm">
                            개발자가 만들고 싶은 기능보다 **사용자가 현장에서 절실히 필요로 하는 기능(엑셀 추출, 모바일 가독성 등)**이 제품의 성패를 결정한다는 것을 뼈저리게 배웠습니다.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-bold text-zinc-900 flex items-center gap-2 italic underline underline-offset-4 decoration-indigo-500">
                            # 기술적 도전과 협업의 즐거움
                        </h4>
                        <p className="text-zinc-600 leading-relaxed text-sm">
                            단순 프론트엔드 개발을 넘어, 백엔드/DevOps 팀원과 데이터 정합성 및 인프라 효율성을 논의하며 **전체 시스템의 관점에서 코드를 작성하는 역량**을 길렀습니다.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}