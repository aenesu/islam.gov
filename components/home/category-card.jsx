import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryCard({ name, description, icon, link }) {
    return (
        <div className="relative w-[280px] h-[350px] rounded-lg group">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-lg opacity-0 scale-95 transition-all duration-1000 will-change-transform group-hover:opacity-100 group-hover:scale-105"></div>

            <Link
                href={link}
                className="relative z-10 flex flex-col gap-6 p-6 transition-transform duration-500 transform group-hover:scale-105"
            >
                <div
                    className="h-[160px] w-[160px] rounded-full flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-800 shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                    style={{ boxShadow: 'inset 1px 1px 10px rgba(0, 0, 0, 1)' }}
                >
                    <Image
                        className="fill-zinc100"
                        src={icon}
                        width={100}
                        height={100}
                        alt={`${name}-icon`}
                    />
                </div>

                <h1 className="text-2xl font-bold text-zinc-100"> {name} </h1>
                <p className="text-lg text-zinc-100"> {description} </p>
            </Link>
        </div>
    );
}
