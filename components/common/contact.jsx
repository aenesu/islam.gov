import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Socials from "./socials";

export default function ContactSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <p className="cursor-pointer text-zinc-100 hover:opacity-[0.9] dark:text-white">
                    İletişim
                </p>
            </SheetTrigger>

            <SheetContent side="right" style={{ width: "800px", maxWidth: "800px" }} className="flex flex-col">
                <SheetHeader className="my-6">
                    <SheetTitle className="text-2xl">Bizimle İletişime Geçin</SheetTitle>
                    <SheetDescription className="font-semibold text-lg">Diyanet İşleri Başkanlığı</SheetDescription>
                    <SheetDescription className="font-semibold text-base">Dijital Yayınlar Daire Başkanlığı</SheetDescription>
                    <SheetDescription>Üniversiteler Mah. Dumlupınar Bulvarı No:147/A 06800 Çankaya/Ankara</SheetDescription>
                    <SheetDescription><a href="mailto:dijitalyayinlar@diyanet.gov.tr">dijitalyayinlar@diyanet.gov.tr</a></SheetDescription>
                    <SheetDescription><a href="tel:+903122959901">0312 295 99 01</a></SheetDescription>
                </SheetHeader>

                <div className="w-full h-full flex flex-1">
                    <div className="w-full h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.124974822661!2d32.75975039885301!3d39.90521141273604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33867b1779195%3A0x7f6caf1988f5b65b!2zRGl5YW5ldCDEsMWfbGVyaSBCYcWfa2FubMSxxJ_EsQ!5e0!3m2!1sen!2str!4v1735485245803!5m2!1sen!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                            ></iframe>
                    </div>
                </div>

                <SheetFooter className="mt-auto">
                    <div className="flex flex-col gap-2 items-end pr-8 py-4">
                        <span>Bizi Sosyal Medyada Takip Edin</span>
                        <Socials />
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
