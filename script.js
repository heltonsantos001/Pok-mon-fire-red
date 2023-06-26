  var dx
  var dy
  var px 
  var py
  var vel
  var red = document.querySelector('#red');
  var tmp
  
  let cima = document.querySelector('#cima')
  let left = document.querySelector('#left')
  let bottom = document.querySelector('#bottom')
  let right = document.querySelector('#right')
  
  let Body = document.getElementById('Body');
  let chat = document.querySelector("#chat")
  let sim = document.querySelector('#sim')
  let nao = document.querySelector('#nao')
  let tituloChat = document.querySelector('#tituloChat')
  let pokemons = []

 function mover () {
      dx = 0
      dy = 0
      px = 198
      py = 2260
      vel = 2
      //px 11 py 17 29
      tmp = setInterval(enterFrame,20);
      
 }
 cima.addEventListener('touchstart', ()=>{
      dy=-1;
      red.src = 'redyA.gif'
         
     
 })
 bottom.addEventListener('touchstart', ()=>{
      dy=1;
      red.src = 'red-yA.gif'
 })
 left.addEventListener('touchstart', ()=>{
      dx=-1;
      red.src = 'red-xA.gif'
 })
 right.addEventListener('touchstart', ()=>{
      dx=1;
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
      
 if (py == 1880 && pokemons.length < 1 ) {
      dy = 0
      py = red.offsetTop
      chat.style.display = 'block'
      
 }
 

 sim.addEventListener('click', () =>{
      const Sempre = true
    if (Sempre) {
       chat.style.display = 'none'
    }
 })
   
  
         
//----------------------- casa 1 -------------------------//
    
      
    
 if (px >= 100 && px <= 375 && py >= 2026 && py <= 2250) {
      //esquerda e direita 
      dx = 0;
      px = red.offsetLeft;
 }     
 if (py == 2026 && px >= 100 && px <= 375) {
           py = 0;
           py = red.offsetTop;
      } 
 if(py == 2250 && px >=100 && px <=185) {
      //primeira parte de baixo
      dy = 0
      py = red.offsetTop
 
 }
 if (px >=206 && px <=375 && py ==2250) {
     //segunda parte de baixo
      dy = 0
      py = red.offsetTop
 }
 if (px >= 186 && px <= 205 && py >=2025&& py <= 2249&& py >=374) {
       //entrar em casa
      //window.open('casaRed.html')
      console.log('casa')
 }     
 
 
    
//----------------------- casa 2 -------------------------//
   
   
   
 if (px >= 540 && px <= 820 && py >= 2026 && py <= 2250) {
      //esquerda e direita 
      dx = 0;
      px = red.offsetLeft;
 }     
 
   //cima
 if (py == 2026 && px >= 540 && px <= 820) {
      dy = 0;
      py = red.offsetTop;
      } 
      
      
 if(py == 2250 && px >=540 && px <=618) {
      //primeira parte de baixo
      dy = 0
      py = red.offsetTop
 }
 
 
 if (px >=645 && px <=820 && py ==2250) {
     //segunda parte de baixo
      dy = 0
      py = red.offsetTop
 }
 
 
 if (px >= 619 && px <= 644 && py >=2025 && py <= 2249 && py >=374) {
      //entrar em casa
      
      //window.open('casaRed.html')
      console.log('casa')
 }     
 
 
 
//-------------------- laboratorio -----------------------//   
 
 
   
 if (px >= 492 && px <= 868 && py >= 2314 && py <= 2544 ) {
      //direita e esquerda
     dx = 0
     px = red.offsetLeft
 }
 
 
 if (py == 2314 && px >= 492 && px <= 868) {
      //cima
      dy = 0
      py = red.offsetTop
 }
 
 
 if (px >= 492 && px <= 668 && py ==2544) {
      //primeira parte de baixo
      dy = 0
      py = red.offsetTop
 }
 
 
 if (px >=702 && px <= 868 && py == 2544) {
      //segunda parte de baixo
      dy = 0
      py = red.offsetTop
 }


 if (px >=669 && px <= 701 && py >= 2313 && py <= 2543 ) {
      //entrar laboratorio
      window.location.href = 'laboratorio.html';
 }
   
   
   
//--------------------- final tela -----------------------//
   
 
     
 if (py >= 2804 && px >=0 && px <= 206) {
      //final cenario  baixo parte 1 esquerda
      dy = 0
      py = red.offsetTop
            
 }   
 
 
 if (py >=2804 && px >=430 && px<=906) {
      //final cenario baixo parte 1 esquerda
      dy = 0
      py = red.offsetTop
 }   
 
 
 if (px == 0 && py >=0 && py <= 2804) {
      //final cenario esquerda 
      dx = 0
      px = red.offsetLeft
 }
 
 
 if (px == 906 && py >= 0 && py <= 2804) {
       //final cenario direita
      dx = 0
      px = red.offsetLeft
      
 }
 
 
//---------------------- arvores -------------------------//
 
 
 
 if (px >= 0 && px <= 473 && py >= 1660 && py <= 1968) {
      //arvores esquerda
      dy = 0
      py = red.offsetTop
      dx = 0
      px = red.offsetLeft
      
 }
 
 //arvores esquerda
 if (px >= 550 && px <= 906 && py >= 1660 && py <= 1968) {
       //arvores direita
      dy = 0
      py = red.offsetTop
      dx = 0
      px = red.offsetLeft
      
 }
 
 if (py == 2260 && px == 198) { 
      Body.style.overflowY = "auto";
      Body.scrollBy(0, 10000); 
      
  }
      
   let y = red.getBoundingClientRect().y;
  if (y >= 400 && y < 1000) { 
      Body.style.overflowY = "auto";
      Body.scrollBy(0, 5); 
      
  }else if (y >= 1000) {
      Body.style.overflowY = "hidden"; 
      
  } else if (y <= 300) { 
      Body.style.overflowY = "auto"; Body.scrollBy(0, -5);
      
  } else { 
      Body.style.overflowY = "hidden";
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
      
      
      
       
       
       red.style.left=px+'px'
       red.style.top=py+'px'
       
         
      
  }
 window.addEventListener('load',mover);


