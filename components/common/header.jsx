"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ContactSheet from "./contact";
import { FaUser } from "react-icons/fa";
import { CustomCursorButton } from "../ui/wood-cursor";
import { Button } from "../ui/button";

export default function Header() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full flex items-center justify-evenly bg-zinc-900 h-[80px]">
      <Link href="/">
        <div className="pl-20"><Image
          className="fill-zinc100"
          src="/assets/images/diyanet-dijital.png"
          width={200}
          height={100}
          alt="Logo"
        /></div>
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
                href=""
                src="/assets/images/quran.jpg"
                description="İnanç esaslarını ve temel dini kavramlara dair eserleri inceleyin."
              />
              <ProductItem
                title="Fıkıh Kütüphanesi"
                href=""
                src="/assets/images/pray.jpg"
                description="İslam hukukunu ve dinî yaşamı düzenleyen kuralların inceleyin."
              />
              <ProductItem
                title="Siyer Kütüphanesi"
                href=""
                src="/assets/images/siyer.jpg"
                description="Hzç Muhammed'in  hayat hikayesi, yaşantısı ve hadislerini okuyun."
              />
              <ProductItem
                title="Tasavvuf Kütüphanesi"
                href=""
                src="/assets/images/kandil.jpg"
                description="Yolumuzu aydınlatanların hayatları ve eserlerini inceleyin."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Broşürler">
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Hakkımızda">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="https://www.diyanet.gov.tr/">Diyanet İşleri Başkanlığı</HoveredLink>
              <HoveredLink href="https://diniyayinlar.diyanet.gov.tr/">Dini Yayınlar Genel Müdürlüğü</HoveredLink>
              <HoveredLink href="https://yayin.diyanet.gov.tr/">Dijital Yayınlar Daire Başkanlığı</HoveredLink>
            </div>
          </MenuItem>
          <ContactSheet />
        </Menu>

      </div>


      <Button className="flex hover:bg-zinc-800 mr-12">
        Giriş Yap <FaUser className="text-zinc-100" />
      </Button>

    </div>
  );
}
