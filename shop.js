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
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    products.forEach(product=>{

        const title = product.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){

            product.style.display="block";

        }

        else{

            product.style.display="none";

        }

    });

});