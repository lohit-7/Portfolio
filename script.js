// Main JavaScript file

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Animated color effect for headings
    const animatedHeadings = document.querySelectorAll('.animated-heading');
    animatedHeadings.forEach(heading => {
        heading.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff)';
        heading.style.webkitBackgroundClip = 'text';
        heading.style.webkitTextFillColor = 'transparent';
        heading.style.animation = 'colorChange 5s infinite alternate';
    });


    // Profile photo hover effect
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('mouseover', function() {
            this.classList.add('hover');
        });
        profilePhoto.addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    }

    // Skill indicators animation
    const skillIndicators = document.querySelectorAll('.skill-indicator');
    skillIndicators.forEach(indicator => {
        const percent = indicator.getAttribute('data-percent');
        indicator.style.background = `conic-gradient(#ff00ff ${percent}%, #333 0)`;
    });


    // Form submission
  

    // Social media links
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Responsive navigation menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Initialize Owl Carousel for Projects Section
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

     // Create the lightning cursor element
     const cursor = document.createElement('div');
     cursor.classList.add('cursor');
     document.body.appendChild(cursor);
 
     // Update cursor position on mouse move
     document.addEventListener('mousemove', (e) => {
         cursor.style.left = e.pageX + 'px';
         cursor.style.top = e.pageY + 'px';
     });
 
     // Add glowing effect on hover over clickable elements
     const clickableElements = document.querySelectorAll('a, button, .cta-button, .social-icon, .download-button');
     clickableElements.forEach(el => {
         el.addEventListener('mouseenter', () => {
             cursor.style.transform = 'scale(1.5)';
             cursor.style.boxShadow = '0 0 20px 10px rgba(255, 255, 255, 1)';
         });
         el.addEventListener('mouseleave', () => {
             cursor.style.transform = 'scale(1)';
             cursor.style.boxShadow = '0 0 10px 5px rgba(255, 255, 255, 0.8)';
         });
     });

    

     document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Display the notification
        const notification = document.getElementById('notification');
        notification.style.display = 'block';
        
        // Hide the notification after 2 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    });
    
    const container = document.getElementById('social-icons');
    const icons = document.querySelectorAll('.social-icon');
    
    container.addEventListener('mouseenter', () => {
        icons.forEach((icon, index) => {
            icon.style.animationPlayState = 'paused';
            icon.style.position = 'absolute';
            icon.style.transform = `translateX(${(index - (icons.length - 1) / 2) * 60}px) translateY(0)`;
        });
    });
    
    container.addEventListener('mouseleave', () => {
        icons.forEach(icon => {
            icon.style.animationPlayState = 'running';
            icon.style.position = 'absolute';
        });
    });
    

    emailjs.init("UTWtNGZl50UqqTyqo"); // Replace with your actual User ID
    
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        emailjs.sendForm("Lohit_7684", "template_07g6d5c", this)
            .then(function(response) {
                document.getElementById("notification").style.display = "block";
                setTimeout(function() {
                    document.getElementById("notification").style.display = "none";
                }, 2000); // Show notification for 2 seconds
            }, function(error) {
                console.log("Error:", error);
            });
    });

    // Function to create stars dynamically
    function createStars() {
        const starCount = 250; // Number of stars
        const starsContainer = document.getElementById('stars');

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 10}s`;
            starsContainer.appendChild(star);
        }
    }

    // Call the function to create stars
    createStars();

});
// Add any additional JavaScript functionality here
