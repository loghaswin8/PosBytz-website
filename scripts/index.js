document.addEventListener("DOMContentLoaded", function () {
    // Define the content and image for each button
    const contentData = {
        "js-rev-1": {
            text: `
                <h3>Our POS software offers a wide range of powerful features designed to enhance your retail and restaurant operations. Here are some key highlights:</h3>
                <ul>
                    <li>Easy-to-Use Interface</li>
                    <li>Device Agnostic: Works on Windows, Android, and iOS</li>
                    <li>Suitable for both Restaurant and Retail businesses</li>
                    <li>Multiple Channel Sales Management</li>
                    <li>Integrations with printers, scanners, weighing scales, and label printers</li>
                </ul>
            `,
            imgSrc: "images/rev-1.png"
        },
        "js-rev-2": {
            text: `
                <h3>Our order management system is designed to streamline and optimize the orders from multiple channels outlets or online channels. Here are some key features of our order management system:</h3>
                <ul>
                    <li>Manage Sales orders from multiple channels</li>
                    <li>Customise multi pricing for same items different channels</li>
                    <li>Manage inventory of SKUs for different channels </li>
                    <li>Get consolidates reports based on orders from all channels</li>
                    <li>Manage Delivery for online orders through our Delivery options</li>
                </ul>
            `,
            imgSrc: "images/rev-2.png"
        },
        "js-rev-3": {
            text: `
                <h3>Our comprehensive purchase and inventory management features empower your retail or restaurant business to efficiently manage and optimize your purchasing processes and inventory levels. Here are the key features that our software offers:</h3>
                <ul>
                    <li>Purchase Order Creation: Generate purchase orders directly within the system</li>
                    <li>Supplier Management: Manage your vendors track all your purchase and payments against any vendor</li>
                    <li>Inventory Tracking: Keep real-time track of your inventory levels, including stock quantities, locations, and availability.</li>
                    <li>Reorder Point and Auto-Replenishment: Set up reorder points for products to automatically trigger purchase orders when inventory reaches a predefined threshold.</li>
                    <li>Reorder Point and Auto-Replenishment: Set up reorder points for products to automatically trigger purchase orders when inventory reaches a predefined threshold.</li>
                </ul>
            `,
            imgSrc: "images/rev-3.png"
        },
        "js-rev-4": {
            text: `
                <h3>Our Omnichannel ecommerce and online ordering features provide a seamless and convenient way for your retail or restaurant business to expand its reach and cater to the growing demands of online customers.</h3>
                <ul>
                    <li>Online Store Creation: Establish an attractive and user-friendly online store to showcase your products or menu items. Customize the design, layout, and branding to create a unique online shopping experience that reflects your brand identity</li>
                    <li>Product Catalog Management: Easily manage your product inventory within the online store. Add new products, update pricing and descriptions, and categorize items for easy navigation. </li>
                    <li>Order Placement: Allow customers to place orders directly through your online store along with secure payments options</li>
                    <li>Delivery and Pickup Options: Offer customers the choice of delivery or pickup for their online orders. Provide accurate delivery time estimates, define delivery zones, and delivery fees.</li>
                    <li>Headless commerce API’s : Build your ecommerce website as per your UI/UX requirement in ease using our on-self Headless commerce API’s</li>
                </ul>
            `,
            imgSrc: "images/rev-4.png.png"
        },
        "js-rev-5":{
            text: `
                <h3>Our accounting and finance features provide robust tools to manage the financial aspects of your retail or restaurant business from tracking expenses to generating financial reports</h3>
                <ul>
                    <li>General Ledger: Maintain a centralized and organized record of your financial transactions, including sales, purchases, expenses, and payments. Our software automatically updates the general ledger, ensuring accurate and up-to-date financial reports</li>
                    <li>Accounts Payable and Receivable: Manage your payables and receivables efficiently. Keep track of outstanding invoices, manage vendor payments, and handle customer invoices and payments.</li>
                    <li>Financial Reporting: Generate various financial reports, such as income statements, balance sheets, Trial balance, General Ledgers and profit and loss statements.</li>
                    <li>Expense Management: Track and categorize expenses, including overhead costs, vendor payments, and employee reimbursements.</li>
                </ul>
            `,
            imgSrc:"images/rev-5.png"
        },
        "js-rev-6":{
            text: `
                <h3>Our CRM (Customer Relationship Management) and marketing automation features are designed to help you effectively manage customer interactions, nurture relationships, and automate marketing campaigns.</h3>
                <ul>
                    <li>Customer Database Management: Maintain a centralized customer database with detailed profiles, including contact information, purchase history, preferences, and communication history.</li>
                    <li>Customer Grouping: Group your customer database into segments based on demographics, behaviour, purchase history, or other criteria</li>
                    <li>Email Marketing Automation: Automate email campaigns and workflows to engage customers at various stages of their journey. Set up triggered emails for welcome messages, occasional days, abandoned carts, order confirmations, and more.</li>
                    <li>Customer Communication: Manage customer communication through various channels, including email, SMS, and social media. relationships. Social Media Integration: Integrate with social media platforms to monitor and engage with customers on social channels.</li>
                </ul>
            `,
            imgSrc: "images/rev-6.png"
        },
        "js-rev-7":{
            text: `
                <h3>Our HR (Human Resources) and Payroll features provide comprehensive tools to streamline your employee management and payroll processes. Here are the key features our software offers:</h3>
                <ul>
                    <li>Employee Database: Maintain a centralized employee database with essential information, including personal details, employment history, job roles, and certifications.</li>
                    <li>Attendance and Time Tracking: Track employee attendance and working hours efficiently. Our software supports various methods of time tracking, including manual entry, biometric devices, or integrations with time clock systems.</li>
                    <li>Leave Management: Streamline the process of managing employee leaves, including vacation days, sick leave, and other types of time off.</li>
                    <li>Payroll Processing: Automate your payroll calculations and streamline the payroll process. Our software handles salary calculations, tax deductions, benefits, and other payroll components..</li>
                    <li>Tax & Statutory Compliance: Stay compliant with tax regulations by automating tax calculations and deductions</li>
                </ul>
            `,
            imgSrc: "images/rev-7.png"
        }
       
    };
    // Get all buttons and content display area
    const buttons = document.querySelectorAll("#buttons-container button");
    const contentDisplay = document.getElementById("content-display");

    // Add click event to each button
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const className = button.classList[0]; // Get the class of the clicked button
            const content = contentData[className];

            // Set the content and image dynamically
            contentDisplay.innerHTML = `
                <img src="${content.imgSrc}" alt="">
                <div class="content-text">${content.text}</div>
            `;
        });
    });
});

