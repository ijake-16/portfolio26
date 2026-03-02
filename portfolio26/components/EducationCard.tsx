'use client';

import { useState } from 'react';

const coursework = [
    {
        category: 'Computing',
        courses: [
            { id: 'CS101', name: 'Introduction to Programming' },
            { id: 'CS202', name: "Problem Solving" },
            { id: 'CS206', name: 'Data Structures' },
            { id: 'MAS275', name: 'Discrete Mathematics' },
            { id: 'CS230', name: 'Systems Programming' },
            { id: 'CS300', name: 'Introduction to Algorithms' },
            { id: 'CS311', name: 'Computer Organization' },
            { id: 'CS320', name: 'Programming Languages' },
            { id: 'CS322', name: 'Formal Languages and Automata' },
            { id: 'CS330', name: 'Operating Systems and Lab' },
            { id: 'CS360', name: 'Introduction to Database' },
            { id: 'CS376', name: 'Machine Learning' },
            { id: 'CS408', name: 'Computer Science Project' },
            { id: 'CS470', name: "Introduction to Artificial Intelligence" },
            { id: 'CS489', name: 'Computer Ethics and Social Issues' },
            { id: 'CS492', name: 'Special Topics in CS <Smart Factory>' },
            { id: 'CS492', name: 'Special Topics in CS <Tech for Impact>' },
            { id: 'CS492', name: 'Special Topics in CS <Diffusion and Flow Models AI>' }
        ],
    },
    {
        category: 'Entrepreneurship',
        courses: [
            { id: 'HSS117', name: 'Startup 101' },
            { id: 'KEI381', name: 'Entrepreneurship & Innovation<Business Failure Cases and Analysis of Failure Factors>' }
        ],
    },
    {
        category: 'Biology',
        courses: [
            { id: 'BS202', name: 'Cell Biology' },
            { id: 'BS205', name: 'Biochemistry I' },
            { id: 'BS206', name: 'Biochemistry II' },
            { id: 'BS209', name: 'Molecular Biology' },
            { id: 'BS316', name: 'Introduction to Epigenetics' },
            { id: 'BS407', name: 'Physical Chemistry for Life Science' },
            { id: 'BS483', name: 'Topics in Life Science <Bioinformatics>' },
            { id: 'MSE101', name: 'The Human Body and Diseases' },
        ],
    },
];

export default function EducationCard() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="space-y-1 relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* KAIST entry */}
            <p className="font-semibold text-sm leading-snug cursor-default underline decoration-dotted decoration-zinc-300 underline-offset-2">
                Korea Advanced Institute of Science and Technology
            </p>
            <p className="text-zinc-500 text-sm">B.S. Computing · Minor in Biology</p>
            <p className="text-zinc-400 text-xs">2020 – 2026</p>

            {/* Coursework panel */}
            {open && (
                <div className="absolute left-0 top-full mt-2 z-50 w-[640px] bg-white border border-zinc-100 rounded-2xl shadow-xl p-5">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-4">
                        Related Coursework
                    </p>
                    <div className="grid grid-cols-2 gap-x-8">
                        {/* Left: Computing */}
                        <div className="space-y-1.5">
                            <p className="text-xs font-bold text-zinc-700">Computing</p>
                            <div className="space-y-0.5">
                                {coursework.find(g => g.category === 'Computing')?.courses.map((c, i) => (
                                    <div key={`${c.id}-${i}`} className="flex items-baseline gap-2">
                                        <span className="text-[10px] font-mono text-zinc-400 w-14 shrink-0">{c.id}</span>
                                        <span className="text-xs text-zinc-600 leading-snug">{c.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: everything else stacked */}
                        <div className="space-y-4">
                            {coursework.filter(g => g.category !== 'Computing').map((group) => (
                                <div key={group.category} className="space-y-1.5">
                                    <p className="text-xs font-bold text-zinc-700">{group.category}</p>
                                    <div className="space-y-0.5">
                                        {group.courses.map((c, i) => (
                                            <div key={`${c.id}-${i}`} className="flex items-baseline gap-2">
                                                <span className="text-[10px] font-mono text-zinc-400 w-14 shrink-0">{c.id}</span>
                                                <span className="text-xs text-zinc-600 leading-snug">{c.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
