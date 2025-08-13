document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("prodrack");

    // Loop through database and create cards
    itemsDatabase.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("prodbox");
        card.innerHTML = `
        <div class="prodcase" onclick="prodorder(${item.id})">
            <img src="${item.imgSrc}" class="prodimg" alt="${item.title}">
            <div>
                <p class="prod_title">${item.title}</p>
            </div>
            <div class="pricebox">
                <h5 id="prodprice01">${item.priceActive}</h5> <span>${item.priceNonActive}</span>
            </div>
        </div>
        <button id="prodbutton" class="ctabtns" onclick="prodorder(${item.id})">Download <span class="fa-solid fa-download"></span></button>
        `;
        container.appendChild(card);
    });
});

// Function to navigate to download page
function prodorder(id) {
    window.location.href = `Order-Product.html?id=${id}`;
}