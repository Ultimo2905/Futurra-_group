 document.querySelector(".btn__sineUp__link").onclick = () => {
     document.querySelector(".fg-wrapper").style.display = "block";
     document.querySelector(".overlay").style.display = "block";
     document.querySelector("body").style.overflow = "hidden";
 };

 document.querySelector(".overlay").onclick = () => {
     document.querySelector(".fg-wrapper").style.display = "none";
     document.querySelector(".overlay").style.display = "none";
     document.querySelector("body").style.overflow = "unset";
 };

 //  Для обробки подій при кліку в формі вхід
 document.querySelector(".button").onclick = () => {
     document.querySelector(".fg-wrapper").style.display = "none";
     document.querySelector(".overlay").style.display = "none";
     document.querySelector("body").style.overflow = "unset";
 };



 let ps = document.querySelectorAll('.btn__tryForFree__link');

 function disNone(e) {
     document.querySelector(".popup").style.display = "block";
     console.log("hi")
 }
 for (var i = 0; i < ps.length; i++) {
     ps[i].addEventListener('click', disNone, false);
 }


 // menu
 const menu = document.querySelector('.navbar');
 const btn = menu.querySelector('.nav-tgl');
 const body = document.querySelector('body');
 btn.addEventListener('click', evt => {
     menu.classList.toggle('active');
     body.classList.toggle('body-hide');

 });

 // anchors
 const anchors = document.querySelectorAll('a.navbar__link')

 for (let anchor of anchors) {
     anchor.addEventListener('click', function(e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href')

         document.querySelector(blockID).scrollIntoView({
             behavior: 'smooth',
             block: 'start'
         })
     })
 }

 // можу писати і на jQuery
 jQuery(document).ready(function($) {

     var lastScrollTop = 0;
     $(window).scroll(function(event) {
         var st = $(this).scrollTop();
         if (st > lastScrollTop) {
             if (lastScrollTop > 50) {
                 $('header').addClass('hidden_header');
             } else {
                 $('header').removeClass('hidden_header');
             }
         } else {
             $('header').removeClass('hidden_header');
         }
         lastScrollTop = st;
     });

     // paralax  
     if (window.innerWidth > 768) {
         function tellPo(pr) {
             let mouseX = pr.pageX;
             let mouseY = pr.pageY;

             $("#b1").css({ "transform": "translate(" + mouseX / 60 + "px,-" + mouseY / 60 + "px)" });
             //  console.log(mouseX);
         }

         function tellPoTwo(prl) {
             let mouseXx = prl.pageX;
             let mouseYy = prl.pageY;

             $("#b2").css({ "transform": "translate(" + mouseXx / 20 + "px,-" + mouseYy / 20 + "px)" });
             //  console.log(mouseXx);
         }

         addEventListener('mousemove', tellPo, false);
         addEventListener('mousemove', tellPoTwo, false);
     };



 })