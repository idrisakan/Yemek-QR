export const elements = {
    mainArea: document.getElementById("menu-area"),
    buttonsArea: document.getElementById("buttons-area"),

};

export const calculatePrice = (price) => {
    let newPrice = price * 10;
    newPrice = newPrice.toFixed(2);
    return newPrice
};