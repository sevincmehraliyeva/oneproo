const div = document.getElementById('products')
const btn = document.getElementById('btn')

let page = 1
let limit = 3

async function getProducts () {
    let skip = (page-1) * limit;
    try{
        const response = await axios.get (`https://655c30f2ab37729791aa0509.mockapi.io/basket?page=${page}&limit=${limit}&skip=${skip}`);
        const data =response.data;
        db=data;

        data.forEach(item =>{
            const box = document.createElement('div');
            box.className = 'boxDiv col-xl-4 col-lg-4 col-md-12 col-sd-12 col-12';
            box.innerHTML =`
            <img src="${item.image}" alt="">
            <p class='title'>${item.title}</p>
            <button onclick="addtoBasket(${item.id})">Add to baket</button>
            `;
            div.appendChild(box)
        })
        page++;
    }
    catch (error) {
 console.error('Error fetching products:', errror);
    }
}

btn.addEventListener('click', getProducts)

function addtoBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item=>item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
    
}

window.onload =() => {
    getProducts()
}