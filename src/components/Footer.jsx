import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#262B40] w-full text-white py-6">
      <div className="flex flex-col items-center px-4 md:px-10">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 border-b border-white opacity-50 w-full pb-4">
          <a href="https://www.cartrade.com/company/about-us/">About Us</a>
          <a href="https://www.cartrade.com/company/terms/">
            Terms & Conditions
          </a>
          <a href="https://www.cartrade.com/company/contactus/">Contact Us</a>
          <a href="https://www.cartrade.com/company/contactus/">Advertise</a>
        </div>

        {/* Social Media and App Links */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full border-b border-white opacity-50 py-6 gap-6">
          {/* Social Media */}
          <div className="text-center">
            <p className="font-light text-gray-400 text-sm">CONNECT WITH US</p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://www.facebook.com/CarTrade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl md:text-4xl" />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2FCar_Trade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter className="text-3xl md:text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/cartrade-com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin className="text-3xl md:text-4xl" />
              </a>
              <a
                href="https://www.instagram.com/cartradeindia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram className="text-3xl md:text-4xl" />
              </a>
            </div>
          </div>

          {/* App Download Links */}
          <div className="text-center">
            <p className="font-light text-gray-400 text-sm">DOWNLOAD OUR APP</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://apps.apple.com/in/app/cartrade-com/id943365292">
                <img
                  src="https://imgd-ct.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2"
                  alt="Download CarTrade IOS App"
                  width="118"
                  height="38"
                  loading="lazy"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.cartrade.car">
                <img
                  src="https://imgd-ct.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2"
                  alt="Download CarTrade Android App"
                  width="118"
                  height="38"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 w-full border-b border-white opacity-50 py-6">
          <img
            src="https://imgd-ct.aeplcdn.com/0x0/cw/static/icons/svg/logos/fff/ctt-group.svg"
            alt="Cartrade Tech Logo"
            width="147"
            height="63"
            loading="lazy"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "", src: "ct.svg", alt: "Cartrade" },
              {
                href: "https://www.carwale.com/",
                src: "cw.svg",
                alt: "Carwale",
              },
              {
                href: "https://www.bikewale.com/",
                src: "bw.svg",
                alt: "Bikewale",
              },
              {
                href: "https://www.mobilityoutlook.com/",
                src: "mo.svg",
                alt: "Mobility Outlook",
              },
              { href: "https://www.olx.in/", src: "olx.svg", alt: "OLX" },
              {
                href: "https://www.cartrade.com/buy-used-cars/absure",
                src: "absure.svg",
                alt: "Carwale Absure",
              },
            ].map(({ href, src, alt }, index) => (
              <a key={index} href={href}>
                <img
                  src={`https://imgd-ct.aeplcdn.com/0x0/cw/static/icons/svg/logos/fff/${src}`}
                  alt={`${alt} Logo`}
                  width="100"
                  height="56"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between w-full text-center md:text-left text-gray-400 text-sm py-4">
          <p>© CarTrade Tech.</p>
          <p>Visitor Agreement & Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
