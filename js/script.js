const list = document.querySelector(".row");
const men = document.querySelector(".men");
const women = document.querySelector(".women");
const jewelery = document.querySelector(".jewelery");
const electronic = document.querySelector(".electronic");
const all = document.querySelector(".all");

const fetchData = async (product) => {
    const comingData = await fetch('https://fakestoreapi.com/products')
    const convertData = await comingData.json();
    let li = "";

    if (!product) {
        convertData.map(item => {
            li += `<div class="col-12 col-sm-6 col-md-4">
            <div class="card">
      <img height="250" style="object-fit: contain;" src="${item.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.title.substring(0, 23)}...</h5>
        <p class="card-text">${item.description.substring(0, 35)}... <a href="#">Read More</a></p>
        <a href="#" class="btn btn-dark">Buy Now</a>
      </div>
    </div>
    </div>`
        })
    }

    convertData.filter(p => {
        return p.category === product;
    }).map(item => {
        li += `<div class="col-12 col-sm-6 col-md-4">
        <div class="card">
  <img height="250" style="object-fit: contain;" src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title.substring(0, 23)}...</h5>
    <p class="card-text">${item.description.substring(0, 35)}... <a href="#">Read More</a></p>
    <a href="#" class="btn btn-dark">Buy Now</a>
  </div>
</div>
</div>`
    })

    list.innerHTML = li;
}

fetchData();


all.onclick = () => {
    all.classList.add("color");
    men.classList.remove("color");
    women.classList.remove("color");
    jewelery.classList.remove("color");
    electronic.classList.remove("color");
    fetchData();
}

men.onclick = () => {
    men.classList.add("color");
    women.classList.remove("color");
    jewelery.classList.remove("color");
    electronic.classList.remove("color");
    all.classList.remove("color");
    fetchData(`men's clothing`);
}

women.onclick = () => {
    men.classList.remove("color");
    women.classList.add("color");
    jewelery.classList.remove("color");
    electronic.classList.remove("color");
    all.classList.remove("color");
    fetchData(`women's clothing`);
}

jewelery.onclick = () => {
    men.classList.remove("color");
    women.classList.remove("color");
    jewelery.classList.add("color");
    electronic.classList.remove("color");
    all.classList.remove("color");
    fetchData(`jewelery`);
}

electronic.onclick = () => {
    men.classList.remove("color");
    women.classList.remove("color");
    jewelery.classList.remove("color");
    electronic.classList.add("color");
    all.classList.remove("color");
    fetchData(`electronics`);
}
