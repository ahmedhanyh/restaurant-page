import "./index.css";
// import loadHomePage from "./homePage/homePage";
// import loadMenuPage from "./menuPage/menuPage";
import loadContactPage from "./contactPage/contactPage";

// loadHomePage();
// const menuContent = loadMenuPage();
const contactContent = loadContactPage();
document.querySelector("#content").appendChild(contactContent);
