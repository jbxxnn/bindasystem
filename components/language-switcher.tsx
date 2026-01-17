"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLanguage = () => {
        const nextLocale = locale === 'nl' ? 'en' : 'nl';
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            disabled={isPending}
            className="text-xs font-medium uppercase tracking-wide px-2 py-1 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            title={locale === 'nl' ? 'Switch to English' : 'Overschakelen naar Nederlands'}
        >
            {locale === 'nl' ? 'EN' : 'NL'}
        </button>
    );
}
