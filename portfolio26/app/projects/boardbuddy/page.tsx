import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BoardbuddyContent from './boardbuddyContent';

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

            <main className="max-w-3xl mx-auto px-6 py-20">
                <BoardbuddyContent />
            </main>
        </div>
    );
}
