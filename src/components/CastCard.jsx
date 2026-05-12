import React from 'react';

export const CastCard = ({ name, role, image }) => {
  
  const hasImage = image && image !== "" && !image.includes("null");

  return (
    <div className="group flex flex-col transform transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/10 transition-all duration-300 group-hover:border-[#FFB800] group-hover:shadow-[0_0_25px_rgba(255,184,0,0.4)]">

      
        <div className="aspect-[2/3] w-full overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center p-2 relative">
          
          {/* Image with better error handling */}
          {hasImage ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover object-top rounded-xl transition-all duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }} 
            />
          ) : null}
   
     
          <div 
            className={`${hasImage ? 'hidden' : 'flex'} flex-col items-center text-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl`} 
            id="no-pic-msg"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB800]/20 to-[#FF6B00]/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFB800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-[#FFB800] text-[10px] font-bold uppercase tracking-widest leading-tight">
              Image Not<br />Available
            </span>
          </div>

         
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
         
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

     
        <div className="p-4 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm">
          <div className="relative">
            {/* Name with icon */}
            <div className="flex items-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#FFB800] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-white font-bold text-sm truncate group-hover:text-[#FFB800] transition-colors duration-300">
                {name.length > 20 ? name.substring(0, 17) + '...' : name}
              </h3>
            </div>
            
            
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-[#FFB800]"></div>
              <p className="text-[#FFB800] text-[10px] font-semibold uppercase tracking-wider">
                {role.length > 25 ? role.substring(0, 22) + '...' : role}
              </p>
            </div>
          </div>
        </div>

       
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFB800] to-[#FF6B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        
     
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FFB800]/0 group-hover:border-[#FFB800]/30 transition-all duration-300 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FFB800]/0 group-hover:border-[#FFB800]/30 transition-all duration-300 rounded-br-2xl"></div>
      </div>
    </div>
  );
};
