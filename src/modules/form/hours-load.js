import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")
export function hoursLoad({date}){
 const opening = openingHours.map((hour) => {
  // recupera somente a hora
  const [scheduleHour] = hour.split(':')
  
  // adiciona a hora na data e verifica se esta no passado
  const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
  
  // define se o horario esta disponivel
  return {
    hour, 
    available: isHourPast
  }
 })

 opening.forEach(({hour, available}) => {
  const li = document.createElement("li")

  li.classList.add("hour")
  li.classList.add(available ? "hour-available":"hour-unavailable")
  li.textContent = hour
  hours.append(li)
 })
}