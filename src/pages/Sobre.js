import Menu from "@/Componentes/menu/Menu"
import Autor from "@/Componentes/Autor"

function Sobre() {
  return (
    <main>

      <Menu/>
    <h1>Sobre Projeto Next</h1>

     <Autor nome ={'Vitória'} cursos={{ preco:1597 , curso:'React' , ch:'96 horas'}}/>
    </main>
  )
}
export default Sobre