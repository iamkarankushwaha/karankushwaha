// General Elements Call
let orderpage = document.getElementById("order-page");

//  Calling empty boxes
let ItemImage = document.getElementById("Item-Image");
let ItemTitle = document.getElementById("item_title");
let ItemPrice = document.getElementById("item_price");
let InputTitle = document.getElementById("bookname");
let InputPrice = document.getElementById("bookprice");

function DownloadProd(ItemCode) {
    orderpage.style.display="block";

    // setting element's Ids
    const ItemTitleId = `prod_title${ItemCode}`
    const ItemPriceId = `prodprice${ItemCode}`
    
    // Getting Data using above ids
    const ItemImgSrc = `Img-Assets/book-thumbnail${ItemCode}.png`;
    const TitleData = document.getElementById(`${ItemTitleId}`).innerText;
    const PriceData = document.getElementById(`${ItemPriceId}`).innerText;

    // Filling data in place of items
    ItemImage.setAttribute("src", ItemImgSrc);
    ItemTitle.innerText=TitleData;
    ItemPrice.innerText=PriceData;
    InputTitle.value=TitleData;
    InputPrice.value=PriceData;
}














function cancel_order() {
    orderpage.style.display="none";
}