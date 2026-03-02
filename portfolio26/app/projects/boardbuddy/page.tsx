import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Rocket } from 'lucide-react';

export const metadata = {
    title: 'Boardbuddy — Jake.dev',
    description: '스노보드 동아리 운영 자동화를 위한 풀스택 웹 서비스',
};

export default function BoardbuddyPage() {
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
                        <Rocket size={80} strokeWidth={1} />
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                            <h1 className="text-4xl font-bold tracking-tight">Boardbuddy</h1>
                            <a href="#" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors pt-1 shrink-0">
                                Visit <ExternalLink size={14} />
                            </a>
                        </div>
                        <p className="text-zinc-500 text-sm">2024 – 2025</p>
                        <div className="flex flex-wrap gap-2">
                            {['Next.js', 'Vercel', 'PostgreSQL', 'Spring Boot', 'TypeScript'].map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-zinc-100 rounded text-zinc-500">{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Overview</h2>
                    <p className="text-zinc-600 leading-relaxed">
                        스노보드 동아리 운영 자동화를 위한 풀스택 웹 서비스입니다.
                        기획부터 베타테스팅, 실제 운영까지 제품 전 과정을 리딩했습니다.
                    </p>
                </section>

                {/* Role */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Role</h2>
                    <p className="text-zinc-600 leading-relaxed">
                        풀스택 개발, 기획, 운영 전반 리드. 베타테스팅 설계 및 실사용자 피드백 반영.
                    </p>
                </section>

                {/* Key Contributions */}
                <section className="space-y-4 border-t border-zinc-100 pt-10">
                    <h2 className="text-xs uppercase tracking-widest font-bold text-zinc-400">Key Contributions</h2>
                    <ul className="space-y-3 text-zinc-600 text-sm">
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>예약 시스템 설계 및 구현 (오프셋 기반 예약 오픈 로직)</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>카카오 OAuth 연동 및 회원 관리 플로우 구현</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>실사용자 대상 베타테스팅 운영 및 개선 사이클 반복</span></li>
                        <li className="flex gap-3"><span className="text-zinc-300 select-none">—</span><span>Vercel + 외부 서버 기반 프로덕션 배포 및 운영</span></li>
                    </ul>
                </section>

            </main>
        </div>
    );
}
