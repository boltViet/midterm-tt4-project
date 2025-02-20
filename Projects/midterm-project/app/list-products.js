import "./list-products.scss";

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { image: "assets/images/camera.jpg", title: "Product 1", description: "High-quality product", price: "$1000" },
        { image: "assets/images/pexels-engina-kyurt-4458519.jpg", title: "Watch", description: "Durable and stylish", price: "$1500" },
        { image: "assets/images/milk_cup.jpg", title: "Cup", description: "Great value", price: "$6.80" },
        { image: "assets/images/cupholder.jpg", title: "Starbucks", description: "Limited edition of cup holder", price: "$5" },
        { image: "assets/images/lettuce.jpg", title: "Lettuce", description: "Delicious", price: "$20" },
        { image: "assets/images/pepper.jpg", title: "Pepper", description: "Highly fresh", price: "$35" },
        { image: "assets/images/phone.jpg", title: "iPhone", description: "Exclusive design", price: "$1240" },
        { image: "assets/images/tooth_paste.jpg", title: "Toothpaste and brush", description: "Trending now", price: "$15" },
        { image: "assets/images/zerosugar_coca.jpg", title: "Coke", description: "Great drink", price: "$2" }
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>${product.price}</strong></p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(card);
    });
});