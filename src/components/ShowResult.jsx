import { useContexto } from '../context/MealsContext'
import '../styles/ShowResult.scss'
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function ShowResult(props) {

  /* exporto el contexto */
  const {tmb} = useContexto()

  /* creo una constante para manejar el props y mostrar el resultado en pantalla */
  const mostrarResultado = props.mostrarResultado

  return (

    /* defino como se va amostrar el resulatdo por pantalla */
    <div className='contenedor' >
      <div className='contenedor__resultado' >
        <Card className='center p-3 p-left' >
          {mostrarResultado !== undefined ? <h4 className=' mt-3 contenedor__resultado--h4' >Para cumplir su objetivo necesita {tmb} kcal/día.</h4>  : ''}
          {mostrarResultado !== undefined ? <h6 className=' mt-3 contenedor__resultado--h4' >Si quiere ver un menú diario con esas calorías haga <NavLink className='blackLink' to="/recetas">click aquí</NavLink> o en la sección Recetas del menú superior</h6>  : ''}
        </Card>
      </div>
    </div>
    
  )
}

export default ShowResult