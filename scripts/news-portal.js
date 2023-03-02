const linkContainer = document.getElementById("link-container")
const urlCategory = 'https://openapi.programming-hero.com/api/news/categories'


const getData = async (url) =>{
    const data = await fetch(url)
    const jsonData = await data.json();
    displayCategory(jsonData.data)
}

getData(urlCategory)

const displayCategory = (data) => {
   data.news_category.forEach(element => {
    linkContainer.innerHTML += ` <li>${element.category_name}</li>`
   });
    
}