let subjectOffset = 0;
let TimeRemaining =0;
let TimeSpend = 10;
let TimeSinceLastBreak =0;
let TimeInBetweenBreaks;

var SubjectArray = [];
const chartobject = new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Time Spend", "Time Left"],
      datasets: [{
        label: "",
        backgroundColor: ["#dea5a4", "#ffffff"],
        data: [2478,5267]
      }]
    },
    options: {
      title: {
        display: true,
        text: ''
      }
    }
});


function Subject(Name, Time, Difficulty, Type) {
  this.name = Name;
  this.time = Time;
  this.Difficulty = Difficulty;
  this.Type = Type;
}
chartobject.data.datasets[0].backgroundColor[0] = "#" +localStorage.getItem('GraphCol');
chartobject.update();

for (let  i=1;i<8; i++) 
{
SubjectStorageName = "Subject" + i;
let CreatedSubject = JSON.parse(localStorage.getItem(SubjectStorageName));
SubjectArray.push(CreatedSubject);
}

function updateTable(offset) {
document.getElementById("subject0").innerHTML = SubjectArray[offset].name;
document.getElementById("subject1").innerHTML = SubjectArray[offset+1].name;
document.getElementById("subject2").innerHTML = SubjectArray[offset+2].name;
document.getElementById("subject3").innerHTML = SubjectArray[offset+3].name;

document.getElementById("subjectTime0").innerHTML = SubjectArray[offset].time + 'min';
document.getElementById("subjectTime1").innerHTML = SubjectArray[offset+1].time + 'min';
document.getElementById("subjectTime2").innerHTML = SubjectArray[offset+2].time + 'min';
document.getElementById("subjectTime3").innerHTML = SubjectArray[offset+3].time + 'min';
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
  
      console.log(xDiff);
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
function initmenu() 
{
document.getElementById("coinDivText").innerHTML = localStorage.getItem('MoneyAmount');
}

function initValues()
{
  localStorage.removeItem('MoneyAmount');
  localStorage.removeItem('GraphCol');
  if (localStorage.getItem('MoneyAmount') == null) {localStorage.setItem('MoneyAmount',5000);}
  if (localStorage.getItem('GraphCol') == null) {localStorage.setItem('GraphCol','dea5a4');}
  if (localStorage.getItem('BreakTime') == null) {localStorage.setItem('BreakTime',10);}
  for (let i =1; i<8; i++) 
  {
    let StringToTest = "Subject" + i;
    let EmptySubject = new Subject("NAN",0,0,0)
    if (localStorage.getItem(StringToTest) == null) {localStorage.setItem(StringToTest,JSON.stringify(EmptySubject));}
  }
}
function startTimer() 
{
TimeSpend =0;
TimeRemaining = SubjectArray[subjectOffset].time*60;
TimeInBetweenBreaks = TimeRemaining/4;
console.log(TimeInBetweenBreaks);
setInterval(TICK,1000);

}
function TICK() 
{
TimeSpend++;
TimeRemaining--;
TimeSinceLastBreak++;
if (TimeSinceLastBreak == TimeInBetweenBreaks) {
  alert("please Take a break of " + localStorage.getItem('BreakTime') + "min and come back");
  TimeSinceLastBreak =0;
}
chartobject.data.datasets[0].data[0] = TimeSpend;
chartobject.data.datasets[0].data[1] = TimeRemaining;
chartobject.update();
if (TimeRemaining == 0) {subjectOffset++; startTimer(); updateTable(subjectOffset);}
}

initValues();
initmenu();
OpenMenu();
init();
updateTable(0)
startTimer();