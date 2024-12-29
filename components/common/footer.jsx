import React from 'react';
import Socials from './socials';

export default function Footer() {
  return (
    <div className="bg-gradient-to-br from-zinc-700 to-zinc-900 h-[300px] mt-24 p-24 flex flex-col items-end justify-end">
      <p className='text-zinc-100 font-xs mb-4'> Bizi Sosyal Medyada Takip Edin</p>
      <Socials />
    </div>
  );
}
