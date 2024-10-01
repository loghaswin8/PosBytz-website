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




// document.querySelector('.js-rev-1').addEventListener('click', () => handleReview('1'));
// document.querySelector('.js-rev-2').addEventListener('click', () => handleReview('2'));
// document.querySelector('.js-rev-3').addEventListener('click', () => handleReview('3'));
// document.querySelector('.js-rev-4').addEventListener('click', () => handleReview('4'));
// document.querySelector('.js-rev-5').addEventListener('click', () => handleReview('5'));
// document.querySelector('.js-rev-6').addEventListener('click', () => handleReview('6'));
// document.querySelector('.js-rev-7').addEventListener('click', () => handleReview('7'));
