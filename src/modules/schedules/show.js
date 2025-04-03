import dayjs from "dayjs";

const periodMorning = document.getElementById('period-morning');
const periodAfternoon = document.getElementById('period-afternoon');
const periodNight = document.getElementById('period-night');

export function scheduleShow({ dailySchedules }) {
try {
// limpa a lista
  periodMorning.innerHTML = ''
  periodAfternoon.innerHTML = ''
  periodNight.innerHTML = ''

// render schedules for time
  dailySchedules.forEach((schedule) => {
    const item = document.createElement('li');
    const time = document.createElement('strong');
    const name = document.createElement('span');
    
// Adiciona o id do agendamento
    item.setAttribute('data-id', schedule.id)

    time.textContent = dayjs(schedule.when).format('HH:mm');
    name.textContent = schedule.name

// Cria icone de cancelar o agendamento
    const cancelIcon = document.createElement('img')
    cancelIcon.classList.add('cancel-icon')
    cancelIcon.setAttribute('src', './src/assets/cancel.svg')
    cancelIcon.setAttribute('alt', 'cancel')

// adiciona o tempo, nome e icone no item
    item.append(time, name, cancelIcon)
  
//obtem somente a hora
    const hour = dayjs(schedule.when).hour()

// render o agendamento na sessão (manhã, tarde ou noite)
    if(hour <= 12){
      periodMorning.appendChild(item)
    }else if (hour > 12) {
      periodAfternoon.appendChild(item)
    }else {
      periodNight.appendChild(item)
    }
  });

} catch (error) {
  console.log(error)
  alert('Nao foi possivel exibir os agendamentos')
}
}