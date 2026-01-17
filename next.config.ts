import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin(
  './i18n/request.ts' // Optional: path to your request config, defaults to './i18n/request.ts'
);

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
