"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ContactSheet from "./contact";

export default function Header() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full flex items-center justify-center bg-zinc-900 h-[80px]">
      <Link href="/">
       <Image
        className="fill-zinc100"
        src="/assets/images/diyanet-dijital.png"
        width={100}
        height={100}
        alt="Logo"
        className="h-[35px] w-auto ml-12 px-4"
      />
      </Link>
      <div className={cn("inset-x-0 max-w-2xl mx-auto z-50 ")}>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="İlim Merkezi">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/okul/kuran">Kur'an Okulu</HoveredLink>
              <HoveredLink href="/okul/hadis">Hadis Okulu</HoveredLink>
              <HoveredLink href="/okul/siyer">Siyer Okulu</HoveredLink>
              <HoveredLink href="/okul/fıkıh">Fıkıh Okulu</HoveredLink>
              <HoveredLink href="/okul/kelam">Kelam Okulu</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Kütüphane">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Akaid Kütüphanesi"
                href="https://algochurn.com"
                src="/assets/images/quran.jpg"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Fıkıh Kütüphanesi"
                href="https://tailwindmasterkit.com"
                src="/assets/images/kuran.jpg"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Siyer Kütüphanesi"
                href="https://gomoonbeam.com"
                src="/assets/images/kitap-kapağı.jpg"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Tasavvuf Kütüphanesi"
                href="https://userogue.com"
                src="/assets/images/kandil.jpg"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Broşürler">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
            </div>
          </MenuItem>
          <ContactSheet />

        </Menu>
      </div>
    </div>
  );
}
