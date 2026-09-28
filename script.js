// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}



// ======================================
// QUOTE FORM -> WHATSAPP
// ======================================

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Get values
        const name = document.getElementById("name").value;
        const company = document.getElementById("company").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const service = document.getElementById("service").value;
        const message = document.getElementById("message").value;

        // WhatsApp number
        const whatsappNumber = "254728549825";

        // Create message
        const whatsappMessage =
`Hello Nex Move Logistics Limited,

I would like to request a quotation.

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Service Required: ${service}

Requirements:
${message}`;

        // Encode text
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Open WhatsApp
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");

    });

}