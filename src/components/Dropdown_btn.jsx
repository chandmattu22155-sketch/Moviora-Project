import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown_btn({ title, options = {}, icon, onSelect, resetFilters }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(title);
  const ref = useRef(null);

  useEffect(() => {
    setSelected(title);
    setOpen(false);
  }, [resetFilters, title]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 

  return (
    <div ref={ref} className={`relative inline-block w-full transition-all duration-300 ${open ? 'z-110' : 'z-20 hover:z-30'}`}>
      
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-4 rounded-2xl text-[12px] font-black tracking-tighter uppercase transition-all duration-500 border
          ${open 
            ? 'bg-[#FFB800] text-[#02021C] border-[#FFB800] shadow-[0_10px_30px_rgba(255,184,0,0.4)] -translate-y-0.5' 
            : 'bg-[#0A0A26]/50 text-white border-white/10 hover:border-[#FFB800]/50 hover:bg-white/5'}`}
      >
        <div className="flex items-center gap-3">
          <div className={`${open ? 'text-[#02021C]' : 'text-[#FFB800]'} text-sm`}>
            {icon && <FontAwesomeIcon icon={icon} />}
          </div>
          <span className="truncate">{selected}</span>
        </div>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`text-[10px] opacity-60 transition-transform duration-500 ${open ? 'rotate-180 opacity-100' : ''}`} 
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[115%] w-full bg-[#0A0A26]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-[120] p-2">
          <div className="max-h-64 overflow-y-auto custom-scrollbar flex flex-col gap-1">
            {Object.entries(options).map(([key, value]) => (
              <div
                key={key}
                onClick={() => {
                  setSelected(value);
                  setOpen(false);
                  if (onSelect) onSelect(key);
                }}
                className={`px-4 py-2.5 text-[13px] font-bold transition-all duration-300 cursor-pointer rounded-xl border-2
                  ${selected === value 
                    ? 'bg-[#FFB800] text-[#02021C] border-[#FFB800]' 
                    : 'text-white border-transparent hover:border-[#FFB800] hover:text-[#FFB800] hover:bg-[#FFB800]/5'}`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown_btn;
