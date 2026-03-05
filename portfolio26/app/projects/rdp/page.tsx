import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import WebVDIContent from './rdpContent';

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

            <main className="max-w-3xl mx-auto px-6 py-20">
                <WebVDIContent />
            </main>
        </div>
    );
}
