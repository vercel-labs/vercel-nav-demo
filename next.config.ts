const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
  redirects: () => {
    return [
      {
        source: '/',
        destination: '/leerob',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
