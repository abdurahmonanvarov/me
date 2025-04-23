"use client";

import Image from "next/image";
import Link from "next/link";
import Modal from "@/component/Modal";
import { useEffect, useState } from "react";

export default function Page() {
  const [openModal, setIsOpenmModal] = useState(false);

  useEffect(() => {
    const modalData = JSON.parse(localStorage.getItem("modalShown") || "null");

    if (!modalData || Date.now() - modalData.timestamp > 24 * 60 * 60 * 1000) {
      const timer = setTimeout(() => {
        setIsOpenmModal(true);
        localStorage.setItem(
          "modalShown",
          JSON.stringify({ shown: true, timestamp: Date.now() })
        );
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="bg-zinc-900 w-full max-w-xl p-8 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <Image
            src="/me.jpg"
            alt="Men"
            width={200}
            height={120}
            className="border-2 border-white" // Borda qo'shish
          />

          {/* Title */}
          <h1 className="text-3xl font-bold">Salom, men Abduraxmon</h1>

          {/* About */}
          <p className="text-zinc-400">
            Front-end developer, React & TypeScript asosida zamonaviy
            web-ilovalar yarataman.
          </p>

          {/* Button */}
          <Link href="/products">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-xl hover:bg-yellow-300 transition">
              Men haqimda ko'proq malumotlar
            </button>
          </Link>
        </div>
      </div>

      {/* Modal */}
      {openModal && <Modal setIsOpenmModal={setIsOpenmModal} />}
    </>
  );
}
