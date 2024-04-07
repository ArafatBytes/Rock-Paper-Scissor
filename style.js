class bubble {
     constructor(canvasWidth, canvasHeight) {
       this.maxHeight = canvasHeight;
       this.maxWidth = canvasWidth;
       this.randomise();
     }
   
     generateDecimalBetween(min, max) {
       return (Math.random() * (min - max) + max).toFixed(2);
     }
   
     update() {
       this.posX = this.posX - this.movementX;
       this.posY = this.posY - this.movementY;
   
       if (this.posY < 0 || this.posX < 0 || this.posX > this.maxWidth) {
         this.randomise();
         this.posY = this.maxHeight;
       }
     }
   
     randomise() {
       this.colour = Math.random() * 255;
       this.size = this.generateDecimalBetween(2, 6);
       this.movementX = this.generateDecimalBetween(-0.4, 0.4);
       this.movementY = this.generateDecimalBetween(0.7, 2);
       this.posX = this.generateDecimalBetween(0, this.maxWidth);
       this.posY = this.generateDecimalBetween(0, this.maxHeight);
     }
   }
   
   class background {
     constructor() {
       this.canvas = document.getElementById("floatingbubbles");
       this.ctx = this.canvas.getContext("2d");
       this.canvas.height = window.innerHeight;
       this.canvas.width = window.innerWidth;
       this.bubblesList = [];
       this.generateBubbles();
       this.animate();
     }
   
     animate() {
       let self = this;
       self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
       self.bubblesList.forEach(function(bubble) {
         bubble.update();
         self.ctx.beginPath();
         self.ctx.arc(bubble.posX, bubble.posY, bubble.size, 0, 2 * Math.PI);
         self.ctx.fillStyle = "hsl(" + bubble.colour + ", 40%, 39%)";
         self.ctx.fill();
         self.ctx.strokeStyle = "hsl(" + bubble.colour + ", 40%, 39%)";
         self.ctx.stroke();
       });
   
       requestAnimationFrame(this.animate.bind(this));
     }
   
     addBubble(bubble) {
       return this.bubblesList.push(bubble);
     }
   
     generateBubbles() {
       let self = this;
       for (let i = 0; i < self.bubbleDensity(); i++) {
         self.addBubble(new bubble(self.canvas.width, self.canvas.height));
       }
     }
   
     bubbleDensity() {
       return Math.sqrt((this.canvas.height, this.canvas.width) * 5);
     }
   }
   
   window.onload = function() {
     new background();
   };
   
   window.requestAnimFrame = (function() {
     return (
       window.requestAnimationFrame ||
       window.webkitRequestAnimationFrame ||
       window.mozRequestAnimationFrame ||
       window.oRequestAnimationFrame ||
       window.msRequestAnimationFrame ||
       function(callback) {
         window.setTimeout(callback, 1000 / 60);
       }
     );
   })();

let x=prompt("What's your name?","");
const choice=document.querySelector('.third');
const out=document.querySelector('.chose1');
const opt=document.querySelector('.chose2');
const uscore=document.querySelector('#uscore');
const cscore=document.querySelector('#cscore');
const result=document.querySelector(".result");
const vs=document.querySelector('.vs');
const vsimg=document.querySelector('#vs');
let name=document.querySelector('#name');
name.textContent=`${x}'s`;
alert("Reach to point 5 before the computer. Let's see!");
let a,b;
let ucount=0;
let ccount=0;
choice.addEventListener('click',(event)=>{
     let target=event.target;
     switch(target.id){
          case 'rock':  {
               const imag=document.createElement("img");
               imag.src='rock.png';
               imag.height='80';
               imag.width='80';
               out.appendChild(imag);
               a=target.id;
               break;
          }
          case 'paper': {
               const imag=document.createElement("img");
               imag.src='paper.png';
               imag.height='80';
               imag.width='80';
               out.appendChild(imag);
               a=target.id;
               break;
          }
          case 'scissor':{
               const imag=document.createElement("img");
               imag.src='scissor.webp';
               imag.height='80';
               imag.width='80';
               out.appendChild(imag);
               a=target.id;
               break;
          }
     }
     let y=Math.floor(Math.random()*3)+1;
     if(y==1){
          const imag=document.createElement("img");
          imag.src='rock.png';
          imag.height='80';
          imag.width='80';
          opt.appendChild(imag);
          b="Rock";
     }
     else if(y==2){
          const imag=document.createElement("img");
          imag.src='paper.png';
          imag.height='80';
          imag.width='80';
          opt.appendChild(imag);
          b="Paper";
     }
     else{
          const imag=document.createElement("img");
          imag.src='scissor.webp';
          imag.height='80';
          imag.width='80';
          opt.appendChild(imag);
          b='Scissor';
     }
     if((a==='rock' && b==='Rock')||(a==='paper' && b==='Paper')||(a==='scissor' && b==='Scissor')){

     }
     else if(a==='rock' && b==='Scissor'){
          ucount++;
     }
     else if(a==='paper' && b==='Rock'){
          ucount++;
     }
     else if(a==='scissor' && b==='Paper'){
          ucount++;
     }
     else{
          ccount++;
     }
     uscore.textContent=ucount;
     cscore.textContent=ccount;
     if(ucount===5 || ccount===5){
          if(ucount>ccount){
               const imag=document.createElement("img");
               imag.setAttribute('id','resicn');
               imag.src= "winner.gif" ;
               vs.replaceChild(imag,vsimg); 
          }
          else if(ccount>ucount){
               const imag=document.createElement("img");
               imag.setAttribute('id','resicn');
               imag.src= "loser.gif" ;
               vs.replaceChild(imag,vsimg);
          }
          alert("Game over!Refresh the page to play again.Click 'OK' to see result.");
     }
});


   


