const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.classList.add("navbar-scrolled")
}else{
navbar.classList.remove("navbar-scrolled")
}

})


// Scroll animation

const elements = document.querySelectorAll(".animate")

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show")
}

})

},{threshold:0.2})

elements.forEach(el=>observer.observe(el))


// Pricing toggle

const toggle = document.getElementById("pricing-toggle")

toggle.addEventListener("change",()=>{

const prices = document.querySelectorAll(".price")

prices.forEach(price=>{

if(toggle.checked){
price.textContent = price.dataset.year
}else{
price.textContent = price.dataset.month
}

})

})