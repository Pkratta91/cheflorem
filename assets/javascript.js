/* Open Search Function*/
function opensearchFunction(){
  document.getElementById('searchContainer').style.display = "block";
}

/*Close Search Function*/
function closesearcFunction(){
  document.getElementById("searchContainer").style.display = "none";
}

/*Mobile Menu*/
function openNav() {
  document.getElementById("mobileNav").style.width = "100%";
}

function closeNav(){
  document.getElementById("mobileNav").style.width = "0px";
}

/*Slick Carousel*/

$('.carouselContainer').slick({
  arrows: true,
  centerMode: true,
  centerPadding: '10%',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '10%',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 981,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 761,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    }
  ]
});

/*Filter Function*/
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("mybuttonContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
