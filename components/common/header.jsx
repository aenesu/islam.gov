"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import ContactSheet from "./contact";
import { FaUser, FaBars } from "react-icons/fa";
import { CustomCursorButton } from "../ui/wood-cursor";
import { Button } from "../ui/button";

export default function Header() {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between bg-gradient-to-br from-zinc-700 to-zinc-900 h-[80px] px-4 lg:px-20">
      {/* Logo */}
      <Link href="/">
        <div className="flex-shrink-0">
          <Image
            className="fill-zinc100"
            src="/assets/images/diyanet-dijital.png"
            width={150}
            height={75}
            alt="Logo"
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className={cn("hidden lg:flex inset-x-0 max-w-2xl mx-auto z-50")}>
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
            <div className="text-sm grid grid-cols-2 gap-4 p-4">
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
                description="Hz. Muhammed'in hayat hikayesi, yaşantısı ve hadislerini okuyun."
              />
              <ProductItem
                title="Tasavvuf Kütüphanesi"
                href=""
                src="/assets/images/kandil.jpg"
                description="Yolumuzu aydınlatanların hayatları ve eserlerini inceleyin."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Broşürler"></MenuItem>
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

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-zinc-100 hover:bg-zinc-800 p-2"
        >
          <FaBars size={20} />
        </Button>
      </div>

      {/* User Button */}
      <Button className="hidden lg:flex hover:bg-zinc-800">
        Giriş Yap <FaUser className="ml-2 text-zinc-100" />
      </Button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-zinc-800 text-zinc-100 shadow-lg z-50">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="İlim Merkezi">
              <div className="flex flex-col space-y-4 text-sm p-4">
                <HoveredLink href="/okul/kuran">Kur'an Okulu</HoveredLink>
                <HoveredLink href="/okul/hadis">Hadis Okulu</HoveredLink>
                <HoveredLink href="/okul/siyer">Siyer Okulu</HoveredLink>
                <HoveredLink href="/okul/fıkıh">Fıkıh Okulu</HoveredLink>
                <HoveredLink href="/okul/kelam">Kelam Okulu</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Kütüphane">
              <div className="flex flex-col space-y-4 text-sm p-4">
                <HoveredLink href="/kütüphane/akaid">Akaid Kütüphanesi</HoveredLink>
                <HoveredLink href="/kütüphane/fıkıh">Fıkıh Kütüphanesi</HoveredLink>
                <HoveredLink href="/kütüphane/siyer">Siyer Kütüphanesi</HoveredLink>
                <HoveredLink href="/kütüphane/tasavvuf">Tasavvuf Kütüphanesi</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Broşürler"></MenuItem>
            <MenuItem setActive={setActive} active={active} item="Hakkımızda">
              <div className="flex flex-col space-y-4 text-sm p-4">
                <HoveredLink href="https://www.diyanet.gov.tr/">Diyanet İşleri Başkanlığı</HoveredLink>
                <HoveredLink href="https://diniyayinlar.diyanet.gov.tr/">Dini Yayınlar Genel Müdürlüğü</HoveredLink>
                <HoveredLink href="https://yayin.diyanet.gov.tr/">Dijital Yayınlar Daire Başkanlığı</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
}
