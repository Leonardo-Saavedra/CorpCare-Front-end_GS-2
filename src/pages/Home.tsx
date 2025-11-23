import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../services/api";

type Colaborador = {
  id: number;
  nome: string;
  email: string;
};

export default function Home() {
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [erro, setErro] = useState<string>("");

  useEffect(() => {
    get<Colaborador[]>("/api/colaboradores")
      .then(setColaboradores)
      .catch((e) => setErro(e.message));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 py-0 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="bg-blue-700 text-white text-center pt-14 md:pt-16 pb-16 relative md:static md:mt-0 -mt-14 z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          CorpCare — bem‑estar e saúde mental no trabalho
        </h1>
        <p className="max-w-xl mx-auto text-lg text-blue-100 mb-6">
          Plataforma que combina IA emocional e análise de clima para apoiar
          colaboradores e equipes antes que o problema se agrave.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/sobre" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition">
            Saiba mais
          </Link>
          <Link to="/integrantes" className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
            Equipe
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-200 text-center dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-blue-700 mb-4">Como funciona</h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          Check-ins rápidos e confidenciais. Nossa IA analisa sentimentos e gera
          indicadores para RH, propondo ações preventivas e melhorias no clima.
        </p>
      </section>

      <section className="py-16 px-6 text-center bg-gray-200 dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-blue-700 mb-8">Por que escolher o CorpCare?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Prevenção</h3>
            <p className="text-gray-600 dark:text-gray-300">Detecta sinais de risco cedo e sugere intervenções.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Privacidade</h3>
            <p className="text-gray-600 dark:text-gray-300">Dados agregados e anonimizados — a privacidade é prioridade.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Acessível</h3>
            <p className="text-gray-600 dark:text-gray-300">Interface leve, dashboards para gestores e integração com APIs corporativas.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-200 text-center dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-blue-700 mb-6">Colaboradores (exemplo de dados da API)</h2>

        {erro && <p className="text-red-600 mb-4">{erro}</p>}

        {colaboradores.length > 0 ? (
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {colaboradores.map((c) => (
                <li key={c.id} className="py-2 text-gray-700 dark:text-gray-300">
                  <strong>{c.nome}</strong> — {c.email}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          !erro && <p className="text-gray-500 dark:text-gray-400">Nenhum colaborador encontrado (verifique sua API).</p>
        )}
      </section>

      <section className="py-16 px-6 text-center bg-gray-200 dark:bg-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-blue-700 mb-4">Precisa de ajuda?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Fale com nossa equipe — estamos aqui para apoiar a saúde do time.</p>
        <Link to="/contato" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Contato
        </Link>
      </section>
    </div>
  );
}
