import Img from "./restaurant.jpg";
import "./pageContent.css";

export default function pageLoad() {
    const contentDiv = document.querySelector("#content");
    
    const mainHeading = document.createElement("h1");
    mainHeading.textContent = "Restaurant";
    
    const restaurantImg = new Image();
    restaurantImg.src = Img;

    const restaurantInfo = document.createElement("p");
    restaurantInfo.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, dicta atque iusto illo repellendus dolores\
        molestiae laborum modi. Odit, voluptatibus reiciendis? Odio, eligendi repellendus. Velit atque sequi repellendus recusandae quam. Lorem \
        ipsum dolor sit amet consectetur adipisicing elit. Dolore, quisquam laboriosam. Voluptatum suscipit consequuntur ipsum maxime quia mollitia\
        quisquam sequi doloremque dignissimos odit distinctio culpa incidunt pariatur, voluptates quo placeat? Lorem ipsum dolor sit amet consectetur";
    
    contentDiv.appendChild(mainHeading);
    contentDiv.appendChild(restaurantImg);
    contentDiv.appendChild(restaurantInfo);
}