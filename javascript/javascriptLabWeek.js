window.onload = function() {
 startTabLabWeek();

};
// // Get the element with id="defaultOpen" and click on it
function startTabLabWeek() {
   document.getElementById("lab").click();
}

// side nav voor submenu topics
function labWeek(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentLab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinksLab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}