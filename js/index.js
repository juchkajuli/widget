var products = [
  {productId:1, productName: 'Товар 1', categoryId:1},
  {productId:2, productName: 'Товар 2', categoryId:2},
  {productId:3, productName: 'Товар 3', categoryId:3},
  {productId:4, productName: 'Товар 4', categoryId:4},
  {productId:5, productName: 'Товар 5', categoryId:5},
  {productId:6, productName: 'Товар 6', categoryId:1},
  {productId:7, productName: 'Товар 7', categoryId:2},
  {productId:8, productName: 'Товар 8', categoryId:3},
  {productId:9, productName: 'Товар 9', categoryId:4},
  {productId:10, productName: 'Товар 10', categoryId:5},
  {productId:11, productName: 'Товар 11', categoryId:1},
  {productId:12, productName: 'Товар 12', categoryId:2},
  {productId:13, productName: 'Товар 13', categoryId:3},
  {productId:14, productName: 'Товар 14', categoryId:4},
  {productId:15, productName: 'Товар 15', categoryId:5},
  {productId:16, productName: 'Товар 16', categoryId:1},
  {productId:17, productName: 'Товар 17', categoryId:2},
  {productId:18, productName: 'Товар 18', categoryId:3},
  {productId:19, productName: 'Товар 19', categoryId:4},
  {productId:20, productName: 'Товар 20', categoryId:5},
  {productId:21, productName: 'Товар 21', categoryId:1},
  {productId:22, productName: 'Товар 22', categoryId:2},
  {productId:23, productName: 'Товар 23', categoryId:3},
  {productId:24, productName: 'Товар 24', categoryId:4},
  {productId:25, productName: 'Товар 25', categoryId:5}
];

var categories = [
  {categoryId:1, categoryName: 'Футболки'},
  {categoryId:2, categoryName: 'Майки'},
  {categoryId:3, categoryName: 'Носки'},
  {categoryId:4, categoryName: 'Джинсы'},
  {categoryId:5, categoryName: 'Брюки'},
];

const tabs = document.querySelector('.tabs')
const imgSrc = "http://rrstatic.retailrocket.net/test_task/tovar.jpg"

categories.forEach(category => {
  const tabsLabel =  `
    <input id="tab${category.categoryId}" 
      type="radio" 
      name="tabs"
      class="tab"
    /> 
    <label for="tab${category.categoryId}"
      title="Вкладка ${category.categoryId}">
      ${category.categoryName}
    </label>
  `
  tabs.insertAdjacentHTML('beforeend', tabsLabel)

  let sectionProduct = document.createElement('div')
  sectionProduct.setAttribute('id', 'content-tab' + category.categoryId)
  sectionProduct.className = "section"
  document.body.firstElementChild.append(sectionProduct)

  products.forEach(product => {
    if (category.categoryId == product.categoryId) {
      sectionProduct.innerHTML += `
          <p class="product-info">
            ${product.productName}
            <img src=${imgSrc} class="product-image" />
          </p>
       `
    }
  })
})

function addActiveClass() {
  const tabLabel = document.getElementById("tab1")
  const tabContent = document.getElementById("content-tab1")
  tabContent.className = "active" + " " + "section" 
  tabLabel.className = "active" + " " +"tab"
}


let tab = document.querySelectorAll('.tab')
let tabClicked = tab[0]

let section = document.querySelectorAll('.section')
let sectionClick = section[0]

for (let i = 0; i < tab.length; i++ ){
  tab[i].addEventListener('click', function() {
    tabClicked.classList.remove('active')
    tabClicked = tab[i]
    tabClicked.classList.add('active')

    for (let j = 0; j < section.length; j++) {
      if (i == j) {
        sectionClick.classList.remove('active')
        sectionClick = section[j]
        sectionClick.classList.add('active')
      }
    }
  });
}

addActiveClass()
