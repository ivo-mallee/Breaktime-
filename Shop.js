var ShopArray = [];

function Item(Name, Cost,Attribute) {
  this.name = Name;
  this.Cost = Cost;
  this.Attribute = Attribute;
}




let CreatedSubject = new Item("Red Circle",10,"FF0000");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("Default",20,"dea5a4");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("pink  Circle",25,"FFC0CB");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("pastel Circle",16,"ffd1dc");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("black Circle",54,"000000");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("brown Circle",12,"A52A2A");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("yellow Circle",80,"FFFF00");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("hot Pink Circle",69,"FF69B4");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("Green circle",420,"008000");
ShopArray.push(CreatedSubject);
CreatedSubject = new Item("Navy blue Circle",80,"000080");
ShopArray.push(CreatedSubject);




function updateShop(offset) 
{
document.getElementById("Item0").innerHTML = ShopArray[offset].name;
document.getElementById("Item1").innerHTML = ShopArray[offset+1].name;
document.getElementById("Item2").innerHTML = ShopArray[offset+2].name;
document.getElementById("Item3").innerHTML = ShopArray[offset+3].name;
document.getElementById("Item4").innerHTML = ShopArray[offset+4].name;
document.getElementById("Item5").innerHTML = ShopArray[offset+5].name;
document.getElementById("Item6").innerHTML = ShopArray[offset+6].name;
document.getElementById("Item7").innerHTML = ShopArray[offset+7].name;
document.getElementById("Item8").innerHTML = ShopArray[offset+8].name;
document.getElementById("Item9").innerHTML = ShopArray[offset+9].name;

document.getElementById("Item0").addEventListener("click", function() {BuyItem(0)});
document.getElementById("Item1").addEventListener("click", function() {BuyItem(1)});
document.getElementById("Item2").addEventListener("click", function() {BuyItem(2)});
document.getElementById("Item3").addEventListener("click", function() {BuyItem(3)});
document.getElementById("Item4").addEventListener("click", function() {BuyItem(4)});
document.getElementById("Item5").addEventListener("click", function() {BuyItem(5)});
document.getElementById("Item6").addEventListener("click", function() {BuyItem(6)});
document.getElementById("Item7").addEventListener("click", function() {BuyItem(7)});
document.getElementById("Item8").addEventListener("click", function() {BuyItem(8)});
document.getElementById("Item9").addEventListener("click", function() {BuyItem(9)});

document.getElementById("ItemPrice0").innerHTML = "$" + ShopArray[offset].Cost;
document.getElementById("ItemPrice1").innerHTML = "$" + ShopArray[offset+1].Cost;
document.getElementById("ItemPrice2").innerHTML = "$" + ShopArray[offset+2].Cost;
document.getElementById("ItemPrice3").innerHTML = "$" + ShopArray[offset+3].Cost;
document.getElementById("ItemPrice4").innerHTML = "$" + ShopArray[offset+4].Cost;
document.getElementById("ItemPrice5").innerHTML = "$" + ShopArray[offset+5].Cost;
document.getElementById("ItemPrice6").innerHTML = "$" + ShopArray[offset+6].Cost;
document.getElementById("ItemPrice7").innerHTML = "$" + ShopArray[offset+7].Cost;
document.getElementById("ItemPrice8").innerHTML = "$" + ShopArray[offset+8].Cost;
document.getElementById("ItemPrice9").innerHTML = "$" + ShopArray[offset+9].Cost;

}

function BuyItem(number) 
{
if (confirm("are you sure?")) {
if (localStorage.getItem('MoneyAmount') - ShopArray[number].Cost >0) {
localStorage.setItem("GraphCol",ShopArray[number].Attribute);
let money = localStorage.getItem('MoneyAmount') - ShopArray[number].Cost;
localStorage.setItem('MoneyAmount',money);
} else {alert("not Enough Money")}
initmenu();
}

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

function initmenu() 
{
document.getElementById("coinDivText").innerHTML = localStorage.getItem('MoneyAmount');
}
initmenu();
OpenMenu();
init();
updateShop(0);