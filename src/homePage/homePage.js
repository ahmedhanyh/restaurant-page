import Img from "./restaurant.jpg";
import "./homePage.css";

export default function createHomePage() {
    const homeDiv = document.createElement("div");
    homeDiv.id = "home";
    
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Restaurant";
    
    const restaurantImg = new Image();
    restaurantImg.src = Img;

    const restaurantInfo = document.createElement("p");
    restaurantInfo.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, dicta atque iusto illo repellendus dolores\
        molestiae laborum modi. Odit, voluptatibus reiciendis? Odio, eligendi repellendus. Velit atque sequi repellendus recusandae quam. Lorem \
        ipsum dolor sit amet consectetur adipisicing elit. Dolore, quisquam laboriosam. Voluptatum suscipit consequuntur ipsum maxime quia mollitia\
        quisquam sequi doloremque dignissimos odit distinctio culpa incidunt pariatur, voluptates quo placeat? Lorem ipsum dolor sit amet consectetur";
    
    homeDiv.appendChild(mainHeading);
    homeDiv.appendChild(restaurantImg);
    homeDiv.appendChild(restaurantInfo);

    return homeDiv;
}