import {
    Menubar,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { FaFacebook, FaInstagram, FaYoutube, FaMousePointer } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
    return (
        <Menubar className="w-[615px] py-[20px] flex justify-center items-center">
            {/* Web Sitesi */}
            <MenubarMenu>
                <MenubarTrigger
                    className="flex items-center space-x-2 transition duration-300 hover:bg-neutral-200 rounded px-2 py-1 cursor-pointer"
                    asChild
                >
                    <a
                        href="https://diyanet.gov.tr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 group"
                    >
                        <FaMousePointer className="text-neutral-900 group-hover:text-green-600" />
                        <span className="text-neutral-900 group-hover:text-green-600">Diyanet İşleri Başkanlığı</span>
                    </a>
                </MenubarTrigger>
            </MenubarMenu>

            <MenubarSeparator />

            {/* Facebook */}
            <MenubarMenu>
                <MenubarTrigger
                    className="flex items-center space-x-2 transition duration-300 hover:bg-neutral-200 rounded px-2 py-1 cursor-pointer"
                    asChild
                >
                    <a
                        href="https://facebook.com/diyanetdijital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 group"
                    >
                        <FaFacebook className="text-neutral-900 group-hover:text-[#1877F2]" />
                        <span className="text-neutral-900 group-hover:text-[#1877F2]">Facebook</span>
                    </a>
                </MenubarTrigger>
            </MenubarMenu>

            {/* Instagram */}
            <MenubarMenu>
                <MenubarTrigger
                    className="flex items-center space-x-2 transition duration-300 hover:bg-neutral-200 rounded px-2 py-1 cursor-pointer"
                    asChild
                >
                    <a
                        href="https://instagram.com/diyanetdijital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 group"
                    >
                        <FaInstagram className="text-neutral-900 group-hover:text-[#E4405F]" />
                        <span className="text-neutral-900 group-hover:text-[#E4405F]">Instagram</span>
                    </a>
                </MenubarTrigger>
            </MenubarMenu>

            <MenubarSeparator />

            {/* YouTube */}
            <MenubarMenu>
                <MenubarTrigger
                    className="flex items-center space-x-2 transition duration-300 hover:bg-neutral-200 rounded px-2 py-1 cursor-pointer"
                    asChild
                >
                    <a
                        href="https://youtube.com/@DiyanetDijital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 group"
                    >
                        <FaYoutube className="text-neutral-900 group-hover:text-[#FF0000]" />
                        <span className="text-neutral-900 group-hover:text-[#FF0000]">YouTube</span>
                    </a>
                </MenubarTrigger>
            </MenubarMenu>

            <MenubarSeparator />

            {/* Twitter (X) */}
            <MenubarMenu>
                <MenubarTrigger
                    className="flex items-center space-x-2 transition duration-300 hover:bg-neutral-200 rounded px-2 py-1 cursor-pointer"
                    asChild
                >
                    <a
                        href="https://x.com/diyanetdijital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 group"
                    >
                        <FaXTwitter className="text-neutral-900 group-hover:text-slate-800" />
                        <span className="text-neutral-900 group-hover:text-slate-800">X</span>
                    </a>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    );
}
