const forEachButton = document.querySelector('.button-foreach');
const productList = document.querySelector('#product-list');
const mapButton = document.querySelector('.button-map');
const reduceButton = document.querySelector('.button-reduce');
const filterButton = document.querySelector('.button-filter');

function buttonForEach(productsArray) {
    let myList = '';

    productsArray.forEach(product => {

        const formattedPrice = product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        myList += `
        <li>
            <img src="${product.src}">
            <p class="product-name"> ${product.name}</p>
            <p class="product-price"> ${formattedPrice}</p> 
        </li>
        `
    });
    productList.innerHTML = myList;
}

function buttonMap() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }));

    productList.innerHTML = "";

    newPrices.forEach((product) => {
        const formattedPrice = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(product.price);

        productList.innerHTML += `
        <li>
            <img src="${product.src}">
            <p class="product-name">${product.name}</p>
            <p class="product-price">
                ${formattedPrice} 
                <small><del>Desconto de 10%</del></small>
            </p> 
        </li>`;
    });
}

function buttonReduce() {

    buttonForEach(menuOptions);

    const totalPrice = menuOptions.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

    productList.innerHTML += `
    <div class="cart-total">
        <p class="total-price">
            <span>Total:</span>
            <span>R$ ${totalPrice.toFixed(2)}</span>
        </p>
    </div>
`
}

function buttonFilter() {
    const veganProducts = menuOptions.filter((product) => {
        if (product.vegan === true) {
            return product;
        }
    });

    buttonForEach(veganProducts);
}

forEachButton.addEventListener('click', () => buttonForEach(menuOptions));
mapButton.addEventListener('click', buttonMap);
reduceButton.addEventListener('click', buttonReduce);
filterButton.addEventListener('click', buttonFilter);
