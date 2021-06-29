function Subject(Name, Time, Difficulty, Type) {
  this.name = Name;
  this.time = Time;
  this.Difficulty = Difficulty;
  this.Type = Type;
}



function init() 
{
  document.addEventListener('touchstart', handleTouchStart, false);        
  document.addEventListener('touchmove', handleTouchMove, false);
  
  var xDown = null;                                                        
  var yDown = null;
  
  function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }                                                     
  
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };                                                
  
  function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
          return;
      }
  
      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;
  
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
  
      if (xDiff )
      if (xDiff < -5) {OpenMenu();}
      if (xDiff > 5) {CloseMenu();}
      /* reset values */
      xDown = null;
      yDown = null;                                             
  };
}
function OpenMenu() 
{
  document.getElementById("MenuDiv").style.display = "block";
}
function CloseMenu() 
{
  document.getElementById("MenuDiv").style.display = "none";
}

function Redirect(link) 
{
  window.location.href = "/" + link;
}

function changeSubject(p1) 
{
let InputSubject = new Subject(prompt("subjectName?"),prompt("SubjectDuration? (in min)"),0,0);
let subjectStorageName = "Subject" + p1;
localStorage.setItem(subjectStorageName,JSON.stringify(InputSubject));
updateTable();
}
function ChangeBreakTime() 
{

  let breaktime = prompt("BreakTime? (in min)");
  localStorage.setItem('BreakTime',breaktime);
} 
function updateTable() 
{
document.getElementById("BreakTime").innerHTML = localStorage.getItem('BreakTime');
if (localStorage.getItem("Subject1").includes("name")) {document.getElementById("Item3").innerHTML = JSON.parse(localStorage.getItem("Subject1")).name; document.getElementById("ItemValue3").innerHTML = JSON.parse(localStorage.getItem("Subject1")).time;}
if (localStorage.getItem("Subject2").includes("name")) {document.getElementById("Item4").innerHTML = JSON.parse(localStorage.getItem("Subject2")).name; document.getElementById("ItemValue4").innerHTML = JSON.parse(localStorage.getItem("Subject2")).time;}
if (localStorage.getItem("Subject3").includes("name")) {document.getElementById("Item5").innerHTML = JSON.parse(localStorage.getItem("Subject3")).name; document.getElementById("ItemValue5").innerHTML = JSON.parse(localStorage.getItem("Subject3")).time;}
if (localStorage.getItem("Subject4").includes("name")) {document.getElementById("Item6").innerHTML = JSON.parse(localStorage.getItem("Subject4")).name; document.getElementById("ItemValue6").innerHTML = JSON.parse(localStorage.getItem("Subject4")).time;}
if (localStorage.getItem("Subject5").includes("name")) {document.getElementById("Item7").innerHTML = JSON.parse(localStorage.getItem("Subject5")).name; document.getElementById("ItemValue7").innerHTML = JSON.parse(localStorage.getItem("Subject5")).time;}
if (localStorage.getItem("Subject6").includes("name")) {document.getElementById("Item8").innerHTML = JSON.parse(localStorage.getItem("Subject6")).name; document.getElementById("ItemValue8").innerHTML = JSON.parse(localStorage.getItem("Subject6")).time;}
if (localStorage.getItem("Subject7").includes("name")) {document.getElementById("Item9").innerHTML = JSON.parse(localStorage.getItem("Subject7")).name; document.getElementById("ItemValue9").innerHTML = JSON.parse(localStorage.getItem("Subject7")).time;}

}
function initmenu() 
{
document.getElementById("coinDivText").innerHTML = localStorage.getItem('MoneyAmount');
}
initmenu();
OpenMenu();
init();
updateTable();