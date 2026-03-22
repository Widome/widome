'use client';

import Link from 'next/link';

export default function HeaderDWP() {
    return (
        <header className="fixed top-0 left-0 right-0 z-[200] px-12 py-8 flex items-center justify-between pointer-events-none">
            {/* Left Links */}
            <nav className="flex items-center gap-12 pointer-events-auto">
                {['approche', 'services', 'clients', 'contact'].map((item) => (
                    <Link
                        key={item}
                        href={`/${item}`}
                        className="text-[13px] font-medium text-ink/80 hover:text-ink transition-colors tracking-tight"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            {/* Right Ribbon Logo (Cyan Triangle) */}
            <div className="pointer-events-auto cursor-pointer">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0L0 100H100V0Z" fill="#00B5B5" />
                </svg>
            </div>
        </header>
    );
}
