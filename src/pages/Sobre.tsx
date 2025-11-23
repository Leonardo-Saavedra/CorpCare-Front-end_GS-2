import React from "react";

export default function Sobre() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start px-6 py-20 bg-gray-200 dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-700">
          Sobre o CorpCare
        </h1>
        <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
          O CorpCare é uma plataforma para promover bem‑estar e saúde mental no ambiente corporativo.
          Unimos IA emocional e análise de clima organizacional para detectar riscos, oferecer recomendações e apoiar colaboradores e equipes.
        </p>
      </div>

      <div className="max-w-5xl space-y-10 text-gray-700 dark:text-white">
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Objetivo</h2>
          <p className="leading-relaxed">
            Prevenir burnout e facilitar decisões de RH com indicadores éticos e agregados — sem expor dados pessoais.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Público‑alvo</h2>
          <p className="leading-relaxed">
            Empresas que desejam monitorar clima e apoiar a saúde mental dos colaboradores de forma confidencial e proativa.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Benefícios</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Detecção precoce de sinais de risco.</li>
            <li>Relatórios e dashboards para tomadas de decisão humanizadas.</li>
            <li>Integração com APIs corporativas e práticas de privacidade.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Tecnologias</h2>
          <p className="leading-relaxed">
            Frontend: React + Vite + TypeScript + TailwindCSS. Backend: API REST em Java (Quarkus) e serviços de IA em Python.
          </p>
        </div>
      </div>
    </section>
  );
}
