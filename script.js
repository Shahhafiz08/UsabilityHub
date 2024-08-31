function homePageAnimation(){
    // Banner Text

gsap.from(".top-banner ",{
    y:-60,
    opacity:0,
    duriation:0.3,
    delay:.3,
})
// Nav-bar animation
gsap.registerPlugin()

var tl = gsap.timeline();
tl.from(".nav-menu .company-logo , .nav-menu .nav-links ul li , .nav-menu .company-logo ,.burger",{
    y:-60,
    opacity:0,
    duration:0.3,
    delay:.4,
    stagger:0.2
})
tl.from(".header-left h1 , .header-left p",{
    opacity:0,
    x:-100,
    duration:0.3,
})

tl.from(" .header-left .primary-button",{
    opacity:0,
    duration:0.3,
})


tl.from(".header-right .img-container ",{
    opacity:0,
    x:100,
    duration:0.3,
   
},"-=0.2.5")

}
homePageAnimation();

// Companies Section
var tl2= gsap.timeline({
    scrollTrigger:{
        trigger:".companies-section",
        scroller:"body",
      
        start:"top 50%",
        end:"top 0%",
        scrub:3
    }
})
tl2.from(".company-header",{
    y:100,
    opacity:0,

})
tl2.from(".logos a",{
    y:100,
    opacity:0,
    stagger:.1
})


// Features Section 

var tl3= gsap.timeline({
    scrollTrigger:{
        trigger:".features-section",
        scroller:"body",
        start:"top 50%",
        end:"top 0%",
        scrub:3
    }
})
tl3.from(".features-header h2",{
    y:100,
    opacity:0,
})
tl3.from(".features-header a",{
    y:100,
    opacity:0,
})
tl3.from(".features-cards .card.left",{
    x:-100,
    opacity:0,
    stagger:0.2
})
tl3.from(".features-cards .card.right",{
    x:100,
    opacity:0,
    stagger:0.2
})
tl3.from(".features-cards .card.middle",{
    y:100,
    opacity:0,
    stagger:0.2
})

// Big feature section 1
var tl4= gsap.timeline({
    scrollTrigger:{
        trigger:".bfs-1",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:3
    }
})

tl4.from(".bfs-1 .bf-container .bf-left img",{
    x:-300,
    opacity:0,
  

})
tl4.from(".bfs-1 .bf-right p,.bfs-1 .bf-right h3 ,.bfs-1 .bf-right img,.bfs-1 .bf-right div",{
    x:300,
    opacity:0,
    stagger:.1

})
// Big feature section 2
var tl5= gsap.timeline({
    scrollTrigger:{
        trigger:".bfs-2",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:3
    }
})
tl5.from(".bfs-2 .bf-left img",{
    x:300,
    opacity:0,
   

})
tl5.from(".bfs-2 .bf-right p,.bfs-2 .bf-right h3 ,.bfs-2 .bf-right img,.bfs-2 .bf-right div",{
    x:-300,
    opacity:0,
    stagger:.1

})
// Big feature section 3
var tl6= gsap.timeline({
    scrollTrigger:{
        trigger:".bfs-3",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:3
    }
})

tl6.from(".bfs-3 .bf-container .bf-left img",{
    x:-300,
    opacity:0,
  

})
tl6.from(".bfs-3 .bf-right p,.bfs-3 .bf-right h3 ,.bfs-3 .bf-right img,.bfs-3 .bf-right div",{
    x:300,
    opacity:0,
    stagger:.1

})


// Examples Section
var tl7=gsap.timeline({
    scrollTrigger:{
        trigger:".example-section",
        scroller:"body",

        start:"top 90%",
        end:"top 50%",
        scrub:3


    }
})

tl7.from(".example-header h2",{
    y:100,
    opacity:0,
})
tl7.from(".example-header a",{
    y:100,
    opacity:0,
})
tl7.from(".example-cards .card-left",{
    x:-100,
    opacity:0,

},"=-.5")
tl7.from(".example-cards .card-right",{
    x:100,
    opacity:0,

},"=-.5")

// Try section

var tltry=gsap.timeline({
    scrollTrigger:{
        trigger:".try-section",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:3

    }
});

tltry.from(".left-try h2 ,.left-try #tltry ,.left-try h3 ",{
    x:-100,
    opacity:0,
    stagger:.3

},"=-.6")
tltry.from(".try-stats ul:nth-child(1)",{
    x:-100,
    opacity:0,
    stagger:.3

},"=-.5")
tltry.from(".try-stats ul:nth-child(2)",{
    x:100,
    opacity:0,
    stagger:.3

},"=-.5")

tltry.from(".button-try .try-primary-button,.button-try span,.button-try .try-secondry-button",{
    opacity:0
})
var rule = CSSRulePlugin.getRule(".right-try::before");
tltry.from(".right-try img, .right-try p ",{
    opacity:0,
    scale:2

},"=-.6")
tltry.from(rule,{
    cssRule: {
        opacity:0,
        scale:2
      }

},"=-.6")
// Cta Section

var tlcta=gsap.timeline({
    scrollTrigger:{
        trigger:".cta-section",
        scroller:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:3

    }
})
tlcta.from(".cta-container h3,.cta-container p,.cta-container a",{
    opacity:0,
    y:-300,

})
// Footer Section 

var tlfooter=gsap.timeline({
    scrollTrigger:{
        trigger:".footer-container",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:3

    }
})

tlfooter.from(".footer-logo",{
    opacity:0,
    x:-300,
    delay:1
} ,"=-.8")
tlfooter.from(".big-list .products",{
    opacity:0,
    x:300,
},"=-.8")
tlfooter.from(".big-list .card-sorting",{
    opacity:0,
    x:300,
},"=-.8")
tlfooter.from(".big-list .resources",{
    opacity:0,
    x:300,
},"=-.8")

// Subfooter Section
var tlsubfooter=gsap.timeline({
    scrollTrigger:{
        trigger:".footer-container",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:3

    }
})
tlsubfooter.from(".policy li",{
    opacity:0,
    y:50,
    stagger:.3,
    delay:1
})
tlsubfooter.from(".socials li",{
    opacity:0,
    y:50,
    stagger:.3
})


