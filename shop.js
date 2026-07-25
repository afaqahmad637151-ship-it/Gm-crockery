const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active Button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        products.forEach(product => {

            if(filter === "all"){

                product.style.display = "block";

            }

            else if(product.dataset.category === filter){

                product.style.display = "block";

            }

            else{

                product.style.display = "none";

            }

        });

    });

});