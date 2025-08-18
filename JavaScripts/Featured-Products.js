document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("prodrack");

    // Loop through database and create cards
    itemsDatabase.forEach(item => {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card shadow rounded-3" style="width: 100%; max-width: 18rem; cursor: pointer;" onclick="prodorder(${item.id})">
            <img src="${item.imgSrc}" class="card-img-top rounded-top-3" alt="${item.title}">
            <div class="card-body">
                <h6 class="card-title fs-6 fw-medium" style="text-align: justify; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${item.title}</h6>
                <span class="fs-5 fw-bold text-danger">${item.priceActive}</span>
                <span class="fs-6 fw-bold text-muted px-2 text-decoration-line-through">${item.priceNonActive}</span>
                <a href="#" class="btn btn-primary mt-3 py-2 fw-bold">Download<i class="bi bi-download px-2"></i></a>
            </div>
        </div>

        <!--<div class="prodcase" onclick="prodorder(${item.id})">
            <img src="${item.imgSrc}" class="prodimg" alt="${item.title}">
            <div>
                <p class="prod_title">${item.title}</p>
            </div>
            <div class="pricebox">
                <h5 id="prodprice01">${item.priceActive}</h5> <span>${item.priceNonActive}</span>
            </div>
        </div>
        <button id="prodbutton" class="ctabtns" onclick="prodorder(${item.id})">Download <span class="fa-solid fa-download"></span></button>-->
        `;
        container.appendChild(card);
    });
});

// Function to navigate to download page
function prodorder(id) {
    window.location.href = `Order-Product.html?id=${id}`;
}