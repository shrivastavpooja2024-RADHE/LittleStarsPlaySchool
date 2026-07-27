// =====================================
// Little Stars Play School
// script.js
// =====================================

// Website Loaded
window.addEventListener("load", () => {
    console.log("Little Stars Play School Loaded Successfully!");
});

// =============================
// Smooth Scroll for Navigation
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =============================
// Back To Top Button
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.left="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2e7d32";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =============================
// Button Hover Animation
// =============================

document.querySelectorAll("button,.hero-btn,.admission-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// =============================
// Gallery Image Hover Effect
// =============================

// =============================
// GALLERY LIGHTBOX
// =============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

},4000);
// =============================
// HAMBURGER MENU
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
// =============================
// SCROLL ANIMATION
// =============================

const hiddenElements = document.querySelectorAll(
".about,.why-us,.activities,.gallery,.teachers,.admission,.testimonials,.contact"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});
window.addEventListener("scroll",()=>{

    const header=document.querySelector(".header");

    if(window.scrollY>50){

        header.style.padding="10px 0";

    }else{

        header.style.padding="18px 0";

    }

});
// =============================
// ANIMATED STATISTICS
// =============================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const original = counter.textContent;
    const target = parseInt(original);

    let count = 0;

    const timer = setInterval(() => {

        count++;

        if (original.includes("%")) {
            counter.textContent = count + "%";
        } else {
            counter.textContent = count + "+";
        }

        if (count >= target) {
            clearInterval(timer);
            counter.textContent = original;
        }

    }, 20);

});
// =============================
// DARK MODE
// =============================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML="☀️";
    }else{
        themeBtn.innerHTML="🌙";
    }

});