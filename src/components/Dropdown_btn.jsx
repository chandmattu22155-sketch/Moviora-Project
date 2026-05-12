import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown_btn({ title, options = {}, icon, onSelect, value }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null); 
  const ref = useRef(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelected(value); 
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative inline-block w-full transition-all duration-300 ${
        open ? 'z-50' : 'z-20 hover:z-30'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-4 rounded-xl text-[12px] font-black tracking-tighter uppercase transition-all duration-500 border backdrop-blur-sm
          ${
            open
              ? 'bg-gradient-to-r from-[#FFB800] to-[#FF6B00] text-white border-[#FFB800] shadow-[0_10px_30px_rgba(255,184,0,0.3)]'
              : 'bg-white/5 text-white border-white/10 hover:border-[#FFB800] hover:bg-white/10 hover:shadow-[0_5px_15px_rgba(255,184,0,0.2)]'
          }`}
      >
        <div className="flex items-center gap-3">
          <div className={`${open ? 'text-white' : 'text-[#FFB800]'} text-base transition-colors duration-300`}>
            {icon && <FontAwesomeIcon icon={icon} />}
          </div>

          <span className="truncate font-bold text-xs">
            {options[selected] || title}
          </span>
        </div>

        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-xs transition-all duration-500 ${
            open ? 'rotate-180 text-white' : 'text-[#FFB800] opacity-70'
          }`}
        />
      </button>

   
      {open && (
        <div className="absolute left-0 top-[115%] w-full bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[120] animate-in slide-in-from-top-2 duration-200">
       
          <div className="px-4 py-3 border-b border-white/10 bg-white/5">
            <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider">
              Select {title}
            </p>
          </div>
          
         
          <div className="max-h-64 overflow-y-auto custom-scrollbar p-2">
            {Object.entries(options).map(([key, label]) => (
              <div
                key={key}
                onClick={() => {
                  setSelected(key);   
                  setOpen(false);
                  if (onSelect) onSelect(key);
                }}
                className={`group px-4 py-2.5 text-[12px] font-bold transition-all duration-300 cursor-pointer rounded-lg mb-1
                  ${
                    selected === key
                      ? 'bg-gradient-to-r from-[#FFB800] to-[#FF6B00] text-white shadow-lg'
                      : 'text-white/80 border border-transparent hover:border-[#FFB800] hover:bg-white/5 hover:text-[#FFB800]'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wide">{label}</span>
                  {selected === key && (
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          
          <div className="px-4 py-2 border-t border-white/10 bg-white/5">
            <p className="text-[8px] text-white/40 uppercase tracking-wider text-center">
              {Object.keys(options).length} options available
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown_btn;


