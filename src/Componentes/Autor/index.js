const Autor = ({nome ,cursos})=>{
 return(
    <>
    <p>Nome do Autor:{nome} </p>
    <p>Curso:{cursos.curso} </p>
    <p>Preço:{cursos.preco} </p>
    <p>Carga horária:{cursos.ch} </p>
     
    </>
 )
}
 export default Autor