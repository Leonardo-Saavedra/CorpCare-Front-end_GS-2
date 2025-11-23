import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { post } from "../services/api"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [mensagem, setMensagem] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro("")
    setMensagem("")

    try {

      const response = await post<{ token?: string; nome?: string }>(
        "/api/login",
        { email, senha }
      )

      console.log("Resposta do login:", response)

      if (response && (response.token || response.nome)) {
        setMensagem("Login realizado com sucesso!")
        localStorage.setItem("usuario", JSON.stringify(response))
        setTimeout(() => navigate("/"), 1500)
      } else {
        setErro("Credenciais inválidas. Verifique e tente novamente.")
      }
    } catch (error) {
      console.error("Erro no login:", error)
      setErro("Erro ao realizar login. Verifique o backend.")
    }
  }

  return (
    <section className="min-h-screen px-6 py-20 flex items-start justify-center bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-700 focus:border-gray-900 rounded-lg px-3 py-2 text-gray-700 dark:bg-gray-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 w-full border border-gray-700 focus:border-gray-900 rounded-lg px-3 py-2 text-gray-700 dark:bg-gray-800"
              required
            />
          </div>

          {erro && <p className="text-red-600 text-center text-sm">{erro}</p>}
          {mensagem && (
            <p className="text-green-600 text-center text-sm">{mensagem}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition"
          >
            Entrar
          </button>

          <div className="text-sm text-center mt-4">
            <button
              type="button"
              onClick={() => navigate("/cadastro")}
              className="text-blue-600 hover:underline"
            >
              Não tem conta? Cadastre-se aqui
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}


