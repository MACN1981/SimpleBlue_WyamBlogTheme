"use strict";
/*
  This scripts provide only quality of life functionalities for the page.
  You can disable it and the page should be fine.
*/

//ready function
function ready(callback){
  // in case the document is already rendered
  if (document.readyState!='loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') callback();
  });
}

//change document from/to dark mode by toogling dark class in body
var modeChange = function() {

  var darkModeIn = function() {
    const container = window.top.document.querySelectorAll( ".container" );
    const className = "dark";
    container[0].classList.add(className);
  };
  
  var darkModeOut = function() {
    const container = window.top.document.querySelectorAll( ".container" );
    const className = "dark";
    container[0].classList.remove(className);
  };

  if (window.localStorage.getItem('DarkModeOn') === "true") {
    darkModeIn();
    document.getElementById("buttondarkmode").checked = true;
  } else {
    darkModeOut();
    document.getElementById("buttondarkmode").checked = false;
  }

  document.getElementById("buttondarkmode").addEventListener('change', function() {
    if(this.checked) {
      window.localStorage.setItem('DarkModeOn',true);
      darkModeIn();
    } else {
      window.localStorage.setItem('DarkModeOn',false);
      darkModeOut();
    }
  });

}

//hide back to top button until user scroll down
var setbacktotop = function() {

  var tooglebacktotop = function(offset) {
    const element = window.top.document.querySelectorAll('.backtotop')[0];
    if (offset === 0){
      element.style.opacity = 0
    }
    else 
    {
      element.style.opacity = 1;
    }
  }

  var throttleevent = function() {
    const last_known_scroll_position = window.scrollY;
    let ticking = false;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        tooglebacktotop(last_known_scroll_position);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.onscroll = throttleevent;
  tooglebacktotop();
}

//show elements that only work with javascript
var hideNoScript = function() {
  const elementstohide = window.top.document.querySelectorAll('.noscript');
  for (let index = 0; index < elementstohide.length; index++) {
    const element = elementstohide[index];
    element.classList.remove('noscript');
  }
}

//set all in motion
ready(function(){
  hideNoScript();
  modeChange();
  setbacktotop();
});







