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
            <SheetContent side="right" className="bg-[#111] border-l border-white/10 text-white w-[300px] sm:w-[400px]">

                {/* Accessibility Requirements */}
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    Navigation links for mobile devices.
                </SheetDescription>

                <div className="flex flex-col gap-8 mt-12">
                    {/* Logo in Menu */}
                    <div className="text-xl font-medium tracking-tight">
                        {t('Header.title')} <span>✦</span> {t('Header.subtitle')}
                    </div>

                    <nav className="flex flex-col gap-6 text-2xl font-medium tracking-tight">
                        <Link
                            href="#overview"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-300 transition-colors"
                        >
                            <span className="text-sm opacity-50 block mb-1">01</span>
                            {t('Navigation.overview')}
                        </Link>
                        <Link
                            href="#services"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-300 transition-colors"
                        >
                            <span className="text-sm opacity-50 block mb-1">02</span>
                            {t('Navigation.services')}
                        </Link>
                        <Link
                            href="#proof"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-300 transition-colors"
                        >
                            <span className="text-sm opacity-50 block mb-1">03</span>
                            {t('Navigation.proof')}
                        </Link>
                        <Link
                            href="/privacy"
                            onClick={() => setOpen(false)}
                            className="hover:text-gray-300 transition-colors"
                        >
                            <span className="text-sm opacity-50 block mb-1">04</span>
                            {t('Navigation.privacy')}
                        </Link>
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    );
}
