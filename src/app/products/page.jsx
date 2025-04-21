"use client";

import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* About Me Section */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/me.jpg"
            alt="Men"
            width={200}
            height={120}
            className="border-2 border-white" // Borda qo'shish
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">Salom, men Abduraxmon</h1>
            <p className="text-zinc-300 text-lg">
              Men front-end dasturchiman. React, TypeScript, Tailwind CSS orqali
              zamonaviy, tezkor va responsiv web ilovalar ishlab chiqaman.
              Mening maqsadim — har bir foydalanuvchi uchun qulay va jozibador
              interfeys yaratish.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b border-white pb-2 w-fit">
            Ko'nikmalarim
          </h2>
          <ul className="list-disc list-inside text-zinc-300 space-y-2">
            <li>React, Next.js, TypeScript</li>
            <li>Tailwind CSS, Shadcn UI, Framer Motion</li>
            <li>Redux Toolkit, API bilan ishlash (Axios, Fetch)</li>
            <li>Responsiv dizayn va UX/UI asoslari</li>
          </ul>
        </section>

        {/* Interests */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b border-white pb-2 w-fit">
            Qiziqishlarim
          </h2>
          <p className="text-zinc-300">
            Texnologiyalar, ochiq manbali loyihalarda qatnashish, dizayn bilan
            shug‘ullanish, hamda foydalanuvchi tajribasini yanada mukammal
            qilish.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b border-white pb-2 w-fit">
            Bog‘lanish
          </h2>
          <p className="text-zinc-300">
            Email:{" "}
            <a href="mailto:youremail@example.com" className="underline">
              youremail@example.com
            </a>
            <br />
            Telegram:{" "}
            <a href="https://t.me/yourusername" className="underline">
              @yourusername
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
