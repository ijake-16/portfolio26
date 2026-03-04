import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import TechForImpactContent from './TechForImpactContent';

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

            <main className="max-w-3xl mx-auto px-6 py-20">
                <TechForImpactContent />
            </main>
        </div>
    );
}
