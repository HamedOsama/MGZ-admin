/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'api.kit-hardware-center.com','zammit.s3-eu-west-1.amazonaws.com', 'hatlystore.tswsp.net', 'images.unsplash.com', 'www.corsair.com','media.istockphoto.com'],
  },
  // eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