//////////
const imageData = [
    ["images/msfood.png", "images/Al-karakand-e1695319053772.png", "images/Jazz-cafe.jpg", "images/HOT-POT.png", "images/Diamond-Restaurant.png", "images/maaza.png"],
    ["images/Besan-Flowers.png", "images/elite_fish.png", "images/Chimney-Cone.png", "images/continental_coffee.png", "images/Dokkan-Kebab.png", "images/Kebab-time.png"],
    ["images/King-Fish.png", "images/ROYCE-Chocolate.png", "images/tails_of_city.jpg", "images/Sultan-Al-Arab.png", "images/Sams-Pizza.png", "images/shero-01.png"]
];

const slidesToShow = 4; // Number of slides to show at a time
let currentIndex = [0, 0, 0]; // Keep track of current index for each row

function createSliderRow(sliderId, rowData) {
    const sliderRow = document.getElementById(sliderId);
    sliderRow.innerHTML = ""; // Clear existing content

    rowData.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        const img = document.createElement('img');
        img.src = src;
        slide.appendChild(img);
        sliderRow.appendChild(slide);
    });
}

function updateVisibleSlides(rowIndex) {
    const sliderRow = document.querySelectorAll('.slider-wrapper')[rowIndex];
    const slides = sliderRow.children;

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Show 4 slides starting from the current index
    for (let i = currentIndex[rowIndex]; i < currentIndex[rowIndex] + slidesToShow; i++) {
        const slideIndex = i % slides.length; // Use modulus for circular sliding
        slides[slideIndex].style.display = 'block';
    }
}

function moveSlide(rowIndex, direction) {
    const sliderRow = document.querySelectorAll('.slider-wrapper')[rowIndex];
    const totalSlides = sliderRow.children.length;

    // Move by 1 image instead of 4
    currentIndex[rowIndex] = (currentIndex[rowIndex] + direction + totalSlides) % totalSlides;

    // Update visible slides
    updateVisibleSlides(rowIndex);
}

// Initialize sliders
imageData.forEach((rowData, index) => {
    createSliderRow(`slider${index + 1}`, rowData);
    updateVisibleSlides(index); // Show the initial set of 4 images
});

