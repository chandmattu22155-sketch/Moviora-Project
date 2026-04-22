import React from 'react';

function DetailPageAddInfoCard({ title, items }) {
  return (
    <div className="relative group">
   
      <div className="absolute -inset-0.5 bg-linear-to-r from-[#FFB800] to-amber-600 rounded-3xl blur opacity-10 group-hover:opacity-30 transition  duration-500"></div>
      
    
      <div className="relative bg-[#050525]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl transition-all duration-300 hover:scale-105 group-hover:border-[#FFB800]/40">
        
   
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-pulse shadow-[0_0_8px_#FFB800]"></div>
          <h3 className="text-[#FFB800] font-bold text-xs uppercase tracking-[0.2em]">
            {title}
          </h3>
        </div>

       
        <div className="space-y-5">
          {items.map((item, index) => (
            <div key={index} className="group/item">
              <div className="flex justify-between items-end pb-1">
                <span className="text-gray-200 text-sm font-medium transition-colors group-hover/item:text-gray-100">
                  {item.label}
                </span>
                
        
                <div className="flex-1 border-b border-white/5 border-dotted mx-2 mb-1 opacity-20"></div>
                
                <span className="text-white text-sm font-bold tracking-wide">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPageAddInfoCard;

