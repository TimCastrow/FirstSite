'use strict'

    var score = 0;

    var fname=prompt('My First name?');

    if(fname.toLowerCase() === 'tim'){
    alert('right');
    score = score+1;}
    else{alert('no, name is Tim');}

    // 

    var lname=prompt('My Last name?');

    if(lname.toLowerCase() === 'castrow'){
    alert('right');
    score = score+1;}
    else{alert('no, name is Castrow');}

    // 

    var answer1=prompt('Whats Tanners dogs name?');

    if(answer1 === 'kona'){
    alert('right');
    score = score+1;}
    else{alert('no, name is kona');}

    // 

    function faveNum(){
        var faveNum = 69;
        for(var i = 0; i<5; i++){
          var guess = prompt('Whats my favorite number?');
      
          if(guess<69){
            alert('Guess higher');
          }else if(guess>69){
            alert('Guess lower');
          }else if(parseInt(guess)===69){
            alert('Correct!');
            score = score+1;
            break;
        
          }else{alert('Please enter a number');}
        }
      }
      
      faveNum();

      alert('Your Score Is '+score+'/4');

      document.getElementById("fname").innerHTML = fname;

document.getElementById("lname").innerHTML = lname;
           