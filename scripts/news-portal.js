const linkContainer = document.getElementById("link-container")
const urlCategory = 'https://openapi.programming-hero.com/api/news/categories'

let url = 'https://openapi.programming-hero.com/api/news/category/01'

const displayCategory = (data) => {
    data.news_category.forEach(element => {
     linkContainer.innerHTML += ` <li> <a class="text-decoration-none text-black" href="#">${element.category_name} </a></li>`
    });
     
 }

const getData = async (url, display) =>{
    const data = await fetch(url)
    const jsonData = await data.json();
    display(jsonData.data)
}

getData(urlCategory, displayCategory)

// const displayCategory = (data) => {
//    data.news_category.forEach(element => {
//     linkContainer.innerHTML += ` <li> <a class="text-decoration-none text-black" href="#">${element.category_name} </a></li>`
//    });
    
// }