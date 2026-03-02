import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';

export const metadata = {
    title: 'Kakao Impact Project — Jake.dev',
    description: '사회적 취약점 개선을 위한 솔루션 개발',
};

export default function BttfPage() {
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
                    <div className="aspect-video bg-zinc-100 rounded-2xl overflow-hidden relative flex items-center justify-center text-zinc-300">
                        <Code2 size={80} strokeWidth={1} />
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                            <h1 className="text-4xl font-bold tracking-tight">Kakao Impact Project</h1>
                            <a href="#" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors pt-1 shrink-0">
                                Visit <ExternalLink size={14} />
                            </a>
                        </div>
                        <p className="text-zinc-500 text-sm">2022 – 2024</p>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Social Impact', 'Data Analysis'].map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Overview</h2>
                    <p className="text-zinc-600 leading-relaxed">
                        사회적 취약점 개선을 위한 솔루션 개발 및 코엑스 컨퍼런스 발표 프로젝트입니다.
                        2년간의 점진적 개선을 통해 임팩트를 측정하고 검증했습니다.
                    </p>
                </section>

                {/* Role */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Role</h2>
                    <p className="text-zinc-600 leading-relaxed">
                        프로젝트 기획 및 개발 리드. 임팩트 지표 설계 및 코엑스 컨퍼런스 발표.
                    </p>
                </section>

                {/* Key Contributions */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Key Contributions</h2>
                    <ul className="space-y-3 text-zinc-600 text-sm">
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>사회적 문제 정의 및 솔루션 기획</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>임팩트 측정 지표 설계 및 데이터 분석</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>2년에 걸친 반복 개선 및 실사용 검증</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>코엑스 컨퍼런스 발표 및 결과 공유</span></li>
                    </ul>
                </section>

            </main>
        </div>
    );
}
