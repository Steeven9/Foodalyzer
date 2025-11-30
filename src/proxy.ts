import { withAuth as proxy } from "next-auth/middleware";

export default proxy;

export const config = {
  matcher: ["/table/:path*", "/pantry/:path*", "/diary/:path*"],
};
