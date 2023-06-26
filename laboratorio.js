  var dx2
  var dy2
  var px2
  var py2
  var vel2
  var red2 = document.querySelector('#red2');
  var tmp2
  
  let cima2 = document.querySelector('#cima2')
  let left2 = document.querySelector('#left2')
  let bottom2 = document.querySelector('#bottom2')
  let right2 = document.querySelector('#right2')
  
  var Body2 = document.getElementById('Body2');
  
 
 

 function mover () {
      dx2 = 0
      dy2 = 0
      px2 = 414
      py2 = 1010
      vel2 = 2
     
      tmp2 = setInterval(enterFrame,20);
      
 }
 cima2.addEventListener('touchstart', ()=>{
      dy2=-2;
      red2.src = 'redyA.gif'
         
     
 })
 bottom2.addEventListener('touchstart', ()=>{
      dy2=2;
      red2.src = 'red-yA.gif'
 })
 left2.addEventListener('touchstart', ()=>{
      dx2=-2;
      red2.src = 'red-xA.gif'
 })
 right2.addEventListener('touchstart', ()=>{
      dx2=2;
      red2.src = 'redxA.gif'
 })
 
 
 cima2.addEventListener('touchend', ()=>{
      dy2=0;
      red2.src = 'redy.png' })
 bottom2.addEventListener('touchend', ()=>{
      dy2=0;
      red2.src = 'red-y.png'
 })
 left2.addEventListener('touchend', ()=>{
      dx2=0;
      red2.src = 'red-x.png'
 })
 right2.addEventListener('touchend', ()=>{
      dx2=0;
      red2.src = 'redx.png'
 })
 
  

 function enterFrame(){
      px2+=dx2*vel2
      py2+=dy2*vel2
      
      
//-------------------- final tela ------------------------//



  if (py2 >=126 && py2 <= 1014 && px2 <= -22 ) {
       //esquerda
       dx2 = 0
       px2 = red2.offsetLeft
  }
  
  
  if (py2 >= 125 && py2 <= 1014 && px2 >= 870) {
       //direita
       dx = 0
       px2 = red2.offsetLeft
  }
  
  if (px2 >= -22 && px2 <= 870 && py2 <= 125) {
       dy2  = 0
  }


 
//--------------------- Pratilheira1 ---------------------//



if () {
     
}






 
 if (py2 == 2260 && px2 == 198) { 
      Body2.style.overflowY = "auto";
      Body2.scrollBy(0, 1000000); 
      
  }
      
   let y2 = red2.getBoundingClientRect().y;
  if (y2 >= 400 && y2 < 1000) { 
      Body2.style.overflowY = "auto";
      Body2.scrollBy(0, 5); 
      
  }else if (y2 >= 1000) {
      Body2.style.overflowY = "hidden"; 
      
  } else if (y2 <= 300) { 
      Body2.style.overflowY = "auto"; Body2.scrollBy(0, -5);
      
  } else { 
      Body2.style.overflowY = "hidden";
  }
 



 
 /*  let y = red.getBoundingClientRect().y;
     if (y >= 700 && y < 1000) {
      Body.style.overflowY = "auto";
       Body.scrollBy(0, 5); 
       
       
    } else { Body.style.overflowY = "hidden"; 
      
 }

 
 if (py >= 700) {
      Body.style.overflowY = "auto"; 
      Body.scrollBy(0, 5);
      
      if(Body >= 1000){
           Body.style.overflowY = "hidden";
      }
             	
 }  if (py <= 650) { 
  // Rola a div para o topo
      let pos = Body.scrollTop; 
      let speed = 5; 
	    let targetPos = 30 * document.body.scrollHeight; 
      let animation = window.requestAnimationFrame(scroll);
       
  function scroll() { 
      pos -= speed;
      Body.scrollTop = pos; 
      
  if (pos > targetPos) {
       animation = window.requestAnimationFrame(scroll);
        } 
     }
   }
   
   
          //casa 1
         //lado esquerdo
      
         //cima
      if (py == 2026 && px >= 135 && px <= 382) {
           py = 0;
           py = red.offsetTop;
      }   //baixo
      if (px >= 135 && px < 270 && py == 505) {
           py = 0;
           py = red.offsetTop;
      }   //baixo
      if (px >= 305 && px <= 555 && py == 505) {
           py = 0;
           py = red.offsetTop;
      }   //porta
      if (px > 260 && px < 305 && py < 505 && py >180) {
           window.open('casaRed.html')
      }   //lado direito
      if (py >= 180 && py <= 505 && px == 555) {
           px = 0;
           px = red.offsetLeft;
      }
      
      //casa 2
      //lado esquerdo
      if (py >= 180 && py <= 505 && px == 775) {
           px = 0;
           px = red.offsetLeft;
      }
      //left 775 top 175 top 510
      
      if (px >= 690 && px <=780 && py < 90) {
           Body.style.backgroundPosition = 'top center'
          // py = red.offsetTop = 440
      }*/
      
      
      
       
       
       red2.style.left=px2+'px'
       red2.style.top=py2+'px'
       
         
      
  }
 window.addEventListener('load',mover);


