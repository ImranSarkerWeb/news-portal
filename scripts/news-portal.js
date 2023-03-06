const linkContainer = document.getElementById("link-container")
const cardContainer = document.getElementById("news-container")
const urlCategory = 'https://openapi.programming-hero.com/api/news/categories'

let url = 'https://openapi.programming-hero.com/api/news/category/01'

const displayCategory = (data) => {
    data.news_category.forEach(element => {
     linkContainer.innerHTML += ` <li> <a class="text-decoration-none text-black" href="#">${element.category_name} </a></li>`
    });
     
 }

 const displayNews = data =>{
    console.log(data)
    data.forEach(item =>{
        console.log(item)
        cardContainer.innerHTML += `
        <div class="card my-3" >
        <div class="row g-0">
          <div class="col-md-4">
          <img src="" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
        `
    })
 }

const getData = async (url, display) =>{
    const data = await fetch(url)
    const jsonData = await data.json();
    display(jsonData.data)
}

getData(urlCategory, displayCategory)
getData(url, displayNews)

// const displayCategory = (data) => {
//    data.news_category.forEach(element => {
//     linkContainer.innerHTML += ` <li> <a class="text-decoration-none text-black" href="#">${element.category_name} </a></li>`
//    });
    
// }