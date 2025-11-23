import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../services/api";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setMensagem("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem!");
      return;
    }

    try {
      await post("/api/colaboradores", {
        nome,
        email,
        senha,
      });

      setMensagem("Usuário cadastrado com sucesso!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error: any) {
      setErro("Erro ao cadastrar. Verifique o backend.");
      console.error("Erro no cadastro:", error);
    }
  };

  return (
    <section className="min-h-screen px-6 py-20 flex items-start justify-center bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-blue-700 text-center py-2 mb-6">Criar Conta</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-1 w-full border border-gray-700 focus:border-gray-900 rounded-lg px-3 py-2 text-gray-700 dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-700 focus:border-gray-900 rounded-lg px-3 py-2 text-gray-700 dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 w-full border border-gray-700 focus:border-gray-900 rounded-lg px-3 py-2 text-gray-700 dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">Confirmar Senha</label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="mt-1 w-full border border-gray-700 focus:border-gray-900 rounded-lg px-3 py-2 text-gray-700 dark:bg-gray-800"
              required
            />
          </div>

          {erro && <p className="text-red-600 text-center text-sm">{erro}</p>}
          {mensagem && <p className="text-green-600 text-center text-sm">{mensagem}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </section>
  );
}