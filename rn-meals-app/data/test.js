const meals = [
    {
        id: 1,
        isGlutenFree: true
    },
    {
        id: 2,
        isGlutenFree: false
    },
    {
        id: 3,
        isGlutenFree: true
    }
]

const appliedFilter = {
    glutenFree: true
}

const filteredMeals = meals.filter((meal) => {
    if (appliedFilter.glutenFree && !meal.isGlutenFree) {
        return false
    }
    return true
})

console.log(filteredMeals)