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
    <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-black py-10 px-6 md:px-20 border-t border-white/10 font-sans relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#FFB800] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">

          
          <div className="lg:col-span-4">
            <div className="mb-3">
              <h2 className="text-white text-3xl font-black tracking-tighter ">
                Prime<span className="text-[#FFB800]">Cinema</span>
              </h2>
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#FFB800] to-[#FF6B00] rounded-full mt-2"></div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs mb-4">
              Experience the best of cinema from the comfort of your home.
            </p>

            <div className="flex gap-3">
              <SocialIcon icon={faFacebookF} href="https://facebook.com" brandColor="#1877f2" />
              <SocialIcon icon={faTwitter} href="https://twitter.com" brandColor="#1da1f2" />
          <SocialIcon icon={faInstagram} href="https://instagram.com" brandColor="#833AB4" />              <SocialIcon icon={faYoutube} href="https://youtube.com" brandColor="#ff0000" />
              <SocialIcon icon={faDiscord} href="#" brandColor="#5865f2" />
            </div>
          </div>

       
          <div className="lg:col-span-2">
            <h3 className="text-[#FFB800] font-bold mb-3 text-xs uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink name="Home" href="/" />
              <FooterLink name="Trending" href="/trending" />
              <FooterLink name="Categories" href="/categories" />
              <FooterLink name="Contact" href="/contact" />
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[#FFB800] font-bold mb-3 text-xs uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <FooterLink name="Terms of Service" href="/terms" />
              <FooterLink name="Privacy Policy" href="/privacy" />
              <FooterLink name="DMCA" href="/dmca" />
            </ul>
          </div>

   
          <div className="lg:col-span-4">
            <h3 className="text-[#FFB800] font-bold mb-3 text-xs uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-xs mb-3">Get latest movie updates.</p>
            <div className="relative max-w-xs">
              <input
                type="email"
                placeholder="Enter email..."
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFB800] transition-all duration-300"
              />
              <button className="absolute right-1 top-1 bg-gradient-to-r from-[#FFB800] to-[#FF6B00] text-white px-3 py-1 rounded-md text-[10px] font-bold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-200 text-[10px] tracking-wide">
            © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FF6B00] font-bold">Prime<span className="text-[#FFB800]">Cinema</span></span>. All rights reserved.
          </p>

          <div className="flex gap-6 text-[10px] uppercase tracking-tighter font-bold">
            <span className="flex items-center gap-1.5 text-green-400">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              Servers Online
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Global
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
