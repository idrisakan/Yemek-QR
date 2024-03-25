import { buttonsData, menu } from "./dt.js";
import { calculatePrice, elements } from "./helpers.js"
// sayfa yüklediğin ekrena renderMenuItems fonksiyonu çalıştır
document.addEventListener("DOMContentLoaded", () => {
    renderMenuItems(menu);
    renderButtons();
});
elements.buttonsArea.addEventListener("click", searchCategory);
function renderMenuItems(menuItems) {
    let menuHTML = menuItems.map((item) => {
        return `
        <a href="productDetail.html?id=${item.id}"
         id="card" class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2">
        <img src=${item.img} alt="" class="rounded shadow">
        <div>
            <div class="d-flex justify-content-between">
                <h5>${item.title}</h5>
                <p class="text-success">${calculatePrice(item.price)}₺</p>
            </div>
            <p class="lead">
            ${item.desc}
            </p>
        </div>
    </a>
        `;
    });
    // diziyi stringe çevirme
    
    menuHTML = menuHTML.join("");
    elements.mainArea.innerHTML = menuHTML;
}

function searchCategory (e) {
const category = e.target.dataset.category;
// Tüm dizi elemenalarında yalnızca kategori  değeri butonun kategori değeri ile eşleşenleri getir.
const filtredMenu = menu.filter((item) => item.category === category);
//hepsi seçilirse  bütün menüyü ekrana basar 
if(category === "all") {
    renderMenuItems(menu);
}else{
    //filtrelenmiş elemanları ekrana bas
    renderMenuItems(filtredMenu)
}
//buttonları güncelleme
renderButtons(category);
}
// Ekrana buttonları basma
function renderButtons (active){
    //eski buttonları kaldırma
    elements.buttonsArea.innerHTML = "";
buttonsData.forEach((btn) => {
    //HTML buttonunu oluşturma
    const buttonEle = document.createElement("button");
    //button elementine classları ekleme
    buttonEle.className ="btn btn-outline-dark filter-btn";
    //içerisindeki yazıyı değiştirme
    buttonEle.textContent = btn.text; 
    //hangi kategori olduğu bilgisini buton elementine ekleme
    buttonEle.dataset.category = btn.value;
    //eğer ki active kategoriyle buton eşleşirse ona farklı class ver
    if(btn.value === active) {
        buttonEle.classList.add("bg-dark", "text-light");
    }
    // HTML 'e gönderme
    elements.buttonsArea.appendChild(buttonEle);
});
}

