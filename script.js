const buttonHtml = document.getElementById("button-html");

$("#button-html").click(function() {
  const i = buttonHtml.firstElementChild;
  if ($("#text-html").is(":hidden")) {
    $("#text-html").slideDown("slow");
    i.className = 'fas fa-angle-down';
  } else if ( $("#text-html").is(":hidden")) {
    $( "#text-html" ).show();
  } else {
    $( "#text-html" ).slideUp();
    i.className = 'fas fa-angle-right';
  }
});


const buttonCss = document.getElementById("button-css");

$("#button-css").click(function() {
  const i = buttonCss.firstElementChild;
  if ($("#text-css").is(":hidden")) {
    $("#text-css").slideDown("slow");
    i.className = 'fas fa-angle-down';
  } else if ( $("#text-css").is(":hidden")) {
    $( "#text-css" ).show();
  } else {
    $( "#text-css" ).slideUp();
    i.className = 'fas fa-angle-right';
  }
});


const buttonJs = document.getElementById("button-js");

$("#button-js").click(function() {
  const i = buttonJs.firstElementChild;
  if ($("#text-js").is(":hidden")) {
    $("#text-js").slideDown("slow");
    i.className = 'fas fa-angle-down';
  } else if ( $("#text-js").is(":hidden")) {
    $( "#text-js" ).show();
  } else {
    $( "#text-js" ).slideUp();
    i.className = 'fas fa-angle-right';
  }
});
