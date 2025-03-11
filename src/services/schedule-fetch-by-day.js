import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ date }){
  try {
    // fazendo a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    // converte para json
    const data = await response.json()

    // filtra os agendamentos do dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.wen, "day"))

    return dailySchedules
    
  } catch(error) {
    console.error(error)
    alert("Nao foi possivel listar os agendamentos")
  }
}