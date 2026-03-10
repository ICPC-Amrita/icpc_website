/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ['picsum.photos'],  // Place holder images used in gallery page
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/provisional-winners",
        destination: "/404",
        permanent: true,
      },
      // {
      //   source: "/selected-teams",
      //   destination: "/404",
      //   permanent: true,
      // }
    ];
  },
};

export default nextConfig;
