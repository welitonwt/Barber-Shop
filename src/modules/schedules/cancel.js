import { schedulesDay } from "./load.js" 
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((period => {

  //captura o evento de click na lista
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel-icon")) {

      //obtem a LI pai do elemento clicado
      const item = event.target.closest('li')
      //obtem o Id do agendamento para remover
      const { id } = item.dataset

      //confirma se o usuario quer cancelar
      if( id ) {
        //Confirma se o usuario quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar esse evento?"
        )

        if(isConfirm) {
          console.log("REMOVIDO COM SUCESSO")
          // Faz a requisição na API para cancelar
          await scheduleCancel({ id })

          // Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  })

}))
