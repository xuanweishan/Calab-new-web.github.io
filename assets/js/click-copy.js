document.querySelectorAll(".email-link").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
    
        const email = this.dataset.email;
    
        navigator.clipboard.writeText(email).then(() => {
            const icon = this.querySelector(".email-icon");
    
            icon.classList.remove("fa-envelope");
            icon.classList.add("fa-envelope-circle-check");
            this.title = "Copied!";
    
            setTimeout(() => {
                icon.classList.remove("fa-envelope-circle-check");
                icon.classList.add("fa-envelope");
                this.title = "";
            }, 2000);
        });
    });
});