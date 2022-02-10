import "./index.css";
import createHomePage from "./homePage/homePage";
import createMenuPage from "./menuPage/menuPage";

const pageContent = document.querySelector("#content");

const navBar = document.createElement("div");
navBar.id = "navbar";

function createNavItem(text) {
    const navItem = document.createElement("div");
    navItem.classList.add("nav-item");
    navItem.textContent = text;
    return navItem;
}

const homeNav = createNavItem("Home");
const menuNav = createNavItem("Menu");
const contactNav = createNavItem("Contact");

navBar.appendChild(homeNav);
navBar.appendChild(menuNav);
navBar.appendChild(contactNav);

document.body.insertBefore(navBar, pageContent);

