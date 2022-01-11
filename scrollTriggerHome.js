gsap.registerPlugin(ScrollTrigger);

window.onload = (event) => {

  /*START GSAP CONTACT*/
  ScrollTrigger.matchMedia({
    // all
    "(min-width: 1280px)": function () {

      
      //////////////// SERVICES ////////////////
      gsap.set(".textService1", {
      });

      gsap.set(".imageService", {
        zIndex: (i, target, targets) => targets.length - i,
      });

      gsap.set(".printRot", {
        opacity:0,

        zIndex: (i, target, targets) => targets.length - i,
      });

      gsap.set('.circleEnlarge',{
        opacity:0,
        borderRadius: 500,

      })

      var texts = gsap.utils.toArray(".textService1");
      var images = gsap.utils.toArray(".imageService");
      var ps = gsap.utils.toArray(".printRot");
      var circle = gsap.utils.toArray(".circleEnlarge");

      ps.forEach((ps, i) => {
        var tal = gsap.timeline({
          scrollTrigger: {
            trigger: ".serviceTrigger",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: 0.8,
            toggleActions: "play none reverse none",
            invalidateOnRefresh: true,
            markers: false,
          },
        });

        switch (i) {
          case 1:
   
            break;

            case 3:
              tal.fromTo(
                ps,
                { duration: 0.5, opacity: 1, rotation: 0, ease: "none" },
                { duration: 0.5, opacity: 0, rotation: 180, ease: "none" }
              );
              break;
  
          default:
            tal.fromTo(
              ps,
              { duration: 0.5, opacity: 0, rotation: 0, ease: "none" },
              { duration: 0.5, opacity: 1, rotation: 90, ease: "none" }
            ).to(
              ps,
              { duration: 0.5, opacity: 0, rotation: 180, ease: "none" },);
            break;
        }
      });

      texts.forEach((text, i) => {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".serviceTrigger",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: 0.8,
            toggleActions: "play none reverse none",
            markers: false,
            invalidateOnRefresh: true,
          },
        });

        tl.to(text, {
          duration: 0.5,
          opacity: 1,
          y: "50%",
          ease: "power1.inOut",
        }).to(
          text,
          { duration: 0.5, opacity: 0, y: "0%", ease: "power1.inOut" },
          0.66
        );
      });

      images.forEach((image, i) => {
        var tol = gsap.timeline({
          scrollTrigger: {
            trigger: ".serviceTrigger",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: 0.8,
            toggleActions: "play none reverse none",
            markers: false,
            invalidateOnRefresh: true,
          },
        });

        if(i == 3 ){
          tol.to(image, { duration: 0.5,  opacity:1,  }).to(image,{duration: 0.5, scale: 12});

        } else{
          tol
          .to(image, {
            duration: 0.5,
            opacity: 1,
            y: "50%",
            ease: "power1.inOut",
          })
          .to(
            image,
            { duration: 0.5, opacity: 0, y: "0%", ease: "power1.inOut" },
            0.66
          );
        }

       
      });

      circle.forEach((cir, i) => {
        var circleAnim = gsap.timeline({
          scrollTrigger: {
            trigger: ".serviceTrigger",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: 0.8,
            toggleActions: "play none reverse none",
            markers: false,
            invalidateOnRefresh: true,
            
          },
        });
        console.log(i);

        circleAnim.to(cir, { duration: 0.5,  scale:200, opacity:1,  y:100, });
      });

      ScrollTrigger.create({
        trigger: ".serviceTrigger",
        scrub: 0.8,
        pin: true,
        start: () => "top top",
        end: () => "+=" + 3 * window.innerHeight,
        invalidateOnRefresh: true,
        markers: false,
      });
   //////////////// CONTACT ////////////////
  




    },
  });
};
