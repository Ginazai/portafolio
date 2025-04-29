$(document).ready(() => {
  // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //   // true for mobile device
  //   document.write("mobile device");
  // }else{
  //   // false for not mobile device
  //   document.write("not mobile device");
  // }

  // [...document.querySelectorAll("span.dynamic")].forEach(span => {
  //   const match = span.textContent.match(/{{(.*?)}}/)
  //   if (match.length === 2) span.innerText = content[match[1]]
  // })
  //Lenguage determiner
  var page_lang = $("html").attr("lang");
  page_lang = page_lang == "es" ? 0 : 1;

  var lang_elems = document.querySelectorAll(".lang");
  var lang_elems = Array.from(lang_elems);

  lang_elems.map((elem) => {
    const match = elem.textContent.match(/{{(.*?)}}/);
    //console.log(match);
    if (match.length === 2){
      var request = match[1];
      var response = lang[page_lang]; // 0 es : 1 en must include modifiers

      response[request] != undefined ? elem.innerText = response[request] : elem.innerText = "";

    } 
  });

  const adjustContent = () => {
    if(window.innerWidth <= 991){
      $("body").removeClass("vh-100");
      $("#social-links").removeClass("position-absolute top-0 end-0");
      $(".card").removeClass("px-5 py-3");
      $("#projects-container").removeClass("p-5");

      $("body").addClass("h-100");
      $("#social-links").addClass('my-3');
      $(".card").addClass("px-3");
      $("#projects-container").addClass("my-3 p-0");
    } else {
      $("body").removeClass("h-100");
      $("#social-links").removeClass('my-3');
      $(".card").removeClass("px-3");
      $("#projects-container").removeClass("my-3 p-0");

      $("body").addClass("vh-100");
      $("#social-links").addClass("position-absolute top-0 end-0");
      $(".card").addClass("px-5 py-3");
      $("#projects-container").addClass("p-5");

    }
  }
  adjustContent();
  $(window).on("resize change", () => {
    adjustContent();
  });
  const light = document.getElementById('light');
  const container = document.getElementById('body');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
  });
  $(".fa-github").click(()=>{window.open("https://github.com/Ginazai", "_blank");});
  $(".fa-linkedin-square").click(()=>{window.open("https://www.linkedin.com/in/rafael-caballero-ba226323a/", "_blank");});
  $(".fa-envelope").click(()=>{window.open("mailto:rafaeldc1300@gmail.com", "_blank");});
  //theme controller
  $("#theme").on('click', () => {
    const theme_elem = $("#theme");
    const current_theme = theme_elem.hasClass("fa-sun-o");

    if(current_theme){
      $("html").attr("data-bs-theme", "dark");
      theme_elem.removeClass("fa-sun-o");
      theme_elem.addClass("fa-moon-o");
      $("#light").css("background", "white");
    } else {
      $("html").attr("data-bs-theme", "light");
      theme_elem.removeClass("fa-moon-o");
      theme_elem.addClass("fa-sun-o");
      $("#light").css("background", "#D2FF1F");
    }
  });
  $("body").mouseover(() => {
    const theme_elem = $("#theme");
    const current_theme = theme_elem.hasClass("fa-sun-o");

    if(current_theme){
      $("body").css("background-position", "top right");
    } else {
      $("body").css("background-position", "bottom right");
    }
  });
  $("body").mouseleave(() => {
    const theme_elem = $("#theme");
    const current_theme = theme_elem.hasClass("fa-sun-o");

    if(current_theme){
      $("body").css("background-position", "bottom left");
    } else {
      $("body").css("background-position", "top left");
    }
  });
  // $('#demo').pagination({
  //   dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 195],
  //   callback: function(data, pagination) {
  //       // template method of yourself
  //       var html = template(data);
  //       dataContainer.html(html);
  //   }
  // });
});
