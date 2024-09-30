
  var h1s = document.querySelectorAll("h1")
h1s.forEach(function(elem){
  var h1Text = elem.textContent
  var clutter = ""
  var splittedText = h1Text.split("")
  splittedText.forEach(function(e){
    clutter += `<span>${e}</span>` 
  })
  
  elem.innerHTML = clutter
})


gsap.from("h1 span",{
  y:140,
  opacity:0,
  duration:4,
  stagger:0.5,

  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    markers:true,
    start:"top 0",
    end:"top -50%",
    scrub:2,
    pin:true
  }
})



var h2Text = document.querySelector("h2").textContent

var splittedH2 = h2Text.split("")

var container = ""

splittedH2.forEach(function(elem,idx){
  
  if(h2Text.length/2 > idx){
    container += `<span class="a">${elem}</span>` 
  }else{
    container += `<span class="b">${elem}</span>` 

  }

})
document.querySelector("h2").innerHTML = container


gsap.from("h2 .a",{
  opacity:0,
  delay:0.5,
  duration:1,
  stagger:0.15
})
gsap.from("h2 .b",{
  opacity:0,
  delay:0.5,
  duration:1,
  stagger:-0.15
})

