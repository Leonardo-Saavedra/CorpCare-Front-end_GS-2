import React from "react";

type Member = {
  name: string;
  rm: string;
  turma: string;
  photo: string;
  linkedin: string;
  github: string;
};

const MEMBERS: Member[] = [
  {
    name: "Felipe Ribeiro Salles de Camargo",
    rm: "565224",
    turma: "1TDSPY",
    photo: "src/assets/Felipe.png",
    linkedin: "https://www.linkedin.com/in/felipe-ribeiro-2ba819303/",
    github: "https://github.com/FelipeRibeiroSalles",
  },
  {
    name: "João Victor Santana dos Santos",
    rm: "566063",
    turma: "1TDSPY",
    photo: "src/assets/Joao.png",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-victor-santana-2539a6365/",
    github: "https://github.com/Jsantanadsx",
  },
  {
    name: "Leonardo Saavedra de Souza Campos",
    rm: "562229",
    turma: "1TDSA",
    photo: "src/assets/Leonardo.png",
    linkedin: "https://www.linkedin.com/in/leonardo-saavedra-de-souza-campos-a67179356",
    github: "https://github.com/Leonardo-Saavedra",
  },
];

export default function Integrantes() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white px-6 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-700">Integrantes</h1>
        <p className="text-gray-600 dark:text-white mb-6">
          Identificação completa dos integrantes: nome, RM, turma e links de perfil.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBERS.map((m) => (
            <div
              key={m.rm}
              className="border rounded-lg p-6 shadow-sm bg-white dark:bg-gray-900 hover:shadow-md transition flex flex-col items-center text-center min-h-[300px]"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow"
              />
              <h3 className="font-semibold text-base md:text-lg leading-tight px-2">{m.name}</h3>
              <p className="text-sm text-gray-600 mt-2">
                RM: <span className="font-medium">{m.rm}</span>
              </p>
              <p className="text-sm text-gray-600">
                Turma: <span className="font-medium">{m.turma}</span>
              </p>

              <div className="mt-auto w-full flex flex-col gap-2 sm:flex-row sm:justify-center">
                <a
                  href={m.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${m.name}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 transition text-sm"
                >
                  GitHub
                </a>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${m.name}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 transition text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}