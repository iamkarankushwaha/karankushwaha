// Open Bag
let bagContainer = null; // track single instance
let cart = []; // example cart data

function OpenBag() {
  // prevent multiple bags
  if (bagContainer) return;

  bagContainer = document.createElement("div");
  bagContainer.className = "bag-container position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center";
  // check cart state
  let bagContent = "";
  if (cart.length === 0) {
    bagContent = `<p class="text-center fs-5 fw-medium">Your bag is empty. <i class="bi bi-emoji-frown"></i></p> <p class="text-center">Go to <a href="library.html" class="btn btn-link d-inline p-1 text-decoration-underline">Library</a> for exploring products.</p>`;
  } else {
    bagContent = cart.map(item => `
        <div class="bag-item">
          <span>${item.name}</span>
          <span>₹${item.price}</span>
        </div>
    `).join("");
  }

  bagContainer.innerHTML = `
  <div class="bag-wrapper shadow-lg rounded-3 bg-white p-3 shadow-lg">
    <div class="bag-header d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
      <h2 class="text-center">Your Bag</h2>
      <button class="btn-close" onclick="CloseBag()"></button>
    </div>
    <div class="bag-body text-muted mb-3 p-5 overflow-auto" style="min-height: 40vh;">
      ${bagContent}
    </div>
    </div>
  `;

  document.body.appendChild(bagContainer);
}

function CloseBag() {
  if (bagContainer) {
    bagContainer.remove();
    bagContainer = null; // reset so it can be opened again
  }
}
// OpenBag()