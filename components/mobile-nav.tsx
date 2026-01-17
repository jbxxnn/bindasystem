"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from 'react';

export default function MobileNav() {
    const t = useTranslations();
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="md:hidden text-white hover:opacity-70 transition-opacity p-1">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </button>
            </SheetTrigger>
            {/* 
        Updated Styling:
        - w-full: Full width on mobile for immersion
        - border-none: Cleaner look
        - pt-20: More top padding to clear close button comfortably
      */}
            <SheetContent side="right" className="bg-[#111] border-none text-white w-full sm:w-[400px] p-0">

                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    Navigation links for mobile devices.
                </SheetDescription>

                <div className="flex flex-col h-full px-6 py-8">
                    {/* Header in Menu */}
                    <div className="flex justify-start mb-16 pt-2">
                        <div className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide flex items-center gap-1 border border-white/20">
                            {t('Header.title')} <span>✦</span> {t('Header.subtitle')}
                        </div>
                    </div>

                    <nav className="flex flex-col gap-10">
                        <Link
                            href="#overview"
                            onClick={() => setOpen(false)}
                            className="group"
                        >
                            <span className="text-xs text-gray-500 uppercase tracking-wide block mb-2">01</span>
                            <span className="text-4xl font-medium tracking-tight group-hover:text-gray-300 transition-colors">
                                {t('Navigation.overview')}
                            </span>
                        </Link>
                        <Link
                            href="#services"
                            onClick={() => setOpen(false)}
                            className="group"
                        >
                            <span className="text-xs text-gray-500 uppercase tracking-wide block mb-2">02</span>
                            <span className="text-4xl font-medium tracking-tight group-hover:text-gray-300 transition-colors">
                                {t('Navigation.services')}
                            </span>
                        </Link>
                        <Link
                            href="#proof"
                            onClick={() => setOpen(false)}
                            className="group"
                        >
                            <span className="text-xs text-gray-500 uppercase tracking-wide block mb-2">03</span>
                            <span className="text-4xl font-medium tracking-tight group-hover:text-gray-300 transition-colors">
                                {t('Navigation.proof')}
                            </span>
                        </Link>
                        <Link
                            href="/privacy"
                            onClick={() => setOpen(false)}
                            className="group"
                        >
                            <span className="text-xs text-gray-500 uppercase tracking-wide block mb-2">04</span>
                            <span className="text-4xl font-medium tracking-tight group-hover:text-gray-300 transition-colors">
                                {t('Navigation.privacy')}
                            </span>
                        </Link>
                    </nav>

                    <div className="mt-auto">
                        <Link
                            href="#"
                            className="text-sm font-medium uppercase tracking-wide border-b border-white pb-1 inline-block"
                        >
                            {t('Header.inquiries')} &rarr;
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
