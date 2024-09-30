gsap.to("#slider",{
    transform:"translate(-300%)",
    duration:4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }
});
