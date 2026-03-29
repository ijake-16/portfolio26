'use client';

import React, { useState } from 'react';
import {
    ExternalLink, Lightbulb, Users, CheckCircle2,
    MessageSquare, Code2, Database, Layout, ArrowRight,
    Calendar, Briefcase, Layers
} from 'lucide-react';

export default function TechForImpactContent() {
    const [lang, setLang] = useState<'ko' | 'en'>('ko');

    const toggleLang = () => {
        setLang(prev => prev === 'ko' ? 'en' : 'ko');
    };

    return (
        <div className="space-y-20 pb-20">
            {/* Header Section */}
            <section className="space-y-8">
                <div className="aspect-[21/9] bg-[#FEF08A] rounded-[2rem] overflow-hidden relative flex items-center justify-center shadow-lg border border-yellow-300">
                    <svg className="absolute inset-0 w-full h-full object-cover opacity-80" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg">
                        {/* Abstract Yellow/Green Impact/Safety Background */}
                        <path d="M0 0 L250 0 L150 225 L0 225 Z" fill="#FDE047" />
                        <rect x="180" y="20" width="140" height="140" rx="32" fill="#EAB308" transform="rotate(15 250 90)" />
                        <circle cx="120" cy="130" r="80" fill="#16A34A" />
                        <circle cx="120" cy="130" r="32" fill="#FEF08A" />
                        <path d="M260 225 L340 60 L420 225 Z" fill="#22C55E" />
                        <rect x="40" y="40" width="40" height="80" fill="#CA8A04" />
                        <circle cx="340" cy="60" r="20" fill="#15803D" />
                    </svg>
                    <div className="absolute inset-0 bg-zinc-900/60 mix-blend-multiply backdrop-blur-[2px]"></div>
                    <div className="text-center space-y-4 px-6 relative z-10">
                        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter italic drop-shadow-lg">
                            TECH FOR IMPACT
                        </h2>
                        <p className="text-zinc-100 font-medium text-lg drop-shadow-md">
                            {lang === 'ko' ? '재난 안전 교육의 한계를 깨는 게이미피케이션 플랫폼' : 'Breaking Boundaries in Disaster Safety Education through Gamification'}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900">Tech for Impact</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={toggleLang} className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-sm font-bold hover:bg-zinc-800 transition-all">
                            {lang === 'ko' ? 'EN' : 'KO'}
                        </button>
                        <a href="https://gbs.bttf.kr/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition-colors" title="Open Live Demo">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Master Summary Section */}
            <section className="grid grid-cols-1 md:grid-cols-5 gap-6 p-8 bg-zinc-50 border border-zinc-100 rounded-[2rem] shadow-sm">
                <div className="space-y-2 md:col-span-1">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                        <Calendar size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Timeline</span>
                    </div>
                    <p className="font-semibold text-zinc-900 text-sm">2024.08 – 2026.01</p>
                </div>
                <div className="space-y-3 md:col-span-2">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                        <Users size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Team</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[11px] font-black text-zinc-800 mr-0.5 bg-zinc-200/50 px-2.5 py-1 rounded-md">Campus <span className="text-zinc-500 font-bold ml-0.5">6</span></span>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] font-bold rounded-md shadow-sm">
                                PM <span className="bg-indigo-100 text-indigo-800 px-1.5 rounded-sm">1</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-pink-50 border border-pink-100 text-pink-700 text-[10px] font-bold rounded-md shadow-sm">
                                Design <span className="bg-pink-100 text-pink-800 px-1.5 rounded-sm">1</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold rounded-md shadow-sm">
                                FE <span className="bg-blue-100 text-blue-800 px-1.5 rounded-sm">2</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold rounded-md shadow-sm">
                                BE <span className="bg-emerald-100 text-emerald-800 px-1.5 rounded-sm">2</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[11px] font-black text-zinc-500 mr-0.5 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200/60">Lab <span className="text-zinc-400 font-bold ml-0.5">12</span></span>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-50 border border-zinc-200/80 text-zinc-500 text-[10px] font-bold rounded-md shadow-sm">
                                Plan <span className="bg-zinc-200 text-zinc-600 px-1.5 rounded-sm">4</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-50 border border-zinc-200/80 text-zinc-500 text-[10px] font-bold rounded-md shadow-sm">
                                Design <span className="bg-zinc-200 text-zinc-600 px-1.5 rounded-sm">4</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-50 border border-zinc-200/80 text-zinc-500 text-[10px] font-bold rounded-md shadow-sm">
                                FE <span className="bg-zinc-200 text-zinc-600 px-1.5 rounded-sm">2</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-50 border border-zinc-200/80 text-zinc-500 text-[10px] font-bold rounded-md shadow-sm">
                                BE <span className="bg-zinc-200 text-zinc-600 px-1.5 rounded-sm">2</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                        <Briefcase size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Role & Contribution</span>
                    </div>
                    <p className="font-semibold text-zinc-900 text-sm leading-relaxed">
                        {lang === 'ko' ? 'Technical PM, 풀스택 리드, 시나리오 엔진 연동' : 'Technical PM, Full-Stack Lead, Scenario Engine integration'}
                    </p>
                </div>
                <div className="space-y-2 md:col-span-5 border-t border-zinc-200 pt-6">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                        <Lightbulb size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">TL;DR</span>
                    </div>
                    <p className="font-semibold text-zinc-900 text-sm sm:text-base">
                        {lang === 'ko' ? '재난 안전 교육의 한계를 깨는 온라인 재난가방 시뮬레이션 및 게이미피케이션 플랫폼' : 'An online survival kit simulation and gamification platform breaking the boundaries of disaster safety education'}
                    </p>
                </div>
                <div className="space-y-3 md:col-span-5 border-t border-zinc-200 pt-6">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                        <Layers size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">Tech Stack & Key Roles</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'SolidJS', 'Node.js', 'Technical PM', 'Scenario Design', 'Full-Stack'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-white text-zinc-700 text-[11px] font-black uppercase tracking-wider rounded-lg border border-zinc-200 shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overview: The Problem & Solution */}
            <section className="grid md:grid-cols-5 gap-12 items-start border-t border-zinc-100 pt-16">
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-black text-indigo-500">The Challenge</h2>
                    <h3 className="text-3xl font-bold text-zinc-900 leading-tight">
                        {lang === 'ko' ? '주입식 교육의 한계와 낮은 접근성' : 'Inefficient Education & Low Accessibility'}
                    </h3>
                </div>
                <div className="md:col-span-3 text-zinc-600 leading-relaxed text-lg space-y-4">
                    <p>
                        {lang === 'ko' ? (
                            <>기존의 오프라인 재난 교육 키트는 <strong>비싼 교구 비용, 무거운 무게, 그리고 단발성 교육</strong>이라는 명확한 한계가 있었습니다. 우리는 이를 디지털로 전환하여 누구나 어디서든 체험할 수 있는 <strong>&apos;온라인 재난가방 시뮬레이션&apos;</strong>을 구축했습니다.</>
                        ) : (
                            <>Traditional offline disaster education kits had clear limitations: <strong>expensive materials, heavy physical weight, and one-off usage</strong>. We digitized this experience, building an <strong>&apos;Online Survival Kit Simulation&apos;</strong> accessible to everyone, anywhere.</>
                        )}
                    </p>
                </div>
            </section>

            {/* Phase 1: Deep Dive */}
            <section className="space-y-10 border-t border-zinc-100 pt-16">
                <div className="flex items-start gap-4">
                    <span className="text-5xl font-black text-zinc-100 italic">01</span>
                    <div className="flex-1 space-y-3">
                        <h2 className="text-sm uppercase tracking-widest font-bold text-indigo-500">Phase 1: Tech for Impact Campus (2025년) (MVP)</h2>
                        <h3 className="text-2xl font-bold text-zinc-900">
                            {lang === 'ko' ? 'Zero to One: 가설 검증과 빠른 구현' : 'Zero to One: Hypothesis Testing & Rapid Prototyping'}
                        </h3>
                        <a
                            href="https://techforimpact.io/campus/project?page=0&selectedId=19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-600 text-xs font-bold tracking-wide transition-all group w-fit"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                            {lang === 'ko' ? '캠퍼스 단계 프로젝트 보기' : 'View Campus Stage Project'}
                            <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 space-y-6">
                            <div className="space-y-4">
                                <h4 className="font-bold text-zinc-900 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-500" /> {lang === 'ko' ? '핵심 기여 및 실행' : 'Key Contributions'}
                                </h4>
                                <ul className="space-y-4 text-zinc-600 text-[15px] leading-relaxed">
                                    {lang === 'ko' ? (
                                        <>
                                            <li>• <strong>Scoring Engine 설계:</strong> 50여 종의 아이템이 재난 시나리오(지진, 화재 등)별로 가변적인 점수를 갖도록 하는 알고리즘을 설계하고 JSON 기반 데이터 구조를 구축했습니다.</li>
                                            <li>• <strong>풀스택 개발 리딩:</strong> 개발 경험이 없는 팀원들 사이에서 프로젝트의 뼈대가 되는 초기 보일러플레이트 세팅과 핵심 비즈니스 로직(가방 담기, 결과 분석)을 직접 구현했습니다.</li>
                                            <li>• <strong>현장 중심 MVP:</strong> 기술적 화려함보다 코엑스 컨퍼런스 시연이라는 목표에 맞춰 3개월 내에 안정적으로 작동하는 퀴즈/시뮬레이션 루프를 완성했습니다.</li>
                                        </>
                                    ) : (
                                        <>
                                            <li>• <strong>Scoring Engine Design:</strong> Engineered an algorithm and JSON data structure where 50+ items evaluate to dynamic scores based on varying disaster scenarios (earthquake, fire, etc).</li>
                                            <li>• <strong>Led Full-Stack Dev:</strong> Set up the initial boilerplate and implemented core business logic (inventory management, result analysis) to guide teammates with less development experience.</li>
                                            <li>• <strong>Field-Ready MVP:</strong> Delivered a stable quiz/simulation loop within a 3-month deadline, prioritizing a successful demo at the COEX conference over technical perfection.</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                            <div className="flex items-center gap-2 text-amber-700 font-bold mb-4">
                                <Code2 className="w-5 h-5" /> ADR: Why SolidJS?
                            </div>
                            <p className="text-sm text-amber-800/80 leading-relaxed italic">
                                {lang === 'ko' ?
                                    `"저사양 태블릿이 많은 교육 현장의 특성을 고려했습니다. Virtual DOM 오버헤드가 없는 SolidJS를 선택해 런타임 성능을 극대화했고, 팀원들이 익숙한 React와 유사한 문법을 제공하여 학습 곡선과 성능이라는 두 마리 토끼를 잡았습니다."`
                                    :
                                    `"Designed for low-end tablets common in educational environments. By selecting SolidJS, which avoids Virtual DOM overhead, we maximized runtime performance while keeping a React-like syntax that flattened the learning curve for the team."`
                                }
                            </p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-100 rounded-3xl shadow-sm">
                            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Impact</p>
                            <p className="text-zinc-900 font-bold text-lg">
                                {lang === 'ko' ? "참여 팀 중 유일하게 'Lab' 단계 승격 및 투자 유치" : "Only team promoted to the 'Lab' stage, securing further investment."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Phase 2: Deep Dive */}
            <section className="space-y-10 border-t border-zinc-100 pt-16">
                <div className="flex items-start gap-4">
                    <span className="text-5xl font-black text-zinc-100 italic">02</span>
                    <div className="flex-1 space-y-3">
                        <h2 className="text-sm uppercase tracking-widest font-bold text-purple-500">Phase 2: Tech For Impact Lab (2기) (Scale-up)</h2>
                        <h3 className="text-2xl font-bold text-zinc-900">
                            {lang === 'ko' ? 'Professionalism: 시스템 고도화 및 리팩토링' : 'Professionalism: System Scale-Up & Refactoring'}
                        </h3>
                        <a
                            href="https://techforimpact.io/lab/project/16"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-600 text-xs font-bold tracking-wide transition-all group w-fit"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                            {lang === 'ko' ? '랩 단계 프로젝트 보기' : 'View Lab Stage Project'}
                            <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-12">
                        <div className="bg-zinc-900 text-white rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
                            <div className="relative z-10 grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="text-purple-400 font-bold flex items-center gap-2 uppercase tracking-widest text-sm">
                                        <Database className="w-5 h-5" /> Architecture & Refactoring
                                    </h4>
                                    <p className="text-zinc-300 text-lg leading-relaxed">
                                        {lang === 'ko' ? (
                                            <>서비스 규모 확장에 따라 <strong>SolidJS/FastAPI 조합을 React/Node.js(Express) 기반의 엔터프라이즈 스택으로 전면 리팩토링</strong>했습니다. 특히, 상업용 게임 수준의 스토리텔링을 위해 확장 가능한 컴포넌트 구조를 설계했습니다.</>
                                        ) : (
                                            <>To accommodate service scaling, <strong>I completely refactored the SolidJS/FastAPI stack to an enterprise React/Node.js (Express) footprint</strong>. Notably, I designed a scalable component architecture to support commercial game-level storytelling.</>
                                        )}
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-2 bg-purple-500/20 rounded-lg text-purple-400"><Layout size={18} /></div>
                                            <div>
                                                <p className="font-bold">Scenario Engine (JSON-based)</p>
                                                <p className="text-sm text-zinc-400">
                                                    {lang === 'ko' ? '비기술직군 기획자의 시나리오를 코드로 자동 번역하는 데이터 스키마 설계' : 'Designed data schemas that automatically translate non-technical planners\' scenarios into code'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-indigo-400 font-bold flex items-center gap-2 uppercase tracking-widest text-sm">
                                        <MessageSquare className="w-5 h-5" /> Technical PM Role
                                    </h4>
                                    <p className="text-zinc-300 leading-relaxed">
                                        {lang === 'ko' ? (
                                            <>시니어 기획자들 간의 의견 대립과 인력 이탈이라는 조직적 위기 속에서 <strong>&apos;끈기&apos;와 &apos;구체화&apos;</strong>를 무기로 프로젝트를 완수했습니다. 추상적인 아이디어를 화면 명세서(Wireframe)와 API 명세로 변환하여 팀의 목표를 하나로 정렬시켰습니다.</>
                                        ) : (
                                            <>Amidst organizational crises—conflicts between senior planners and team turnover—I completed the project armed with <strong>&apos;persistence&apos; and &apos;crystallization&apos;</strong>. I turned abstract ideas into wireframes and API specifications to align the team's singular goal.</>
                                        )}
                                    </p>
                                    <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700/50">
                                        <p className="text-zinc-400 text-sm italic">
                                            {lang === 'ko' ? (
                                                `"팀 구성의 변화에도 흔들리지 않고 끝까지 남아, 기획의 파편화를 막고 2025 모두콘 발표라는 최종 마일스톤을 달성했습니다."`
                                            ) : (
                                                `"Remained resilient despite team upheavals, preventing project fragmentation and achieving the final milestone of presenting at MODUCON 2025."`
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] -mr-32 -mt-32"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results & Future */}
            <section className="border-t border-zinc-100 pt-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-4">The Impact</h2>
                        <h3 className="text-4xl font-black text-zinc-900 tracking-tight">Success & Milestones</h3>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-8 bg-zinc-900 rounded-3xl space-y-3 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/30 transition-colors"></div>
                            <h4 className="text-3xl font-black mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">2025 KSVF</h4>
                            <p className="font-bold text-white text-lg">
                                {lang === 'ko' ? '대한민국 사회적가치 페스타' : 'Korea Social Value Festa'}
                            </p>
                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                {lang === 'ko' ? '코엑스(COEX)에서 열린 국내 최대 사회적 가치 행사에 직접 연사자로 서서, 이 프로젝트의 사회적 임팩트와 기술력을 라이브로 시연 및 발표했습니다.' : 'Took the stage as a speaker at Korea’s largest social value event at COEX, giving a live demonstration of the project’s technological capabilities and social impact.'}
                            </p>
                        </div>
                        <div className="p-8 bg-zinc-50 rounded-3xl space-y-3 border border-zinc-100">
                            <h4 className="text-3xl font-black text-zinc-800 mb-1">2025</h4>
                            <p className="font-bold text-zinc-900 text-lg">
                                {lang === 'ko' ? '모두콘 (MODUCON)' : 'MODUCON'}
                            </p>
                            <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                {lang === 'ko' ? '공공/연구소/비영리 단체 등 IT/AI 현업 종사자들이 모인 모두의연구소 주최 컨퍼런스에서 연사 발표를 훌륭하게 완수했습니다.' : 'Successfully presented as a speaker at MODUCON, a conference gathering IT/AI professionals from public, research, and non-profit sectors.'}
                            </p>
                        </div>
                        <div className="p-8 bg-zinc-50 rounded-3xl space-y-3 border border-zinc-100 sm:col-span-2">
                            <h4 className="text-3xl font-black text-purple-600 mb-1">Real-World</h4>
                            <p className="font-bold text-zinc-900 text-lg">
                                {lang === 'ko' ? '상용화 논의 단계' : 'Commercialization Discussions'}
                            </p>
                            <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                {lang === 'ko' ? '프로젝트의 완성도를 인정받아, 현재 카카오임팩트 측 랩장 및 핵심 인력과 함께 실제 공공 교육 기관(초/중학교 등) 도입을 위한 비즈니스 모델(BM)과 상용화 방안을 논의 중입니다.' : 'Recognized for technical maturity, we are currently in discussions with Kakao Impact leadership to build a viable business model for deploying the platform into public educational institutions like elementary and middle schools.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action or Footer */}
            <footer className="pt-20 text-center">
                <a
                    href="https://gbs.bttf.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-zinc-900 text-white font-semibold hover:bg-zinc-700 shadow-lg hover:shadow-xl transition-all group"
                >
                    <span>
                        {lang === 'ko' ? '라이브 서비스 바로가기' : 'Visit Live Service'}
                    </span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </footer>
        </div>
    );
}