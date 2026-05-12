import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialIcon = ({ icon, href, brandColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  
 
  const getBrandColor = () => {
    if (icon?.iconName === 'instagram') {
      return '#833AB4'; 
    }
    return brandColor;
  };
  
  const finalColor = getBrandColor();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      style={{
        backgroundColor: isHovered ? finalColor : 'rgba(255, 255, 255, 0.05)',
        color: isHovered ? '#ffffff' : finalColor,
        border: `1px solid ${isHovered ? finalColor : 'rgba(255, 255, 255, 0.1)'}`,
        boxShadow: isHovered ? `0 0 15px ${finalColor}` : 'none'
      }}
    >
      <FontAwesomeIcon icon={icon} className="text-sm" />
    </a>
  );
};
