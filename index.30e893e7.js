function delay(n) {
    n = n || 2000;
    return new Promise((done)=>{
        setTimeout(()=>{
            done();
        }, n);
    });
}
function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });
    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.2
    });
    tl.set(".loading-screen", {
        left: "-100%"
    });
}
function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".transition-this", {
        duration: 1,
        opacity: 0,
        stagger: 0.2,
        delay: 0.1
    });
}
function slideIn() {
    var tl = gsap.timeline();
    tl.from(".slide-in", {
        duration: 2,
        x: -20,
        opacity: 0,
        stagger: .2
    }, "+=2");
}
function fadeIn() {
    var tl = gsap.timeline();
    tl.from(".fade-in", {
        duration: 2,
        opacity: 0,
        delay: 1
    });
}
function fadeOut() {
    var tl = gsap.timeline();
    tl.to(".fade-out", {
        duration: 1,
        opacity: 0
    });
}
function herName() {
    var tl = gsap.timeline();
    let typeSplit = new SplitType(".her-name", {
        types: "words, chars"
    });
    let chars = typeSplit.chars;
    tl.from(chars, {
        y: "20%",
        opacity: 0,
        duration: 3,
        ease: "power4.inOut",
        stagger: 0.05,
        delay: 1
    });
}
function slideTop() {
    var tl = gsap.timeline();
    tl.from(".slide-top", {
        duration: 2,
        opacity: 0,
        y: 30,
        stagger: .2,
        delay: 1
    });
}
$(function() {
    barba.init({
        sync: true,
        transitions: [
            {
                async leave (data) {
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                },
                async enter (data) {
                    fadeIn();
                    contentAnimation();
                    herName();
                    slideIn();
                    slideTop();
                },
                async once (data) {
                    fadeIn();
                    contentAnimation();
                    herName();
                    slideIn();
                    slideTop();
                },
                async beforeLeave (data) {
                    fadeOut();
                }
            }
        ],
        views: [
            {
                namespace: "home",
                afterEnter ({ next: next1 }) {
                    let script = document.createElement("script");
                    script.src = "public/scripts/main.js";
                    next1.container.appendChild(script);
                }
            },
            {
                namespace: "art",
                afterEnter ({ next: next1 }) {
                    let script = document.createElement("script");
                    script.src = "public/scripts/main.js";
                    next1.container.appendChild(script);
                }
            },
            {
                namespace: "about",
                afterEnter ({ next: next1 }) {
                    let script = document.createElement("script");
                    script.src = "public/scripts/main.js";
                    next1.container.appendChild(script);
                }
            },
            {
                namespace: "hire",
                afterEnter ({ next: next1 }) {
                    let script = document.createElement("script");
                    script.src = "public/scripts/main.js";
                    next1.container.appendChild(script);
                }
            }
        ]
    });
    barba.hooks.enter(()=>{
        window.scrollTo(0, 0);
    });
    barba.hooks.after(()=>{
        butter.init({
            cancelOnTouch: true
        });
        var script = document.createElement("script");
        script.src = "public/scripts/main.js";
        next.container.appendChild(script);
    });
});

//# sourceMappingURL=index.30e893e7.js.map
