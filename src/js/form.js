const button = document.querySelector(".contact-button");
const form = document.querySelector(".contact-container");
const emailContact = document.querySelector("email-contact");


// window.addEventListener("scroll", () => {
//     console.log(`X: ${window.scrollX} Y: ${window.scrollY}`);
// })

// window.addEventListener("resize", () => {
//     console.log("width: " + window.innerWidth);
// })

button.addEventListener('click', async ()=>{
    
    if(button.innerText == "¡Haga Click Aquí!") {
        button.innerText = "Cerrar Formulario"  
    } else {
        button.innerText = "¡Haga Click Aquí!"
    }
    
    form.classList.toggle("form-spread")
    await setTimeout(() => {
        form.classList.toggle("form-position")
    }, 800);
})


