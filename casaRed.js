  var dx
  var dy
  var px 
  var py
  var vel
  var red = document.querySelector('#red');
  var tmp
  
  let cima  = document.querySelector('#cima')
  let left = document.querySelector('#left')
  let bottom = document.querySelector('#bottom')
  let right = document.querySelector('#right')

 function mover () {
      dx = 0
      dy = 0
      px = 330
      py = 1145
      vel = 10;
      
      tmp = setInterval(enterFrame,20);
      
 }
 cima.addEventListener('touchstart', ()=>{
      dy=-0.5;
      red.src = 'redyA.gif'
 })
 bottom.addEventListener('touchstart', ()=>{
      dy=0.5;
      red.src = 'red-yA.gif'
   
 })
 left.addEventListener('touchstart', ()=>{
      dx=-0.5;
      red.src = 'red-xA.gif'
      
 })
 right.addEventListener('touchstart', ()=>{
      dx=0.5;
      red.src = 'redxA.gif'
 })
 
 
 cima.addEventListener('touchend', ()=>{
      dy=0;
      red.src = 'redy.png' })
 bottom.addEventListener('touchend', ()=>{
      dy=0;
      red.src = 'red-y.png'
 })
 left.addEventListener('touchend', ()=>{
      dx=0;
      red.src = 'red-x.png'
 })
 right.addEventListener('touchend', ()=>{
      dx=0;
      red.src = 'redx.png'
 })
 
 


    function enterFrame(){
         px+=dx*vel
         py+=dy*vel
        
        if (px >= 1050) {
             let Body = document.querySelector('#Body')
             Body.style.backgroundPosition = 'center right'
             red.offsetLeft = 150
        }else if (px <= 100) {
             Body.style.backgroundPosition = 'center left'
             red.offsetLeft = 250
        }else if (px >= 150) {
             Body.style.backgroundPosition = 'center center'
        }
        if (px > 225 && px < 440 && py > 1145) {
             window.open('index.html')
        }
        if (px >= 0 && px <225 && py >= 1145) {
             py = 0
             py = red.offsetTop
        }
       if (py < 0){
        py = 0; dy = 0;
       }
       
       if (py + red.clientHeight > Body.clientHeight) {
          py = Body.clientHeight - red.clientHeight; dy = 0; 
       }
       if (px < 0) { px = 0; dx = 0; } 
        
       if (px + red.clientWidth > Body.clientWidth) { 
          px = Body.clientWidth - red.clientWidth; dx = 0;
       }
       
       
       red.style.left=px+'px'
       red.style.top=py+'px'
       
         
       
  }
 window.addEventListener('load',mover);


