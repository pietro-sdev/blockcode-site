/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Se você pretende rodar a aplicação no modo standalone
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'], // Certifique-se de que suas extensões de página são corretamente detectadas
};

export default nextConfig;
