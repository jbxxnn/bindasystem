import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LetterSwapForward from "@/components/fancy/text/letter-swap-forward-anim"
import VariableFontHoverByLetter from "@/components/fancy/text/variable-font-hover-by-letter"

import LanguageSwitcher from "@/components/language-switcher";
import MobileNav from "@/components/mobile-nav";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen max-w-7xl mx-auto font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-transparent mix-blend-difference text-white pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1">
          <div className="" style={{ width: '50px', height: '17px', backgroundColor: 'white' }}></div>
          <div className="flex items-center justify-center" style={{ width: '27px', height: '17px', backgroundColor: 'white' }}>
            <div className="" style={{ width: '25px', height: '15px', borderRadius: '50%', backgroundColor: 'black', rotate: '15deg', transformOrigin: 'center' }}></div>
          </div>
          <MobileNav />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase pointer-events-auto mix-blend-difference">
          <Link href="/privacy" className="hover:opacity-70 flex transition-opacity">
            <span className="opacity-50 mr-1">01</span>
            <LetterSwapForward
              label={t('Navigation.privacy')}
              reverse={true}
              className="italic"
            />
          </Link>
        </nav>

        <div className="pointer-events-auto mix-blend-difference gap-8 flex items-center">
          <LanguageSwitcher />
          <Link
            href="#"
            className="text-xs font-medium uppercase tracking-wide pb-0.5 hover:opacity-70 transition-opacity"
          >
            <VariableFontHoverByLetter
              label={`${t('Header.inquiries')} \u2192`}
              fromFontVariationSettings="'wght' 400, 'slnt' 0"
              toFontVariationSettings="'wght' 900, 'slnt' -10"
              staggerFrom={"last"}
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 md:px-12 min-h-screen flex flex-col justify-between" id="overview">
          <div className="">
            <div className="">
              {/* Mobile Image placement */}
              <div className="flex items-end">
                {/* <div className="block w-24 md:w-32 lg:w-40 aspect-[3/4] rounded-sm overflow-hidden bg-gray-200 -z-10 translate-y-1 md:translate-y-2 mr-4 md:mr-0">
                  <Image
                    src="/images/hero-inset.png"
                    alt="Modern architecture"
                    fill
                    className="object-cover opacity-100"
                  />
                </div> */}
                <span className="block text-4xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tight font-medium text-[#111]">{t('Hero.reliable')}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tight font-medium text-[#111]">

                <div className="flex items-start flex-wrap gap-x-4">
                  <span className="block">{t('Hero.appointmentSystems')}</span>
                </div>
                <span className="block text-gray-300 text-3xl md:text-5xl lg:text-[4rem] leading-[0.9] tracking-tight font-medium">
                  {t('Hero.forClinics')}
                </span>
              </h1>
            </div>
          </div>

          <div className="h-[10rem] w-full"></div>

          <div className="flex flex-col md:flex-row justify-between items-end mt-20 md:mt-0">
            <p className="max-w-md text-sm md:text-lg leading-relaxed text-[#111]" style={{ maxWidth: '700px' }}>
              {t('Hero.intro')}
            </p>
            <span className="text-xs uppercase tracking-wide mt-8 md:mt-0">
              {t('Hero.scroll')}
            </span>
          </div>
        </section>

        {/* Divider / Transition */}
        <section className="px-6 md:px-12 py-20 bg-[#f4f4f4]">
          <div className="border-t border-gray-300 w-full mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <span className="text-xs text-gray-500 uppercase tracking-wide">• {t('Mission.tagline')}</span>
          </div>

          <div className="flex flex-col justify-between items-end">
            <h2 className="text-3xl md:text-5xl leading-[1.1] tracking-tight text-[#111] whitespace-pre-line">
              {t('Mission.headline')}
            </h2>
            <Link href="#" className="text-lg uppercase tracking-wide pb-0.5 mt-8 md:mt-8 hover:opacity-70 transition-opacity">
              <VariableFontHoverByLetter
                label={`${t('Mission.cta')} \u2192`}
                fromFontVariationSettings="'wght' 400, 'slnt' 0"
                toFontVariationSettings="'wght' 900, 'slnt' -10"
                staggerFrom={"last"}
              />
            </Link>
          </div>
        </section>

        {/* Why This Works Section */}
        <section className="px-6 md:px-12 py-20 bg-[#f4f4f4]">
          <div className="border-t border-gray-300 w-full mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-2">
            <div className="md:w-1/2">
              <span className="text-4xl font-medium tracking-tight">{t('Problem.title')}</span>
            </div>
            <div className="md:w-1/2">
              <ul className="space-y-4 text-lg md:text-xl leading-relaxed text-[#111] font-medium">
                <li>✦ {t('Problem.list.item1')}</li>
                <li>✦ {t('Problem.list.item2')}</li>
                <li>✦ {t('Problem.list.item3')}</li>
                <li>✦ {t('Problem.list.item4')}</li>
                <li>✦ {t('Problem.list.item5')}</li>
              </ul>
            </div>
          </div>
        </section>


        <section className="px-6 md:px-12 py-20 bg-[#f4f4f4]" id="services">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex flex-col gap-4 bg-gray-200 p-6">
              <div className="">
                <h3 className="text-2xl md:text-3xl font-medium mb-6">{t('Services.s1_title')}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600 max-w-xs">
                  {t('Services.s1_desc')}
                </p>
              </div>
              <div className="md:col-span-3 md:col-start-4 flex flex-col justify-between h-full">
                <ul className="space-y-1 text-xs md:text-sm text-[#111]">
                  <li>✦ {t('Services.s1_list.item1')}</li>
                  <li>✦ {t('Services.s1_list.item2')}</li>
                  <li>✦ {t('Services.s1_list.item3')}</li>
                  <li>✦ {t('Services.s1_list.item4')}</li>
                  <li>✦ {t('Services.s1_list.item5')}</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-gray-200 p-6">
              <div className="">
                <h3 className="text-2xl md:text-3xl font-medium mb-6">{t('Services.s2_title')}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600 max-w-xs">
                  {t('Services.s2_desc')}
                </p>
              </div>
              <div className="md:col-span-3 md:col-start-4 flex flex-col justify-between h-full">
                <ul className="space-y-1 text-xs md:text-sm text-[#111]">
                  <li>✦ {t('Services.s2_list.item1')}</li>
                  <li>✦ {t('Services.s2_list.item2')}</li>
                  <li>✦ {t('Services.s2_list.item3')}</li>
                  <li>✦ {t('Services.s2_list.item4')}</li>
                  <li>✦ {t('Services.s2_list.item5')}</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-gray-200 p-6">
              <div className="">
                <h3 className="text-2xl md:text-3xl font-medium mb-6">{t('Services.s3_title')}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600 max-w-xs">
                  {t('Services.s3_desc')}
                </p>
              </div>
              <div className="md:col-span-3 md:col-start-4 flex flex-col justify-between h-full">
                <ul className="space-y-1 text-xs md:text-sm text-[#111]">
                  <li>✦ {t('Services.s3_list.item1')}</li>
                  <li>✦ {t('Services.s3_list.item2')}</li>
                  <li>✦ {t('Services.s3_list.item3')}</li>
                  <li>✦ {t('Services.s3_list.item4')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>







        {/* Proof Section */}
        <section className="px-6 md:px-12 py-20 bg-[#f4f4f4]" id="proof">
          <div className="border-t border-gray-300 w-full mb-10"></div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-1/4">
              <span className="text-xs text-gray-500 uppercase tracking-wide">{t('Proof.label')}</span>
            </div>
            <div className="md:w-3/4">
              <p className="text-4xl md:text-6xl leading-[1.1] tracking-tight max-w-4xl text-[#111]">
                {t('Proof.text')}
              </p>
            </div>
          </div>
        </section>

        {/* Why This Works Section */}
        <section className="px-6 md:px-12 py-20 bg-[#f4f4f4]">
          <div className="border-t border-gray-300 w-full mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-2">
            <div className="md:w-2/4 max-w-md">
              <p className="text-xs text-gray-500 uppercase tracking-wide">{t('WhoThisIsFor.label')}</p>
              <h2 className="text-4xl font-medium tracking-tight">{t('WhoThisIsFor.headline')}</h2>
            </div>
            <div className="md:w-2/4">
              <ul className="space-y-4 text-md md:text-md leading-relaxed text-[#111] font-medium">
                <li>✦ {t('WhoThisIsFor.list.item1')}</li>
                <li>✦ {t('WhoThisIsFor.list.item2')}</li>
                <li>✦ {t('WhoThisIsFor.list.item3')}</li>
                <li>✦ {t('WhoThisIsFor.list.item4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="px-6 md:px-12 py-32" style={{ paddingBottom: '2rem' }}>
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-5xl md:text-8xl leading-[0.9] tracking-tight font-medium text-[#111] whitespace-pre-line">
              {t('CTA.title')}
            </h2>
            <div className="flex flex-col items-baseline gap-2 mt-8">
              <div className="text-sm md:text-base text-gray-600">{t('CTA.subtitle')} <span className="text-xs text-gray-600">{t('CTA.note')}</span></div>
              <Link href="#" className="text-base md:text-lg uppercase tracking-wide pb-0.5 hover:opacity-70 transition-opacity">
                <VariableFontHoverByLetter
                  label={`${t('CTA.button')} \u2192`}
                  fromFontVariationSettings="'wght' 400, 'slnt' 0"
                  staggerFrom={"last"}
                  toFontVariationSettings="'wght' 900, 'slnt' -10"
                />
              </Link>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
