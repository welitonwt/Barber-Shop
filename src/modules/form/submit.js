import dayjs from "dayjs";
const form =document.querySelector('form');

const selectedDate = document.getElementById('date')

const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

//Define Data Atual
selectedDate.value = inputToday

// Define Data Minima
selectedDate.min = inputToday


form.onsubmit = (event) => {
  //previne o comportamento padrao de carregar a pagina
  event.preventDefault()

  console.log("ENVIADO")
}