import burgerImg from "./burger.jpg";
import "./menuPage.css";

export default function loadMenuPage() {
    const menuContentDiv = document.createElement("div");
    menuContentDiv.id = "menu-content";

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    
    const itemInfo = document.createElement("div");
    
    const itemName = document.createElement("p");
    itemName.textContent = "Burger";
    
    const itemPrice = document.createElement("p");
    itemPrice.textContent = "Price: 5$";
    
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);
    
    const itemImg = new Image();
    itemImg.classList.add("item-img")
    itemImg.src = burgerImg;
    
    menuItem.appendChild(itemInfo);
    menuItem.appendChild(itemImg);

    menuContentDiv.appendChild(menuHeading);
    menuContentDiv.appendChild(menuItem);

    return menuContentDiv;
}

// function createMenuItem(itemName, itemPrice, itemImg) {

// }