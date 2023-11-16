const nextConfig = {
    async redirects(){
        return [
            {
                source: '/',
                destination: '/personaltrainer',
                permanent: false,
            },
        ]
    }
  }
  
  module.exports = nextConfig