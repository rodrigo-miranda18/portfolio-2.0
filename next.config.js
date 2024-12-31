/* eslint-disable @typescript-eslint/no-var-requires */
const withNextIntl = require('next-intl/plugin')('./src/i18n/index.ts');
const withMDX = require('@next/mdx')({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

module.exports = withNextIntl(withMDX(nextConfig));
