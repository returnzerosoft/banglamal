/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/en/theme/paris",
        permanent: true,
      },
    ];
  },
  env: {
    // API_PROD_URL: "http://127.0.0.1:8000/api/",
    API_PROD_URL: "https://api.arashbd.com/api/",
    PAYMENT_RETURN_URL: "https://api.arashbd.com",
    PAYMENT_CANCEL_URL: "https://api.arashbd.com/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
