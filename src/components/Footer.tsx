import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-8 mt-10">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h3 className="text-lg font-semibold mb-3">CorpCare</h3>
        <p className="text-sm text-blue-100 mb-2">Soluções para bem‑estar e saúde mental no trabalho</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-3">
          <a href="mailto:contact@corpcare.io" className="text-sm hover:underline">contact@corpcare.io</a>
        </div>

        <p className="mt-4 text-sm text-blue-100">
          © {new Date().getFullYear()} CorpCare — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}