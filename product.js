const products = {

    1:{

        name:"Luxury Dinner Set",

        price:"Rs. 6,500",

        image:"images/dinner1.jpg",

        description:"Premium ceramic dinner set perfect for family dining."

    },

    2:{

        name:"Floral Tea Set",

        price:"Rs. 2,400",

        image:"images/tea1.jpg",

        description:"Elegant floral tea set for your tea time."

    },

    3:{

        name:"Crystal Glass Set",

        price:"Rs. 1,800",

        image:"images/glass1.jpg",

        description:"Premium crystal glassware for every occasion."

    },

    4:{

        name:"Ceramic Bowl Set",

        price:"Rs. 2,000",

        image:"images/bowl1.jpg",

        description:"Beautiful ceramic bowl set with modern design."

    }

};

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const product = products[id];

if(product){

    document.getElementById("productImage").src = product.image;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productPrice").textContent = product.price;

    document.getElementById("productDescription").textContent = product.description;

}