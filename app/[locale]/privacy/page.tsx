import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
    const t = useTranslations('Privacy');

    // List of sections to iterate over. 
    // We assume 11 sections based on the JSON structure.
    const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    return (
        <div className="min-h-screen max-w-7xl mx-auto font-sans px-6 md:px-12 py-12 md:py-20 text-[#111]">

            {/* Simple Header / Nav Back */}
            <div className="mb-12">
                <Link href="/" className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity">
                    &larr; {t('backToHome')}
                </Link>
            </div>

            <main className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">{t('title')}</h1>

                <p className="text-sm text-gray-500 mb-12 uppercase tracking-wide">
                    {t('lastUpdated')}
                </p>

                <section className="mb-12">
                    <p className="text-base md:text-lg leading-relaxed text-gray-800">
                        {t('intro')}
                    </p>
                </section>

                <div className="border-t border-gray-200 w-full mb-12"></div>

                {sections.map((num) => (
                    <section key={num} className="mb-12">
                        <h2 className="text-2xl font-medium mb-6">{t(`sections.${num}.title`)}</h2>

                        {/* Main Content */}
                        <p className="text-base leading-relaxed text-gray-800 mb-4">
                            {t(`sections.${num}.content`)}
                        </p>

                        {/* Optional Second Paragraph */}
                        {t.has(`sections.${num}.content2`) && (
                            <p className="text-base leading-relaxed text-gray-800 mb-4">
                                {t(`sections.${num}.content2`)}
                            </p>
                        )}

                        {/* List Items if any */}
                        {t.has(`sections.${num}.list`) && (
                            <ul className="list-disc list-inside space-y-2 text-base text-gray-800 ml-2 mb-4">
                                {/* 
                            We don't know exactly how many items, but we can try a reasonable range 
                            or use a predefined mapping if keys weren't objects.
                            Since structure is `list: { item1: "..." }`, we can map over keys if were server side,
                            but client side `useTranslations` doesn't give us keys.
                            So we check for item1...itemX.
                         */}
                                {[1, 2, 3, 4, 5].map((i) => (
                                    t.has(`sections.${num}.list.item${i}`) && (
                                        <li key={i}>{t(`sections.${num}.list.item${i}`)}</li>
                                    )
                                ))}
                            </ul>
                        )}

                        {/* Footer Content (often bold or emphatic) */}
                        {t.has(`sections.${num}.footer`) && (
                            <p className="text-base leading-relaxed text-gray-800 mt-4 font-medium">
                                {t.rich(`sections.${num}.footer`, {
                                    bold: (chunks) => <strong>{chunks}</strong>
                                })}
                            </p>
                        )}

                        {/* Special Case for Contact Info */}
                        {num === 10 && (
                            <div className="bg-gray-50 p-6 rounded-sm border border-gray-100 mt-4">
                                <p className="text-base font-medium text-[#111] mb-1">{t(`sections.${num}.company`)}</p>
                                <p className="text-base text-gray-800">{t(`sections.${num}.email`)}</p>
                            </div>
                        )}
                    </section>
                ))}

                <section className="mt-20 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        {t('agreement')}
                    </p>
                </section>

            </main>
        </div>
    );
}
