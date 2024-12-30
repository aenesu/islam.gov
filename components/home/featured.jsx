import Image from "next/image";

export default function Featured() {
  return (
    <div>
      <div className=" absolute w-full z-0 mx-auto bg-gradient-to-br from-blue-800 to-sky-400 h-[800px]"></div>
      <section className=" relative w-full z-10 h-[500px] text-zinc-100 py-12 mb-12">
        <div className="w-full z-10 flex md:flex-row justify-center">
          {/* Book Image */}
          <div className="p-4 min-w-[300px] flex justify-center">
            <Image
              src="/assets/images/book-covers/kullugun-ozu-dua.png"
              width={300}
              height={100}
              alt="Featured Book"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Text Content */}
          <div className="p-4 max-w-[600px] text-center md:text-left">
            <h2 className="text-2xl font-bold">Kulluğun Özü DUA</h2>
            <h3 className="text-lg text-opacity-70 text-zinc-300"><i>Dr. Bahattin AKBAŞ</i></h3>
            <p className="text-base text-zinc-300 mt-4">
              Dua; sınırlı, sonlu ve âciz olan insanın bütün benliğiyle sınırsız, sonsuz ve kudret sahibi olan Yüce Allah’a yönelip O’na dileklerini iletmesidir. Dua, kulun Rabbi ile kurduğu bir diyalogdur. Dua eden insan bütün zayıflığı ve âcizliği ile isteklerini ancak Rabbinin yardımıyla elde edebileceğinin farkındadır. Dua Yaratan’a iman, O’na güven ve teslimiyettir; insanı içten ve dıştan kuşatan tehlikelere, gaflete, aldanmaya ve zararlı unsurlara karşı en iyi korunaktır.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
