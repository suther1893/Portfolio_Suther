


        let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        

        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.getElementById('navbar');
        const links = navbar.querySelectorAll('a');
    
            
                 menuIcon.addEventListener('click', () => {
                if (navbar.style.display === 'block') {
                    navbar.style.display = 'none';
                } else {
                    navbar.style.display = 'block';
                }
            });
        


