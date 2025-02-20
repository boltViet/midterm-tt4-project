document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#addProductForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission for now
            
            const title = document.querySelector("#productTitle").value.trim();
            const description = document.querySelector("#productDescription").value.trim();
            const price = document.querySelector("#productPrice").value;
            const quantity = document.querySelector("#productQuantity").value;

            if (!title || !description || !price || !quantity) {
                alert("Please fill out all fields correctly.");
                return;
            }

            alert("Product added successfully! (This is a placeholder action)");
            form.reset();
        });
    }
});
