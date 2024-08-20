const toggleActions = "restart play reverse play"

export const init = {
    scrollTrigger: {
        trigger: "#home",
        start: "top -1px",
        end: "top 0px",
        scrub: 0.1,
        toggleActions: toggleActions
    },
    // background: 'linear-gradient(-180deg, rgba(80,80,80,1), rgba(207, 207, 207, 1)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    background: 'linear-gradient(-180deg, #20153cdd, #654f9cdd), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    ease: 'none',
}

export const home = {
    scrollTrigger: {
        trigger: "#home",
        start: "top 1px",
        end: "bottom center",
        // markers: true,
        scrub: 0.1,
        toggleActions: toggleActions
    },
    // background: 'linear-gradient(-135deg, rgba(80,80,80,1), rgba(207, 207, 207, 1)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    background: 'linear-gradient(-135deg, #20153cdd, #654f9cdd), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    ease: 'none',
}


export const exp1 = {
    scrollTrigger: {
        trigger: "#experience",
        start: "top 50%",
        end: "top 25%",
        // markers: true,
        scrub: 0.1,

        toggleActions: toggleActions
    },
    // background: 'linear-gradient(-120deg, rgba(80,80,80,1), rgba(207, 207, 207, 1)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    background: 'linear-gradient(-120deg, #20153cdd, #654f9cdd), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    ease: 'none',
};

export const exp2 = {
    scrollTrigger: {
        trigger: "#experience",
        start: "top 25%",
        end: "bottom 100%",
        // markers: true,
        scrub: 0.1,

        toggleActions: toggleActions
    },
    // background: 'linear-gradient(-100deg, rgba(80,80,80,1), rgba(207, 207, 207, 1)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    background: 'linear-gradient(-100deg, #20153cdd, #654f9cdd), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    ease: 'none',
};

export const projects = {
    scrollTrigger: {
        trigger: "#experience",
        start: "bottom 100%",
        end: "bottom 50%",
        scrub: 0.1,
        // markers: true,
        toggleActions: toggleActions
    },
    // background: 'linear-gradient(-91deg, rgba(80,80,80,1), rgba(207, 207, 207, 1)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    background: 'linear-gradient(-91deg, #20153cdd, #654f9cdd), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    ease: 'none',
};

export const projects2 = {
    scrollTrigger: {
        trigger: "#experience",
        start: "bottom center",
        end: "bottom bottom",
        scrub: 0.1,
        // markers: true,
        toggleActions: toggleActions
    },
    lazy: true,
    // background: 'linear-gradient(-89deg, rgba(80,80,80,1), rgba(207, 207, 207, 1)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    background: 'linear-gradient(-89deg, #20153cdd, #654f9cdd), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    ease: 'none',
};


export const contactme = {
    scrollTrigger: {
        
        trigger: "#contact-me",
        start: "top bottom",
        end: "bottom bottom",
        // markers: true,
        scrub: 0.1,
        toggleActions: toggleActions
    },
    lazy: true,
    // background: 'linear-gradient(-45deg, rgba(80,80,80,1), rgba(207, 207, 207, 1)), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    background: 'linear-gradient(-45deg, #20153cdd, #654f9cdd), radial-gradient(circle at 18% -21%, rgba(80,80,80,1), rgba(0,0,0,.9))',
    ease: 'none',
};
