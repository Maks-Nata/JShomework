//         #whXxOBlYS0H
//         - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
const wrapper = document.getElementsByClassName('recipesBook')[0]
fetch('https://dummyjson.com/recipes?limit=50')
    .then(value => value.json())
    .then(recipe => {
        const {recipes} = recipe;
        for (const recipe1 of recipes) {
            const divRecipe = document.createElement('div');
            wrapper.appendChild(divRecipe);
            for (const recipeKey in recipe1) {

                if (Array.isArray(recipe1[recipeKey])) {
                    const titleDiv = document.createElement('div');
                    const h2 = document.createElement('h2');
                    divRecipe.appendChild(titleDiv);
                    titleDiv.appendChild(h2);
                    h2.innerText = `${recipeKey}:`

                    const olrecipe = document.createElement('ol');
                    const array = recipe1[recipeKey]
                    for (const item of array) {
                        const lirecipe = document.createElement('li');
                        lirecipe.innerText = item;
                        divRecipe.appendChild(olrecipe);
                        olrecipe.appendChild(lirecipe);
                    }

                } else {
                    if (recipeKey !== 'image'){const recipe1Key = document.createElement('div');
                        recipe1Key.innerText = `${recipeKey}:${recipe1[recipeKey]}`
                        divRecipe.appendChild(recipe1Key)}
                }
            }
            const img = document.createElement('img');
            img.src = recipe1.image;
            divRecipe.appendChild(img)
        }
    })