// TESTIMONIALS
const testimonials = [
    { 
        img: 'images/test-maaza-83x88.png',
        name: 'MazaArabia, KSA', 
        text: 'We are providing broast chicken food across KSA with about 25 outlets and growing. With PosBytz, we have automated the entire operations from purchases, inventory, sales, and also enabled our own online ordering system with ease.' 
    },
    { 
        img: 'images/test-farmarika.webp', 
        name: 'Farmarika, Grocery Business', 
        text: 'This ERP platform is simple and excellent. It is has the omnichannel model to sell the products. I have been using this product for more than 1 year. It is very good to manage the catalogue, items, pricing, taxing, customers, employees, etc.' 
    },
    { 
        img: 'images/test-tehran_taste_persia-83x88.png', 
        name: 'Tehran-the Taste Of Persia', 
        text: 'I have been using Posbytz for more than two years, would definitely recommend to all my fellow restaurant owners given the fact it gives complete control over your business. Best would be the branded apps and online ordering platform integrated with POS and inventory.'
    },
    { 
        img: 'images/test-Al-karakand-e1695319023203-83x71.png', 
        name: 'Alkarkand Abha KSA', 
        text: 'We have recently migrated our software to PosBytz so far have been always improvising the features based on request and strongly recommend for F&B groups managing complex restaurant operations with multiple brands from purchases, inventory, transfers, Accounting to P&L reports. Integrated QR code ordering system with POS works seamlessly and gives a great customer experience.'
    },
    { 
        img: 'images/test-Sams-Pizza-83x88.png', 
        name: "Sam's Pasta Pizza, Qatar", 
        text: 'We are an traditional Italian cuisine based brand. Have been using PosBytz for our Restaurant Management operations and so far there has been no issues with respect to the software and as a owner can able see my business online from anywhere. PosBytz is very easy to use for setting up menu , ingredients/recipes , POS , inventory etc..,'
    }
];

let currentTestIndex = 0;

function generateTestimonials() {
    const sliderWrapper = document.getElementById("testimonialSlider");
    sliderWrapper.innerHTML = ''; // Clear previous testimonials

    // Loop through testimonials and append only 2 at a time
    for (let i = 0; i < 2; i++) {
        const index = (currentTestIndex + i) % testimonials.length; // Circular indexing
        const testimonial = testimonials[index];
        
        const testimonialSlide = document.createElement("div");
        testimonialSlide.classList.add("testimonial-slide");
        
        testimonialSlide.innerHTML = `
            <div class="testimonial">
                <img src="${testimonial.img}" alt="${testimonial.name}">
                <h3>${testimonial.name}</h3>
                <p>${testimonial.text}</p>
            </div>
        `;

        sliderWrapper.appendChild(testimonialSlide);
    }
}

function moveTestimonial(direction) {
    currentTestIndex = (currentTestIndex + direction + testimonials.length) % testimonials.length; // Circular motion

    generateTestimonials(); // Regenerate testimonials on every move
}

// Initialize the slider
generateTestimonials();

///////
// FAQ content stored as an array of objects (question & answer)
const faqData = [
    {
        question: "What is Retail ERP software?",
        answer: "Retail ERP software is a comprehensive solution designed to meet the specific needs of retail businesses. It integrates various functions and processes, such as inventory management, point of sale (POS), sales and order management, customer relationship management (CRM), and Accounting, into a single software system."
    },
    {
        question: "What is Restaurant ERP software?",
        answer: "Restaurant ERP software offers managing a multiple chain restaurant business at one place from managing procurement, vendors, payments, POS, Sales , Online ordering , QR code ordering, CRM for promotions, recipe & ingredients management and Accounting."
    },
    {
        question: "Why do Retailers need ERP software?",
        answer: "Retailers need ERP software for several reasons: <br> Streamlined Operations: ERP software integrates various business functions, such as inventory management, sales, POS, customer management, and financials, into a centralized system. This streamlines operations, reduces manual tasks, and improves overall efficiency.<br> Inventory Management: Effective inventory management is crucial for retailers to avoid stockouts or overstocking. ERP software provides real-time visibility into inventory levels, automates replenishment processes, tracks stock movement, and optimizes inventory to ensure accurate stock levels and reduce carrying costs.<br> Sales and Order Management: ERP software facilitates efficient management of sales and customer orders. It enables retailers to process orders seamlessly, track order fulfilment, manage pricing and discounts, and handle returns or exchanges, ensuring smooth and timely order processing.<br> Customer Relationship Management (CRM): CRM functionality within ERP software helps retailers manage customer data, track interactions, and personalise customer experiences.<br> Financial Management: ERP software includes financial modules that handle tasks like accounting, invoicing, budgeting, and financial reporting"
    },
    {
        question: "What is cloud-based ERP software?",
        answer: "Cloud-based ERP software is a type of ERP system that is hosted and accessed over a cloud infrastructure. In this model, the software would be managed and maintained by an ERP provider with a Pay as you Use model on a Subscription."
    },
    {
        question: "Benefits of using Retail ERP System?",
        answer: "Using a Retail ERP system offers several benefits for retailers having one system to manage both outlet and online business along with managing all your operations from customer management, sales, Loyalty and accounting under one roof."
    },
    {
        question: "Why is PosBytz the best ERP software for Restaurant, and Retail?",
        answer: "PosBytz offers a complete suite for Retail and Restaurant businesses to automate their business operations with tools to also increase their business online and offline. PosBytz offers POS , inventory management, Sales Management, CRM , Accounting and HR & Payroll management."
    },
    {
        question: "How to download Free Retail ERP Software from PosBytz?",
        answer: "You can start using PosBytz for Free with our Free plan sign-up now"
    },
    {
        question: "What is cost of ERP software ?",
        answer: "Cost of the PosBytz ERP software starts as low as from $19 Dollars per month. To know more about our plan please check our pricing."
    },
    {
        question: "Does ERP software works for Cafe shop ? ",
        answer: "Yes PosBytz ERP Software for cafe shops with POS, inventory, employee, and customer management. Consider user-friendliness, mobile accessibility, and integration for optimal cafe shop operations."
    },
    {
        question: "Does the ERP Software work for Cloud kitchen business?",
        answer: "Cloud kitchen ERP software with robust order management, inventory tracking, kitchen workflow, and delivery integration. Ensure scalability, customization, and user-friendly cloud-based features for efficiency."
    },
    {
        question: "What is Retail Grocery Store ERP Software?",
        answer: "Retail grocery store ERP software is a comprehensive system that integrates various operations, including inventory management, sales, and customer relationships, to streamline and enhance grocery store management."
    },
    {
        question: "What is Best ERP software for Supermarkets? ",
        answer: "PosBytz ERP software for Supermarket include inventory tracking, point of sale (POS), supplier management, employee scheduling, analytics, accounting and other systems."
    }
];

