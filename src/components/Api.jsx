/* importo todo lo necesario */
import React, { useState, useEffect } from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import axios from 'axios'
import { useContexto } from '../context/MealsContext'

export default function Api() {

    /* creo los useState para setear las variables peso, estatura y edad */
    const [ meals, setMeals ] = useState([])
    const [ nutrients , setNutrients ] = useState({})
    const [ fecha, setFecha ] = useState()

    /* exporto el contexto para utilizar la variable TMB */
    const { tmb } = useContexto()

    /* utilizo el useEffcet para hacer la llamada a la API */
    useEffect( () => {
        if(tmb) {
            axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=45f3f23dd164438abb1babccb1e531ac&timeFrame=day&targetCalories=${tmb}`)
                .then( res => {
                    setMeals(res.data.meals)
                    setNutrients(res.data.nutrients)
                    console.log(res);
                } )
                .catch(err => {
                })
        }
    }, [tmb, fecha])

    /* creo una funcion para refrescar la pagina de recetas y mostrar nuevas recetas */
    const handleRefresh = () => {
        const newFecha = Date.now()
        setFecha(newFecha)
    }

  return (
    /* aqui le doy forma a las tarjetas para mostrar las recetas */
    <>
        <div className='container'>
        <Button variant='warning' size='sm' className='m-3 mt-4' onClick={handleRefresh} >Nueva búsqueda</Button>
        </div>
        <CardGroup className='mt-2 rounded' >
            {meals?.map( (meal) => (
                <Card className='p-2' key={meal.id} >
                    <Card.Img variant='bottom' src={`https://webknox.com/recipeImages/${meal.id}-556x370.jpg`}></Card.Img>
                    <Card.Title>{meal.title}</Card.Title>
                    <Card.Body>Ready in {meal.readyInMinutes} minutes</Card.Body>
                    <Card.Link className='mealsLink' target='_blank' rel='noreferrer' href={meal.sourceUrl} >Link to the Recipe</Card.Link>
                </Card> 
                ) )}
        </CardGroup>
        <CardGroup className='mt-2 mb-4 justify-content text-center rounded' >
            { Object.keys(nutrients).length !== 0 &&
                <Card className='p-2' >
                    <Card.Title>Calories: {Math.round(nutrients.calories)}</Card.Title>
                    <Card.Title>Carbohydrates: {Math.round(nutrients.carbohydrates)}</Card.Title>
                    <Card.Title>Fats: {Math.round(nutrients.fat)}</Card.Title>
                    <Card.Title>Proteins: {Math.round(nutrients.protein)}</Card.Title>
                </Card>
                }
        </CardGroup>
    </>
  )
}