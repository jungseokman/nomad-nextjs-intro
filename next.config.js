/** @type {import('next').NextConfig} */

const NEXT_PUBLIC_KEY = '10923b261ba94d897ac6b81148314a3f';


const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path*",
        destination : "/new-sexy-blog/:path*",
        permanent: false,
      },
    ]
  },
  async rewrites(){
    return [
      {
        source : "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${NEXT_PUBLIC_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${NEXT_PUBLIC_KEY}`,
      },
    ]
  }
}

module.exports = nextConfig
