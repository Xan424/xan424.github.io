
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const button = document.getElementById("menu-button");
        const div = document.getElementById("overlaymenu");
        button.addEventListener("click", function() {
            button.classList.toggle("open");
            div.style.display = (div.style.display === "block") ? "none" : "block";
        });

        function on() {
            document.getElementById("pop-up").style.display = "block";
          }
          
          function off() {
            document.getElementById("pop-up").style.display = "none";
          }


