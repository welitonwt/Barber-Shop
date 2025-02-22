import dayjs, { Dayjs } from "dayjs";
const form =document.querySelector('form');
const clientName = document.getElementById('client')
const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//Define Data Atual
selectedDate.value = inputToday

// Define Data Minima
selectedDate.min = inputToday


form.onsubmit = (event) => {
  //previne o comportamento padrao de carregar a pagina
  event.preventDefault()
try{
  // recuperando o nome do cliente
  const name = clientName.value.trim()
  if(!name) {
    return alert('Nenhum Nome foi Digitado!!!')
  }
// recupera horario selecionado
  const hourSelected = document.querySelector('.hour-selected')

  if(!hourSelected) {
    return alert('Nenhum Horário foi Selecioado!!!')
  }
// Recupera somente a hora
  const [hour] = hourSelected.innerText.split(":")

//Insere a hora na Data
  const when = dayjs(selectedDate.value).add(hour, 'hour')

//gerar um Id
  const id = new Date().getTime()

  console.log({
    id,
    name,
    when
  })

}catch(error){
  alert("Nao foi possivel realizar o agendamento...", error)
  console.log(error)
}

}