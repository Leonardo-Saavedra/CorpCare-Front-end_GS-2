const apiUrl = import.meta.env.VITE_API_URL

console.log("🌐 API Base URL:", apiUrl)

/**
 * Função GET genérica
 * Exemplo de uso:
 * const colaboradores = await get<Colaborador[]>("/api/colaboradores")
 */
export async function get<T>(endpoint: string): Promise<T> {
  try {
    const res = await fetch(`${apiUrl}${endpoint}`)
    if (!res.ok) {
      throw new Error(`Erro ao buscar dados: ${res.status} ${res.statusText}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Erro no GET:", error)
    throw error
  }
}

/**
 * Função POST genérica
 * Exemplo de uso:
 * await post("/api/colaboradores", { nome: "João", email: "joao@email.com" })
 */
export async function post<T>(endpoint: string, data: any): Promise<T> {
  try {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      throw new Error(`Erro ao enviar dados: ${res.status} ${res.statusText}`)
    }
    return await res.json()
  } catch (error) {
    console.error("Erro no POST:", error)
    throw error
  }
}