function navSlide(){
      const nav = document.querySelector(".nav__links");
      const burger = document.querySelector(".hamburger");
      const bod = document.querySelector(".whew");

      function level(){
            nav.classList.toggle("nav-active");
            burger.classList.toggle("toggle");
      }
            burger.addEventListener('click', level);
}

/*function retToDef(){
      const bod = document.querySelector(".hope");
      const nav = document.querySelector(".nav__links");

      function reseter(){
            nav.classList.toggle("nav-disabled");
      }
      bod.addEventListener('click', reseter);
}*/

navSlide();