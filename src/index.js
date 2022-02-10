import "./index.css";
import createHomePage from "./homePage/homePage";
import createMenuPage from "./menuPage/menuPage";
import createContactPage from "./contactPage/contactPage";

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

homeNav.addEventListener("click", () => {
    pageContent.innerHTML = "";
    pageContent.appendChild(createHomePage());
});

menuNav.addEventListener("click", () => {
    pageContent.innerHTML = "";
    pageContent.appendChild(createMenuPage());
});

contactNav.addEventListener("click", () => {
    pageContent.innerHTML = "";
    pageContent.appendChild(createContactPage());
});

navBar.appendChild(homeNav);
navBar.appendChild(menuNav);
navBar.appendChild(contactNav);

document.body.insertBefore(navBar, pageContent);
