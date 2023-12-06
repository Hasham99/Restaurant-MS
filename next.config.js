/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            }
        ]
    }
}
