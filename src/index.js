import "./index.css";
// import loadHomePage from "./homePage/homePage";
import loadMenuPage from "./menuPage/menuPage";

// loadHomePage();
const menuContent = loadMenuPage();
document.querySelector("#content").appendChild(menuContent);
