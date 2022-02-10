import "./contactPage.css";

export default function createContactPage() {
    const contactDiv = document.createElement("div");
    contactDiv.id = "contact";

    const contactHeading = document.createElement("h1");
    contactHeading.id = "contact-heading";
    contactHeading.textContent = "Contact";
    
    const contactForm = document.createElement("form");
    contactForm.id = "contact-form";
    
    const nameInput = createLabelAndInputField("name", "text", "Name", "Enter your name");
    const phoneInput = createLabelAndInputField("phone", "tel", "Phone", "Enter your phone number");
    const emailInput = createLabelAndInputField("email", "email", "E-mail", "Enter your email");
    const messageInput = createLabelAndInputField("message", "text", "Message", "Write your message", true);

    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    
    contactForm.innerHTML = nameInput + phoneInput + emailInput + messageInput;
    contactForm.appendChild(submitBtn);

    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(contactForm);

    return contactDiv;
}

function createLabelAndInputField(id, type, label, placeholder = "", textArea = false) {
    const labelAndInputField = !textArea ? `<div><label for=${id}>${label}</label>
                                <input id=${id} type=${type} placeholder="${placeholder}" /></div>`
                                : `<div id="message-area"><label for=${id}>${label}</label>
                                <textarea id=${id} placeholder="${placeholder}"></textarea></div>`
    return labelAndInputField;
}