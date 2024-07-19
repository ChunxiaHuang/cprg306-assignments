"use client"

import { useEffect, useState } from "react";

export default function MealIdeas({ingredient}){

    const [meals, setMeals] = useState([]);

    // const loadMealIdeas = async () => {
    //     if (ingredient){
    //         const data = await fetchMealIdeas(ingredient);
    //         console.log(data.meals);
    //         setMeals(data.meals);
    //     }
    // }

    async function fetchMealIdeas(ingredient){
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if(!response.ok){
                console.log(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            // return data;
            if (data.meals) {
                setMeals(data.meals);
            } else {
                setMeals([]);
            }
            
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( ()=> {
        // loadMealIdeas();
        fetchMealIdeas(ingredient);
    }, [ingredient]);


    return(
        <div className="text-teal-100">
            <h1 className="text-2xl font-bold">Meal Ideas</h1>
            {ingredient == ''?(<p>Select an item to see meal ideas</p>) : (
                meals.length > 0? (<ul>
                {meals.map( (meal)=> (
                    <li>{meal.strMeal}</li>
                ))}
            </ul>) : (<p>No meal ideas for {ingredient}</p>)
            )}
        </div>
    );
}

