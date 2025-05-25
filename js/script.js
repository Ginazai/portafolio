$(document).ready(() => {
  /*Possible implementation for device restriction*/
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
  const urlParams = new URLSearchParams(window.location.search);
  var page_lang = urlParams.get("lang");
  page_lang = page_lang == null ? "es" : page_lang;
  page_lang = page_lang == "es" ? 0 : 1; //For targeting the lang index in the lang array (see lang.js file)
  const setLang = () => {
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
  }
  setLang();
  const adjustContent = () => {
    if(window.innerWidth <= 991){
      $("body").removeClass("vh-100");
      $("#social-links").removeClass("position-absolute top-0 end-0");
      $("#bottom-items").removeClass("position-absolute bottom-0 start-50 translate-middle");
      $(".card").removeClass("px-5 py-3");
      $("#projects-container").removeClass("p-5");
      $("#pagination-pages").removeClass("text-center");

      $("body").addClass("h-100");
      $("#social-links").addClass('my-3');
      $("#bottom-items").addClass('my-2 p-0');
      $(".card").addClass("px-3");
      $("#projects-container").addClass("my-3 p-0");
    } else {
      $("body").removeClass("h-100");
      $("#social-links").removeClass('my-3');
      $("#bottom-items").removeClass('my-2 p-0');
      $(".card").removeClass("px-3");
      $("#projects-container").removeClass("my-3 p-0");

      $("body").addClass("vh-100");
      $("#social-links").addClass("position-absolute top-0 end-0");
      $("#bottom-items").addClass("position-absolute bottom-0 start-50 translate-middle");
      $(".card").addClass("px-5 py-3");
      $("#projects-container").addClass("p-5");
      $("#pagination-pages").addClass("text-center");
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
  var theme_elem = $("#theme");
  var light_theme = theme_elem.hasClass("fa-sun-o");
  $("#theme").on('click', () => {
    theme_elem = $("#theme");
    light_theme = theme_elem.hasClass("fa-sun-o");
    if(light_theme){
      $("html").attr("data-bs-theme", "dark");
      theme_elem.removeClass("fa-sun-o");
      theme_elem.addClass("fa-moon-o");
      $("#light").css("background", "white");
      light_theme = false;
    } else {
      $("html").attr("data-bs-theme", "light");
      theme_elem.removeClass("fa-moon-o");
      theme_elem.addClass("fa-sun-o");
      $("#light").css("background", "#D2FF1F");
      light_theme = true;
    }
  });
  $("body").on('mouseover', () => {
    console.log("mouseover");
    if(light_theme){
      $("body").css("background-position", "top right");
    } else {
      $("body").css("background-position", "bottom right");
    }
  });
  $("body").on('mouseleave', () => {
    console.log("mouseleave");
    if(light_theme){
      $("body").css("background-position", "bottom left");
    } else {
      $("body").css("background-position", "top left");
    }
  });
  const template = (data) => {
    var output = "";
    data.map((elem) => {
      var link = elem["link"];
      var name = elem["name"];
      output += `<li><a href='${link}' target='_blank'>${name}</a></li>`;
    });
    return output;
  }
  
  const setPagination = () => {
    var links_source = lang[page_lang]["links"];
    $('#pagination-pages').pagination({
      dataSource: links_source,
      pageSize: 5,
      position: 'bottom',
      // showPrevious: false,
      // showNext: false,
      ulClassName: 'btn-group rounded-1',
      pageClassName: 'btn',
      prevClassName: 'btn rounded-start-1',
      nextClassName: 'btn rounded-end-1',
      callback: function(data, pagination) {
          // template method of yourself
          var html = template(data);
          $("#projects").html(html);
      }
    });
  }
  setPagination();
  $(".fa-language").click(()=>{
    console.log(`page lang: ${page_lang}`);
    page_lang = page_lang == 0 ? "en" : "es";
    // Set a query parameter before reloading
    window.location.href = window.location.pathname + `?lang=${page_lang}`;
  });
});
