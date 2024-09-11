/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        dangerouslyAllowSVG: true,

        remotePatterns:[{protocol:'https',hostname:"avatars.githubusercontent.com"},
        {protocol:'https',hostname:"ghchart.rshah.org" }]


    }

};

export default nextConfig;
