window.onload = function() {
 startTabExcursion();

};
// // Get the element with id="defaultOpen" and click on it
function startTabExcursion() {
   document.getElementById("excur").click();
}

// side nav voor submenu topics
function excursion(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentEx");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinksEx");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}