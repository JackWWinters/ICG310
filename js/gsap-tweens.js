gsap.from("li", {
    duration: 2, 
    opacity: 0,
})

gsap.from("h1", {
    y: 400,
    onComplete: animateName,
})

function animateName() {
    gsap.to("h3", {
        opacity: 1,
    })
}