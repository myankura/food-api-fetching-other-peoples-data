// console.log("hello");

//use queryselector to grab foodList class and assign to variable

// fetch("http://localhost:8088/foods")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })



const foodFactory = (foodData) => {
    return `
    <article class="foodList">
    <div class="foodItem">
    <h1>${foodData.name}</h1>
    <section>${foodData.ethnicity}</section>
    <aside>${foodData.category}</aside>
    <div>
    </article>
    `
}

const addFoodToDom = (foodStr) => {
    let foodListEl = document.querySelector(".foodList");
    foodListEl.innerHTML += foodStr;
}

fetch("http://localhost:8088/foods")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(food => {
        const foodAsHTML = foodFactory(food)
        addFoodToDom(foodAsHTML)
    })
})