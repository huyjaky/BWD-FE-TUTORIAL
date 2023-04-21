// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";
import httpProxy, { ProxyResCallback } from "http-proxy";
import type { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";

// type Data = {
//   name: string
// }
export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "Method not supported" });
  }
  return new Promise(() => {
    // dont send cookies to api server
    req.headers.cookie = "";

    // copy at http-proxy docs Miscellaneous
    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          // convert to cookies
          const cookies = new Cookies(req, res, {secure: process.env.NODE_ENV !== 'development'});
          cookies.set('access_token', accessToken ,{
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt)
          });

          (res as NextApiResponse).status(200).json({message: 'login successfully'});
        } catch (error) {
          (res as NextApiResponse).status(500).json({message: 'Something wrong'});
        }

        resolve();
      });

    };
    //

    proxy.once("proxyRes", handleLoginResponse);

    // https://js-post-api.herokuapp.com
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
