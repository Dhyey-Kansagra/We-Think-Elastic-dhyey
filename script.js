gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});
// .......................................................
gsap.from(".big", {
    y: 200,
    stagger: 0.1,
    duration: 1.2,
    ease: "power4.out"
});
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
gsap.registerPlugin(ScrollTrigger);

gsap.from(".v1 video", {
  scale: 0.8,
  opacity: 0,
  scrollTrigger: {
    trigger: ".v1",
    start: "top 50%",
    end: "top 40%",
    scrub: 1
  }
});
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
gsap.from(".line", {
  y: 150,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".text",
    start: "top 70%"
  }
});
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
const images = document.querySelectorAll(
  ".ram1, .image, .ram"
);

images.forEach((img) => {

  img.addEventListener("mouseenter", () => {
    gsap.to(img, {
      scale: 1.08,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  });

});
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
const logos = document.querySelectorAll(".log");

logos.forEach((logo) => {

  logo.addEventListener("mouseenter", () => {
    gsap.to(logo, {
      scale: 1.15,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

});

// .........,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".v1 video", {
//     width: "60%",
//     scrollTrigger: {
//         trigger: ".v1",
//         start: "top 100%",
//         end: "top 20%",
//         scrub: 1,
//         markers: false
//     }
//     });
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
gsap.registerPlugin(ScrollTrigger);
gsap.to(".wpl", {
    x: "-50%",
    scrollTrigger: {
        trigger: ".jsam",
        start: "top top",
        end: "+=2000",
        scrub: 2,
        pin: true,
        markers: false
    }
});
gsap.to(".d1", {
    y: 20,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    scrub: 3,
});
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

