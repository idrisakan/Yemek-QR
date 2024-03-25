import { menu } from "./dt.js";
import { calculatePrice } from "./helpers.js";
// HTML de arayüzü göndereceğimiz yer 
const outlet = document.getElementById("outlet");

const searchParams = new URLSearchParams(window.location.search);
//get metodu ile URL de ki parametresine eriştik
 const paramId = searchParams.get("id");
 console.log(paramId);
 //menü içerinden id sini bildiğimiz eleman ulaşma
 const product = menu.find((item) => item.id === Number(paramId));

 outlet.innerHTML = `
 <div class="d-flex justify-content-between align-items-center">
            <a href="/" class="fs-1"><i class="bi bi-house"></i></a>
            <div>ansayfa /  ${product.category}/ ${product.title.toLocaleLowerCase}</div>
        </div>
        <h1 class="text-center shadow rounded p-2 my-3">${product.title}</h1>
        <div class="d-flex justify-content-center align-items-center">
            <img src="${product.img}" style="max-width: 500px;" class="img-fluid rounde shadow" alt="">
        </div>
        <h3 class="my-5">Ürününün Kategorisi: <span class="text-success">${product.category}</span></h3>
        <h3 class="my-5">Ürününün Fiyatı: <span class="text-success">${calculatePrice(product.price)}₺</span></h3>
    </div>
    <p class="lead fs-3">${product.desc}</p>

 `;