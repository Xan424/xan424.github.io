



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


        var swiper = new Swiper('.mySwiper', {
            slidesPerView:  1.4,
            spaceBetween: 24,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
            },
            navigation: {
              nextEl: '.swiper-buttons-next',
              prevEl: '.swiper-buttons-prev',
            },
          });

          window.onscroll = function() {
            scrollFunction()
          };


          
          function scrollFunction() {
            const section1 = document.getElementById('section1');
            const sectionTop = section1.offsetTop;
            const sectionHeight = section1.clientHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                document.getElementById("nav-element").style.color = "#ffffff";
                document.getElementById("nav-element2").style.color = "#ffffff";
                document.getElementById("nav-element3").style.color = "#ffffff";
                document.getElementById("nav-element4").style.color = "#ffffff";
                document.getElementById("nav-element5").style.color = "#ffffff";
                document.getElementById("nav-element6").style.backgroundColor = "#ffffff";
                document.getElementById("nav-element7").style.backgroundColor = "#ffffff";
            } else {
                document.getElementById("nav-element").style.color = "#061662";
                document.getElementById("nav-element2").style.color = "#061662";
                document.getElementById("nav-element3").style.color = "#061662";
                document.getElementById("nav-element4").style.color = "#061662";
                document.getElementById("nav-element5").style.color = "#061662";
                document.getElementById("nav-element6").style.backgroundColor = "#061662";
                document.getElementById("nav-element7").style.backgroundColor = "#061662";
            }
        }
        
        window.onscroll = scrollFunction;
