import React from 'react';
import { FooterLink } from './FooterLink';
import { SocialIcon } from './SocialIcon';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faYoutube, 
  faDiscord 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02021C] py-16 px-6 md:px-20 border-t border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          <div className="lg:col-span-4">
            <h2 className="text-white text-3xl font-black tracking-tighter mb-6 uppercase">
              MOVI<span className="text-[#FFB800]">ORO</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-8">
              Experience the best of cinema from the comfort of your home.
              High-quality streaming, zero cost, and unlimited entertainment.
            </p>

            <div className="flex gap-4">
              <SocialIcon icon={faFacebookF} href="https://facebook.com" />
              <SocialIcon icon={faTwitter} href="https://twitter.com" />
              <SocialIcon icon={faInstagram} href="https://instagram.com" />
              <SocialIcon icon={faYoutube} href="https://youtube.com" />
              <SocialIcon icon={faDiscord} href="#" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigate</h3>
            <ul className="space-y-4">
              <FooterLink name="Home" href="/" />
              <FooterLink name="Trending" href="/" />
              <FooterLink name="Categories" href="/" />
              <FooterLink name="Contact" href="/" />
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h3>
            <ul className="space-y-4">
              <FooterLink name="Terms of Service" />
              <FooterLink name="Privacy Policy" />
              <FooterLink name="DMCA" />
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get latest movie updates.</p>
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-[#FFB800] transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-[#FFB800] text-[#02021C] px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>


          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-[12px] tracking-wide">
              © {currentYear} <span className="text-white font-semibold tracking-tighter">MOVI<span className='text-[#FFB800]'>ORO</span></span>. All rights reserved.
            </p>

            <div className="flex gap-8 text-[11px] uppercase tracking-tighter font-bold text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
                Servers Online
              </span>
              <span>Region: Global</span>
            </div>
          </div>

        </div>
    </footer>
  );
};

export default Footer;