// Function to dynamically generate FAQ items
function generateFAQ() {
    const faqContainer = document.getElementById('faq-container');

    faqData.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('elementor-toggle-item');
        
        const faqTitle = document.createElement('div');
        faqTitle.classList.add('elementor-tab-title');
        faqTitle.setAttribute('data-tab', index + 1);
        faqTitle.setAttribute('role', 'button');
        faqTitle.setAttribute('aria-controls', `elementor-tab-content-160${index + 1}`);
        faqTitle.setAttribute('aria-expanded', 'false');

        const faqIcon = document.createElement('span');
        faqIcon.classList.add('elementor-toggle-icon');
        faqIcon.setAttribute('aria-hidden', 'true');
        faqIcon.innerHTML = `<span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>`;
        
        const faqQuestion = document.createElement('a');
        faqQuestion.classList.add('elementor-toggle-title');
        faqQuestion.setAttribute('tabindex', '0');
        faqQuestion.textContent = faq.question;

        const faqContent = document.createElement('div');
        faqContent.id = `elementor-tab-content-160${index + 1}`;
        faqContent.classList.add('elementor-tab-content');
        faqContent.setAttribute('data-tab', index + 1);
        faqContent.setAttribute('role', 'region');
        faqContent.setAttribute('aria-labelledby', `elementor-tab-title-160${index + 1}`);

        const faqAnswer = document.createElement('p');
        faqAnswer.innerHTML = faq.answer;

        faqContent.appendChild(faqAnswer);
        faqTitle.appendChild(faqIcon);
        faqTitle.appendChild(faqQuestion);
        faqItem.appendChild(faqTitle);
        faqItem.appendChild(faqContent);
        
        faqContainer.appendChild(faqItem);
    });
}

// Function to toggle FAQ answer visibility
function toggleFAQ(event) {
    const clickedItem = event.currentTarget;
    const content = clickedItem.nextElementSibling;
    const isOpen = content.classList.contains('open');

    // Close all other items
    document.querySelectorAll('.elementor-tab-content').forEach((item) => {
        item.classList.remove('open');
        item.previousElementSibling.setAttribute('aria-expanded', 'false');
    });

    // Open the clicked one if it wasn't already open
    if (!isOpen) {
        content.classList.add('open');
        clickedItem.setAttribute('aria-expanded', 'true');
    }
}

// Initialize FAQ
generateFAQ();

// Add event listener to toggle answers on click
document.querySelectorAll('.elementor-tab-title').forEach((title) => {
    title.addEventListener('click', toggleFAQ);
});




// document.querySelector('.js-rev-1').addEventListener('click', () => handleReview('1'));
// document.querySelector('.js-rev-2').addEventListener('click', () => handleReview('2'));
// document.querySelector('.js-rev-3').addEventListener('click', () => handleReview('3'));
// document.querySelector('.js-rev-4').addEventListener('click', () => handleReview('4'));
// document.querySelector('.js-rev-5').addEventListener('click', () => handleReview('5'));
// document.querySelector('.js-rev-6').addEventListener('click', () => handleReview('6'));
// document.querySelector('.js-rev-7').addEventListener('click', () => handleReview('7'));
