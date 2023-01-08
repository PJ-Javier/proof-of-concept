gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions:"play none none reverse"
})

gsap.to('.right' ,{
  autoAlpha:0,
  x:500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})

gsap.to('.middle' ,{
    autoAlpha:0,
    x:500,
    duration:1.5,
    scrollTrigger:{
      start:1
    }
  })

gsap.to('.left' ,{
  autoAlpha:0,
  x:-500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})

const tl = gsap.timeline();

tl.from('.left-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).from('.right-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})

ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:1,
  pin:true,
  ease:"ease"
})

const timeline = gsap.timeline();

timeline.from('.title span' ,{
  y:150,
  skewY:7,
  duration:3
})