const apiUrl = import.meta.env.VITE_API_URL

console.log("🌐 API Base URL:", apiUrl)

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