import React from "react";

export default function Faq() {
  const faqs = [
    { q: "O que é o CorpCare?", a: "Uma plataforma de apoio emocional e análise de clima para ambientes de trabalho." },
    { q: "Como meus dados são usados?", a: "As respostas são agregadas e anonimizadas; a privacidade é prioridade." },
    { q: "Como minha empresa integra o sistema?", a: "A integração é via API REST pública (forneça a URL da API no ambiente de produção)." },
    { q: "Preciso instalar algo nos computadores?", a: "Não — o CorpCare é acessado via navegador; integrações são feitas no backend." },
    { q: "O serviço é confidencial?", a: "Sim — os dados pessoais não são expostos nos dashboards; apenas indicadores agregados são mostrados." },
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-200 dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center">Perguntas Frequentes (FAQ)</h1>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">{f.q}</h3>
              <p className="text-gray-700 dark:text-gray-300">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}