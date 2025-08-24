document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("prodrack");

    // Loop through database and create cards
    itemsDatabase.forEach(item => {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card shadow-lg rounded-2xl border-dark border-primary" style="width: 100%; max-width: 18rem; cursor: pointer;" onclick="prodorder(${item.id})">
            <img src="${item.imgSrc}" class="w-full" alt="${item.title}">
            <div class="card-body">
                <h6 class="card-header text-base leading-5 font-medium" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${item.title}</h6>
                <span class="font-bold text-accent-2">${item.priceActive}</span>
                <span class="font-bold text-tertiary p-3" style="text-decoration: line-through;">${item.priceNonActive}</span>
                <div class="flex justify-center mt-5"><a href="#" class="btn btn-primary w-full">Download<i class="bi bi-download px-2"></i></a></div>
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
        <button id="prodbutton" class="btn" onclick="prodorder(${item.id})">Download <span class="fi fi-download"></span></button>-->
        `;
        container.appendChild(card);
    });
});

// Function to navigate to download page
function prodorder(id) {
    window.location.href = `Order-Product.html?id=${id}`;
}