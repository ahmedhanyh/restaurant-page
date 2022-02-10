import "./menuPage.css";
import burgerImg from "./burger.jpg";
import friesImg from "./fries.jpg";
import colaImg from "./cola.jpg";

export default function loadMenuPage() {
    const menuContentDiv = document.createElement("div");
    menuContentDiv.id = "menu-content";

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    
    const burgerItem = createMenuItem("Burger", 5, burgerImg);
    const friesItem = createMenuItem("Fries", 2.55, friesImg);
    const colaItem = createMenuItem("Coca-cola", 1.25, colaImg);

    menuContentDiv.appendChild(menuHeading);
    menuContentDiv.appendChild(burgerItem);
    menuContentDiv.appendChild(friesItem);
    menuContentDiv.appendChild(colaItem);

    return menuContentDiv;
}

function createMenuItem(name, price, img) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    
    const itemInfo = document.createElement("div");
    
    const itemName = document.createElement("p");
    itemName.textContent = name;
    
    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: ${price}$`;
    
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);
    
    const itemImg = new Image();
    itemImg.classList.add("item-img")
    itemImg.src = img;
    
    menuItem.appendChild(itemInfo);
    menuItem.appendChild(itemImg);

    return menuItem;
}