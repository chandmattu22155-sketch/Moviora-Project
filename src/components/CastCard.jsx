import React from 'react';

export const CastCard = ({ name, role, image }) => {
  
  const hasImage = image && image !== "" && !image.includes("null");

  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden rounded-xl bg-[#0B0B22] border border-white/5 transition-all duration-300 group-hover:border-[#FFB800] group-hover:shadow-[0_0_20px_rgba(255,184,0,0.5)]">
        
        <div className="aspect-2/3 w-full overflow-hidden bg-slate-900 flex items-center justify-center p-1">
          {hasImage ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover object-top rounded-xl transition-transform duration-700 group-hover:scale-105"
        
              onError={(e) => {
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'flex'; 
              }}
            />
          ) : null}

   
   
          <div 
            className={`${hasImage ? 'hidden' : 'flex'} flex-col items-center text-center gap-2`}
            id="no-pic-msg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest leading-tight">
              No Picture <br /> Available
            </span>
          </div>
        </div>

        <div className="p-3 bg-linear-to-t from-[#0B0B22] to-transparent">
          <h3 className="text-white font-bold text-xs truncate group-hover:text-[#FFB800] transition-colors">
            {name}
          </h3>
          <p className="text-[#FFB800] text-[10px] font-medium uppercase tracking-tighter mt-0.5">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};