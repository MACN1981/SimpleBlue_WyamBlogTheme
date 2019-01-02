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
    const viewport = Math.max(document.documentElement.clientHeight, window.innerHeight)
    const marker01 = viewport * 0.1;
    const marker02 = viewport;
    const variation = 1/(viewport * 0.1);
    const element = window.top.document.querySelectorAll('.backtotop')[0];
    if (offset > marker01 && offset <= marker02)
    {
      element.style.opacity = 1 - ((marker02 - offset) * variation);
      element.style.display = 'block';
    }
    else if (offset > marker02)
    {
      element.style.opacity = 1;
      element.style.display = 'block';
    }
    else{
      element.style.opacity = 0;
      element.style.display = 'none';
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

//archive links tree behave like an accordion 
var setAccordion = function() {
  const trees = window.top.document.querySelectorAll( "ol.archivetree");
  for (let index = 0; index < trees.length; index++) {
    const tree = trees[index];
    tree.addEventListener('change', function(event) {
      let callername = event.target.id;
      let calleryear = callername.slice(0,5);
      console.log(calleryear)
      let checkboxes = tree.querySelectorAll( 'input[type="checkbox"]');
      for (let index = 0; index < checkboxes.length; index++) {
        const element = checkboxes[index];
        let elementname = element.id;
        let elementyear = elementname.slice(0,5);
        let isyear = ((elementname.length) === 5);
        if (isyear){
          if (elementyear !== calleryear){
            element.checked = false;
          }
        }else{
          if (elementyear !== calleryear){
            element.checked = false;
          }else{
            if (elementname !== callername){
              element.checked = false;
            }
          }
        }
      }
    });
    
  }

};

//set all in motion
ready(function(){
  hideNoScript();
  modeChange();
  setbacktotop();
  setAccordion();
});






