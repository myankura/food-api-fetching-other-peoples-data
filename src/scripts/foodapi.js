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
    <section>Ethnicity: ${foodData.ethnicity}</section>
    <aside>Category: ${foodData.category}</aside>
    <aside>Barcode: ${foodData.barcode}</aside>
    <aside>Barcode: ${productInfo}</aside>
    <div>
    </article>
    `
}

const addFoodToDom = (foodStr) => {
    let foodListEl = document.querySelector(".foodList");
    foodListEl.innerHTML += foodStr;
}
// //Get all data from API
// fetch("http://localhost:8088/foods")
// //convert data from JSON to JS
// .then(foods => foods.json())

// //build HTML from data
// .then(parsedFoods => {
//     parsedFoods.forEach(food => {
//         const foodAsHTML = foodFactory(food)
//         addFoodToDom(foodAsHTML)
//     })
// })

fetch("http://localhost:8088/foods")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(foods => {
            console.log(foods) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${foods.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    foods.ingredients = productInfo.product.ingredients

                    // Produce HTML representation
                    const foodAsHTML = foodFactory(food)

                    // Add representaiton to DOM
                    addFoodToDom(foodAsHTML)
                })
        })
    })