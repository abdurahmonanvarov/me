"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form ma'lumotlari:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    toast.success("Ma'lumot muvaffaqiyatli yuborildi :)");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Bog‘lanish</h1>
      <p className="text-lg text-center mb-8 max-w-xl text-zinc-400">
        Har qanday savol yoki taklif uchun men bilan bog‘laning. Formani
        to‘ldiring — sizga tez orada javob beraman.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Ismingiz</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Ismingiz"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Email manzilingiz"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Xabar</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Xabaringiz..."
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black font-bold py-3 px-4 rounded-xl hover:bg-zinc-300 transition"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default Page;
