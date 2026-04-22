import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialIcon = ({ icon, href = "#" }) => (
  <a
    href={href}
    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg text-white 
               hover:bg-[#FFB800] hover:text-[#02021C] hover:border-[#FFB800] 
               hover:shadow-[0_0_20px_rgba(255,184,0,0.3)] hover:-translate-y-1
               transition-all duration-500"
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);







