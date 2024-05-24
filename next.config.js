import bundleAnalyzer from '@next/bundle-analyzer'
import nextra from 'nextra'
import remarkObsidian from 'remark-obsidian'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  transformPageMap(pageMap, locale) {
    if (locale === 'en') {
      pageMap = [
        ...pageMap,
      ]
    }
    return pageMap
  },
  latex: true,
  mdxOptions: {
    remarkPlugins: [remarkObsidian]
  },
  redirects: () => {
    return [
      {
        source: "/reset-tokens",
        destination: "/troubleshooting/reset-tokens",
        statusCode: 302
      },
      {
        source: "/non-local-styles",
        destination: "/styles/non-local-styles",
        statusCode: 302
      },
      {
        source: "/naming-design-tokens",
        destination: "/guides/naming-design-tokens",
        statusCode: 302
      },
    ]
})

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

/**
 * @type {import('next').NextConfig}
 */
export default withBundleAnalyzer(
  withNextra({
    // i18n: {
    //   locales: ['en', 'pt-br'],
    //   defaultLocale: 'en'
    // },
    distDir: './.next', // Nextra supports custom `nextConfig.distDir`
    reactStrictMode: true
  })
)