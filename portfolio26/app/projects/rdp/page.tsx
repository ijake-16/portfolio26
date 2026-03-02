import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Rust Security RDP — Jake.dev',
    description: 'C++ 기반 보안 솔루션을 Rust로 분석하고 웹(WASM)으로 이식한 졸업 프로젝트',
};

export default function RDPPage() {
    return (
        <div className="min-h-screen bg-white text-zinc-900">
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium">
                        <ArrowLeft size={16} />
                        Jake.dev
                    </Link>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-6 py-20 space-y-16">

                {/* Header */}
                <section className="space-y-6">
                    <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden relative flex items-center justify-center">
                        <ShieldCheck size={80} strokeWidth={1} className="text-zinc-700" />
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                            <h1 className="text-4xl font-bold tracking-tight">Rust Security RDP Solution</h1>
                            <a href="#" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors pt-1 shrink-0">
                                Visit <ExternalLink size={14} />
                            </a>
                        </div>
                        <p className="text-zinc-500 text-sm">2025 – 2026 · Graduation Project</p>
                        <div className="flex flex-wrap gap-2">
                            {['Rust', 'WebAssembly', 'Security', 'C++'].map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Overview</h2>
                    <p className="text-zinc-600 leading-relaxed">
                        C++ 기반 보안 솔루션을 Rust로 분석하고 웹(WASM)으로 이식한 졸업 프로젝트입니다.
                        기술적 복잡성을 사용자 친화적인 웹 인터페이스로 재가공했습니다.
                    </p>
                </section>

                {/* Role */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Role</h2>
                    <p className="text-zinc-600 leading-relaxed">
                        전체 설계 및 개발. Rust 포팅, WASM 빌드 파이프라인 구성, 웹 인터페이스 구현.
                    </p>
                </section>

                {/* Key Contributions */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Key Contributions</h2>
                    <ul className="space-y-3 text-zinc-600 text-sm">
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>기존 C++ 보안 솔루션 분석 및 Rust로의 재구현</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>wasm-pack 기반 WebAssembly 빌드 파이프라인 구성</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>복잡한 보안 로직을 브라우저에서 실행 가능하도록 이식</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>사용자 친화적 웹 인터페이스 설계 및 구현</span></li>
                    </ul>
                </section>

            </main>
        </div>
    );
}
