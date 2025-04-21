export default function page() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Mening Skilslari</h1>
      <ul className="space-y-4">
        <li className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">JavaScript</h2>
          <p>Frontend va backend dasturlashda keng qo'llayman.</p>
        </li>
        <li className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">React / Next.js</h2>
          <p>SPA va SSR ilovalar yaratishda tajribam bor.</p>
        </li>
        <li className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Tailwind CSS</h2>
          <p>Tez va responsiv UI yaratishda ishlataman.</p>
        </li>
        <li className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Node.js</h2>
          <p>Backend va API yaratishda foydalanaman.</p>
        </li>
      </ul>
    </main>
  );
}
