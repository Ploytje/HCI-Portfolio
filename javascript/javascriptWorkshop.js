window.onload = function() {
 startTabWorkshop();

};
// // Get the element with id="defaultOpen" and click on it
function startTabWorkshop() {
   document.getElementById("assig").click();
}


// hoofdmenu
function workshop(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentMenu");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkMenu");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
