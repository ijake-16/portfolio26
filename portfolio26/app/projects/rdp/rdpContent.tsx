'use client';

import React, { useState } from 'react';
import {
    ExternalLink, Code2, Cpu, Globe, ShieldCheck,
    Layers, Terminal, Zap, Database, Maximize,
    FileText, GitPullRequest, Laptop, ServerOff
} from 'lucide-react';

export default function WebVDIContent() {
    const [lang, setLang] = useState<'ko' | 'en'>('ko');

    return (
        <div className="space-y-24 pb-32">
            {/* 1. Hero Section: High-Tech Identity */}
            <section className="space-y-8">
                <div className="aspect-[21/9] bg-gradient-to-br from-zinc-900 via-slate-800 to-zinc-900 rounded-[2.5rem] overflow-hidden relative flex items-center justify-center shadow-2xl border border-white/10">
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="text-center space-y-4 px-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-400 text-sm font-bold mb-2 border border-blue-500/30">
                            <Cpu size={16} className="animate-spin-slow" />
                            {lang === 'ko' ? 'KAIST 전산학부 프로젝트' : 'KAIST School of Computing Project'}
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                            IronRDP WebVDI
                        </h2>
                        <p className="text-zinc-400 font-medium text-lg sm:text-xl max-w-3xl mx-auto">
                            {lang === 'ko'
                                ? 'WASM 기반의 고성능 Zero-Client 원격 데스크톱 솔루션'
                                : 'High-Performance WebAssembly-based Zero-Client RDP Interface'}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-3">
                        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 italic">Modernizing VDI</h1>
                        <p className="text-zinc-500 text-lg font-medium flex items-center gap-2">
                            2025 Fall Semester
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-sm font-bold hover:bg-zinc-800 transition-all">
                            {lang === 'ko' ? 'EN' : 'KO'}
                        </button>
                        <a href="https://github.com/ijake-16/IronRDP/tree/jake_master" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors text-sm font-bold">
                            <ExternalLink size={16} />
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                    {['React 19', 'Vite 7', 'Rust', 'WASM', 'WebSockets', 'Zero-Trust'].map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-zinc-100 text-zinc-600 text-[11px] font-black uppercase tracking-wider rounded-lg border border-zinc-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* 2. Problem Statement: Legacy vs. Modern */}
            <section className="grid lg:grid-cols-5 gap-16 items-start border-t border-zinc-100 pt-16">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-black text-blue-600 flex items-center gap-2">
                        <ShieldCheck size={18} /> The Mission
                    </h2>
                    <h3 className="text-4xl font-bold text-zinc-900 leading-tight">
                        "기존 VDI의 한계를 넘는<br />브라우저 네이티브 원격 환경"
                    </h3>
                    <div className="space-y-4 text-zinc-600 text-[16px] leading-relaxed">
                        <p>
                            {lang === 'ko' ? (
                                <>
                                    기존 Apache Guacamole와 같은 서버 사이드 솔루션은 <strong>CPU 부하의 선형적 증가와 렌더링 지연(Latency)</strong>이라는 구조적 문제를 안고 있었습니다.
                                    저는 100% 클라이언트 사이드 프로세싱을 실현하여 <strong>서버 부하를 제로화</strong>하는 차세대 RDP 인터페이스를 구축했습니다.
                                </>
                            ) : (
                                <>
                                    Legacy server-side solutions like Apache Guacamole suffer from <strong>linear CPU load scaling and structural latency issues</strong>.
                                    I built a next-generation RDP interface that achieves 100% client-side processing, effectively <strong>reducing server load to zero</strong>.
                                </>
                            )}
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-3">
                    <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-zinc-50 text-zinc-500 font-bold border-b border-zinc-200">
                                <tr>
                                    <th className="px-6 py-4">Features</th>
                                    <th className="px-6 py-4 text-red-500">Legacy (Server-Side)</th>
                                    <th className="px-6 py-4 text-blue-600">This Project (WASM)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                                <tr>
                                    <td className="px-6 py-4 font-semibold">Server Load</td>
                                    <td className="px-6 py-4">High (Linear Scaling) </td>
                                    <td className="px-6 py-4 font-bold">Zero (Client-Side) </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-semibold">Latency</td>
                                    <td className="px-6 py-4 text-zinc-400">Add Decode/Encode lag </td>
                                    <td className="px-6 py-4 font-bold">Native-like Speed </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-semibold">Privacy</td>
                                    <td className="px-6 py-4 text-zinc-400">Server-side decryption </td>
                                    <td className="px-6 py-4 font-bold">End-to-End Secure </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 3. Implementation Deep Dive: Engineering Excellence */}
            <section className="space-y-12 border-t border-zinc-100 pt-16">
                <div className="flex items-center gap-4">
                    <span className="text-5xl font-black text-zinc-100 italic">SYSTEM</span>
                    <div>
                        <h2 className="text-sm uppercase tracking-widest font-bold text-indigo-500 underline decoration-4 underline-offset-8">Core Implementation</h2>
                        <h3 className="text-2xl font-bold text-zinc-900 mt-2">
                            {lang === 'ko' ? 'WASM 엔진의 React 최적화' : 'React Optimization of WASM Engine'}
                        </h3>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-zinc-50 rounded-[2rem] p-8 md:p-12 border border-zinc-100 space-y-10">
                            {/* Feature 1 */}
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-blue-600"><Maximize size={24} /></div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-zinc-900 italic">Dynamic Resolution Scaling</h4>
                                    <p className="text-zinc-600 leading-relaxed text-[15px]">
                                        {lang === 'ko' ? (
                                            <>
                                                React의 <strong>ResizeObserver</strong>를 활용해 브라우저 뷰포트 변화를 감지합니다.
                                                감지된 데이터는 WASM DisplayControl 채널을 통해 Windows 호스트와 실시간으로 해상도를 자동 협상(Auto-negotiate)하여, 어떤 기기에서도 끊김 없는 전체 화면 경험을 보장합니다.
                                            </>
                                        ) : (
                                            <>
                                                Utilizes React's <strong>ResizeObserver</strong> to detect browser viewport changes.
                                                This data is passed through the WASM DisplayControl channel to auto-negotiate screen resolution with the Windows host in real-time, ensuring a seamless full-screen experience on any device.
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>
                            {/* Feature 2 */}
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-indigo-600"><Layers size={24} /></div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-zinc-900 italic">Modular Architecture (WASM Orchestration)</h4>
                                    <p className="text-zinc-600 leading-relaxed text-[15px]">
                                        {lang === 'ko' ? (
                                            <>
                                                복잡한 Rust/WASM 인터럽트 로직을 React 컴포넌트 라이프사이클과 완전히 분리했습니다.
                                                TypeScript의 엄격한 타입을 적용해 WASM 코어와 WebSocket 터널 간의 비동기 통신을 안정적으로 제어하며, 레거시 Svelte 클라이언트 대비 유지보수 편의성을 대폭 향상시켰습니다.
                                            </>
                                        ) : (
                                            <>
                                                Completely separated complex Rust/WASM interrupt logic from the React component lifecycle.
                                                By applying strict TypeScript typing, it safely controls asynchronous communication between the WASM core and WebSocket tunnels, drastically improving maintainability compared to the legacy Svelte client.
                                            </>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specs Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="p-8 bg-zinc-900 text-white rounded-[2rem] shadow-xl">
                            <h4 className="font-bold flex items-center gap-2 mb-6 text-indigo-400">
                                <Code2 size={20} /> Build Environment
                            </h4>
                            <div className="space-y-4 font-mono text-xs">
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-zinc-500">React Framework</span>
                                    <span className="text-zinc-200">v19.1.1</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-zinc-500">Build Tool</span>
                                    <span className="text-zinc-200">Vite v7.1.7</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-zinc-500">Language</span>
                                    <span className="text-zinc-200">TS v5.9.3</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">WASM Core</span>
                                    <span className="text-zinc-200">Rust IronRDP</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2rem]">
                            <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-2 text-sm">
                                <FileText size={18} /> Documentation Standard
                            </h4>
                            <p className="text-xs text-blue-700 leading-relaxed">
                                {lang === 'ko' ? (
                                    <>
                                        오픈소스 기여를 위해 "Zero-to-Hero" 배포 가이드를 작성했습니다.
                                        Rust와 WASM 환경 구축부터 네트워크 트러블슈팅까지 문서화하여 신규 컨트리뷰터의 진입 장벽을 낮췄습니다.
                                    </>
                                ) : (
                                    <>
                                        Wrote a "Zero-to-Hero" deployment guide to encourage open-source contributions.
                                        By documenting everything from setting up the Rust and WASM environments to network troubleshooting, it lowers the barrier to entry for new contributors.
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Future Roadmap & Contribution */}
            <section className="border-t border-zinc-100 pt-16">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">The Next Step</h2>
                        <h3 className="text-4xl font-black text-zinc-900 tracking-tight">Upstreaming<br />to Official Repo</h3>
                        <p className="text-zinc-500 leading-relaxed">
                            {lang === 'ko'
                                ? '본 연구 결과물은 단순한 프로젝트를 넘어, IronRDP 공식 웹 클라이언트로 채택되기 위한 로드맵을 밟고 있습니다.'
                                : 'More than just a project, this research is on a roadmap to be adopted as the official IronRDP web client.'}
                        </p>
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-10 bg-zinc-50 rounded-[2.5rem] space-y-6 relative overflow-hidden">
                            <GitPullRequest className="absolute -right-4 -bottom-4 w-32 h-32 text-zinc-200/50" />
                            <h4 className="text-2xl font-bold text-zinc-900">Official Adoption</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                {lang === 'ko'
                                    ? 'Devolutions의 IronRDP 메인 레포지토리에 이 React 클라이언트를 기본 웹 인터페이스로 제안하는 PR(Pull Request) 준비 중.'
                                    : 'Preparing a PR to propose this React client as the default web interface for Devolutions\' main IronRDP repository.'}
                            </p>
                        </div>
                        <div className="p-10 bg-indigo-600 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden group">
                            <Globe className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:scale-110 transition-transform" />
                            <h4 className="text-2xl font-bold">RBI Integration</h4>
                            <p className="text-indigo-100 text-sm leading-relaxed">
                                {lang === 'ko'
                                    ? '현재의 VDI 기반을 확장하여, 단일 애플리케이션 스트리밍을 지원하는 Remote Browser Isolation(RBI) 기능을 개발 예정.'
                                    : 'Planning to expand the current VDI foundation to develop Remote Browser Isolation (RBI) features for single-application streaming.'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final Presentation Poster */}
            <section className="border-t border-zinc-100 pt-16 space-y-10">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                    <div className="space-y-2">
                        <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Final Presentation</h2>
                        <h3 className="text-4xl font-black text-zinc-900 tracking-tight">Project Poster</h3>
                        <p className="text-zinc-500 text-sm">
                            {lang === 'ko' ? 'KAIST 전산학부 최종 발표 포스터' : 'KAIST School of Computing Final Presentation Poster'}
                        </p>
                    </div>
                    <a
                        href="/rdp-poster.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-zinc-900 text-white font-bold text-sm hover:bg-zinc-700 transition-all shadow-lg hover:shadow-xl group"
                    >
                        <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                        {lang === 'ko' ? '새 탭에서 열기' : 'Open Full Screen'}
                    </a>
                </div>

                <div className="relative w-full rounded-[2rem] overflow-hidden border border-zinc-200 shadow-xl bg-zinc-50" style={{ height: '70vh', minHeight: '500px' }}>
                    <object
                        data="/rdp-poster.pdf"
                        type="application/pdf"
                        className="w-full h-full"
                        aria-label="RDP Project Final Poster"
                    >
                        {/* Native fallback: shown when browser cannot render PDF */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                            <FileText size={48} className="text-zinc-300" />
                            <p className="text-zinc-500 font-medium text-sm">
                                {lang === 'ko' ? '이 브라우저에서는 PDF를 직접 표시할 수 없습니다.' : 'Your browser cannot display PDF files inline.'}
                            </p>
                            <a
                                href="/rdp-poster.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 bg-zinc-900 text-white rounded-xl font-semibold text-sm hover:bg-zinc-700 transition-colors"
                            >
                                {lang === 'ko' ? '포스터 열기' : 'Open Poster'}
                            </a>
                        </div>
                    </object>
                </div>
            </section>

            {/* 6. Closing: Engineering Mentality */}
            <section className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center space-y-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-white">Engineering Rigor for Open Source</h3>
                <div className="max-w-3xl mx-auto text-zinc-400 leading-relaxed italic">
                    {lang === 'ko' ? (
                        <>
                            "단순한 프로토타이핑을 넘어, 엄격한 소프트웨어 공학 표준을 준수하며 개발했습니다.<br />
                            기술적 깊이와 유지보수 가능성을 동시에 확보하는 것, 그것이 오픈소스 생태계에 기여하는 개발자의 올바른 자세임을 배웠습니다."
                        </>
                    ) : (
                        <>
                            "Beyond simple prototyping, this was developed adhering to strict software engineering standards.<br />
                            I learned that securing both technical depth and maintainability is the correct mindset for a developer contributing to the open-source ecosystem."
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}