
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: { smooth: true },
    getDirection: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();


  gsap.to(".mysterybox_images" ,{
    duration:10,
    repeat: -1,
    rotate:"360deg",
    ease: Power0.easeNone
})


gsap.to(".cards_list",{
    opacity:1,
    duration:1,
    stagger:.2,
    ease:Expo.easeIn,
    scrollTrigger: {
        trigger: ".cards_list",
        scroller: "#main",
        start:"top 50%",
        end: "top 20%",
        // pin: true,
        // scrub: true,
        // markers:true
      },
})

var tl = gsap.timeline();
tl.
to("#nav img, #nav_right  ",{
     y:0,
     ease:Expo.easeInout,
     duration:1 
})
.from(".heading1",{
     y:100,ease:Expo.easeInout,
     opacity:0,
     duration:1,
     delay:-1
})
.from(".para ",{
    opacity:0,
    ease:Expo.easeInout,
    duration:1,
    delay:-.5
})
