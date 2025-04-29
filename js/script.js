$(document).ready(() => {
  const adjustContent = () => {
    if(window.innerWidth <= 991){
      console.log('resize less than 991');
      $("body").removeClass("vh-100");
      $("#social-links").removeClass("position-absolute top-0 end-0");
      $(".card").removeClass("px-5 py-3");
      $("#projects-container").removeClass("p-5");

      $("body").addClass("h-100");
      $("#social-links").addClass('my-3');
      $(".card").addClass("px-3");
      $("#projects-container").addClass("my-3 p-0");
    } else {
      console.log('resize more than 991');
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
