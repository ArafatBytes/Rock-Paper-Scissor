let i=1;
let counter=0;
let x,a;
while(i<=5){
     a=prompt("Rock/Paper/Scissor :","");
     x=a.toUpperCase();
     if(x!='ROCK' && x!='PAPER' && x!='SCISSOR'){
          a=prompt("Select again : ","");
          x=a.toUpperCase();
     }
     let y=Math.floor(Math.random()*3)+1;
     let z;
     (y==1)? z='ROCK' : (y==2)? z='PAPER' : z='SCISSOR';
     if(x===z){
          alert("It's a draw !");
     }
     else if(x==='ROCK' && z==='SCISSOR'){
          alert('Rock wins over Scissor. Congrats!');
          counter++;
     }
     else if(x==='PAPER' && z==='ROCK'){
          alert('Paper wins over Rock. Congrats!');
          counter++;
     }
     else if(x==='SCISSOR' && z==='PAPER'){
          alert('Scissor wins over Paper. Congrats!');
          counter++;
     }
     else{
          alert(`Alas! ${z} wins over ${x}. You loser XD`);
          counter--;
     }
     alert(`Your score: ${counter}`);
     i++;
}
(counter==5)? alert('You pro my boy !') : (counter>=1)? alert("You win this round") : alert("You lose this round");