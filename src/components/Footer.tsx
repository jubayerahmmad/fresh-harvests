import {
  Facebook,
  Instagram,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-8 px-6 lg:px-0 lg:pb-6 lg:pt-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-[auto,1fr] gap-4 lg:grid-cols-4 lg:grid-rows-[auto,1fr] lg:gap-12">
        <div className="flex flex-col h-full gap-4">
          <div className="">
            <Image
              alt="Logo"
              width={449}
              height={78}
              decoding="async"
              className="w-48 lg:w-72 py-4"
              src="/images/logo.webp"
              style={{ color: "transparent" }}
            />
          </div>
          {/* Download App */}
          <div className="">
            <h6 className="text-sm font-semibold text-black">Download App:</h6>
            <div className="mt-3 flex gap-x-5">
              <p>
                <Image
                  alt="Download on the App Store"
                  loading="lazy"
                  width={120}
                  height={40}
                  decoding="async"
                  src="/images/google_play.webp"
                  style={{ color: "transparent" }}
                />
              </p>
              <p>
                <Image
                  alt="Get it on Google Play"
                  loading="lazy"
                  width={135}
                  height={40}
                  decoding="async"
                  src="/images/google_play.webp"
                  style={{ color: "transparent" }}
                />
              </p>
            </div>
          </div>
        </div>
        {/* Quick Links 1 */}
        <div className="space-y-3 lg:row-span-2">
          <h6 className="text-xl font-bold text-black">Quick links 1</h6>
          <Link className="block w-fit text-gray-600 hover:underline" href="/">
            Home
          </Link>
          <Link
            className="block w-fit text-gray-600 hover:underline"
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className="block w-fit text-gray-600 hover:underline"
            href="/about"
          >
            About us
          </Link>
          <Link
            className="block w-fit text-gray-600 hover:underline"
            href="/blog"
          >
            Blog
          </Link>
          <Link className="block w-fit text-gray-600 hover:underline" href="#">
            FAQ
          </Link>
        </div>

        {/* Quick Links 2 */}
        <div className="space-y-3 lg:row-span-2">
          <h6 className="text-xl font-bold text-black">Quick links 2</h6>
          <Link className="block w-fit text-gray-600 hover:underline" href="#">
            Orders
          </Link>
          <Link
            className="block w-fit text-gray-600 hover:underline"
            href="/favorites"
          >
            Favorites
          </Link>
          <Link
            className="block w-fit text-gray-600 hover:underline"
            href="/cart"
          >
            Cart
          </Link>
          <Link
            className="block w-fit text-gray-600 hover:underline"
            href="/sign-in"
          >
            Sign in
          </Link>
          <Link
            className="block w-fit text-gray-600 hover:underline"
            href="/register"
          >
            Register
          </Link>
        </div>

        {/* Contact */}
        <div className="space-y-3 lg:row-span-2">
          <h6 className="text-xl font-bold text-black">Contact us</h6>
          {/* Phone */}
          <Link
            className="flex w-fit items-center gap-x-1 text-gray-600 hover:underline"
            href=""
          >
            {/* SVG icon */}
            <PhoneIcon className="w-4 h-4 text-green-700" />
            1234567890
          </Link>

          {/* Email */}
          <Link
            className="flex w-fit items-center gap-x-2 text-gray-600 hover:underline"
            href="mailto:freshharvests@email.com"
          >
            <MailIcon className="w-4 h-4 text-green-700" />
            freshharvests@email.com
          </Link>

          {/* Address */}
          <Link
            className="flex w-fit items-center gap-x-1 text-gray-600 hover:underline"
            href=""
          >
            <LocateIcon className="w-4 h-4 text-green-700" />
            742 Evergreen Terrace, Springfield
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container flex flex-col items-center border-t border-gray-400 py-2 mt-4 lg:flex-row lg:justify-between">
        <p className="text-xs font-bold text-black">
          © Copyright 2025, Made with ❤️ by{" "}
          <Link target="_blank" className="text-green hover:underline" href="/">
            Jubayer Ahmmad
          </Link>
        </p>
        <div className="order-first flex space-x-3.5 lg:order-none">
          {/* Social buttons */}
          <button className="p-2 rounded-full bg-black">
            <Facebook className="h-4 w-4 text-gray-200" />
          </button>
          <button className="p-2 rounded-full bg-black">
            <Twitter className="h-4 w-4 text-gray-200" />
          </button>
          <button className="p-2 rounded-full bg-black">
            <Instagram className="h-4 w-4 text-gray-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
