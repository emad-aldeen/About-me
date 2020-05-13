'use strict'

var score = 0;

var uName = prompt("Whats your name?🕵️‍♂️", 'Vistore');
alert(`nice to meet you ${uName}`);
console.log(`your name is: ${uName}`);

var ready = confirm(`This webpage are maded to let you know me more :) , i will ask you some question about me,\n`+`Rules are simple:\n`+`1. you have to answar with 'yes' OR 'NO' in the first level, *if you answerd else it will counted as "Fulse" answer..😑\n`+`2. in the level 2: answer will be any number you want, *you had unlimted trys 🤠\n`+`3. level 3: answer will be any name you want.., *you only have 6 trys for gusing 😬\n`+`there will be score🎰, Every 'true' answer will add 1 point to your score, 'Fulse' answers will not add anything!☹️\n`+`Are you Ready? 🧐`);
if (ready === true){
    alert(`NICE!, Happy to Know that *-* ${uName}, And here +1 point as start 🥳\n`+`Let's Start The Game 🏁`);
    score = score + 1;
}else{
    alert(`Im Sorry For That.. :( , Thanks 4 visiting us 💔`);
    
};


var qus1 = prompt(`First Question: do you think im good car driver?\n`+`*Answer Only "yes"  OR "NO"`).toLowerCase();
console.log(`First Question Answer was: ${qus1}`);
if (qus1 == "yes" || qus1 == "y"){
    score = score + 1;
    alert(`Correct!!💯 well done ${uName}\n`+`Your score is ${score}, keep going 😃`);
    document.getElementById("answ1").classList.add("answert");
    document.getElementById("answ1").innerText = '👏Corect!!🎉';
}else if (qus1 == "no" || qus1 == "n"){
    alert(`Do you really have doubts?🙄 ${uName}`);
    document.getElementById("answ1").classList.add("answerf");
    document.getElementById("answ1").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    
};

var qus2 = prompt(`Second Question: do you think im sheshah Smoker?🚭\n`+`*Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Second Question Answer was: ${qus2}`);
if (qus2 == "no" || qus2 == "n"){
    score = score + 1;
    alert(`Correct!!💯 well done ${uName}\n`+`Your score is ${score}, keep going 😃`);
    document.getElementById("answ2").classList.add("answert");
    document.getElementById("answ2").innerText = '👏Corect!!🎉';
}else if (qus2 == "yes" || qus2 == "y"){
    alert(`Unfortantly thats wrong :( ${uName} Actuly i used to but now i quit it 💪`);
    document.getElementById("answ2").classList.add("answerf");
    document.getElementById("answ2").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    
};

var qus3 = prompt(`Third Question: do you think im Speed as Flash?🚀\n`+`*Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Third Question Answer was: ${qus3}`);
if (qus3 == "no" || qus3 == "n"){
    score = score + 1;
    alert(`Correct!!💯 well done ${uName} i mean maybe im..😂\n`+`Your score is ${score}, keep going 😃`);
    document.getElementById("answ3").classList.add("answert");
    document.getElementById("answ3").innerText = '👏Corect!!🎉';
}else if (qus3 == "yes" || qus3 == "y"){
    alert(`Correct!! but not thes days..☹️ so Unfortantly thats wrong ${uName} maybe in the future 👀`);
    document.getElementById("answ3").classList.add("answerf");
    document.getElementById("answ3").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    
};

var qus4 = prompt(`Fourth Question: am i Gym Lover?💪\n`+`*Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Forth Question Answer was: ${qus4}`);
if (qus4 == "no" || qus4 == "n"){
    score = score + 1;
    alert(`Thats True💯 ${uName} cus im programer as Sowftware Enginer💻 and also i love sports..the elctronic one👩‍💻👨‍💻\n`+`Your score is ${score}, keep going 😃`);
    document.getElementById("answ4").classList.add("answert");
    document.getElementById("answ4").innerText = '👏Corect!!🎉';
}else if (qus4 == "yes" || qus4 == "y"){
    alert(`Unfortantly thats not wrong and also not True ${uName} maybe after quarnte i will back 👀`);
    document.getElementById("answ4").classList.add("answerf");
    document.getElementById("answ4").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    
};

var qus5 = prompt(`Fifth Question: am i Lonly Lover?🔒\n`+`*Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Fifth Question Answer was: ${qus5}`);
if (qus5 == "yes" || qus5 == "y"){
    score = score + 1;
    alert(`Correct!!💯 ${uName}, Avtuly the Lonly is the best thing ever after being 3madov 😎\n`+`Your score is ${score}, keep going 😃`);
    document.getElementById("answ5").classList.add("answert");
    document.getElementById("answ5").innerText = '👏Corect!!🎉';
}else if (qus5 == "no" || qus5 == "n"){
    alert(`i think you should think twice ${uName} 🙄`);
    document.getElementById("answ5").classList.add("answerf");
    document.getElementById("answ5").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    
};


alert(`well .. this will start going harder 😼👌 becuse you are in \n`+`Level 2!`);
while (qus6 != 24){
    var qus6 = prompt(`Sixth Question: how old you think i am??\n`+`*Answer can be any number..`);
    qus6 >= 50 ? alert(`woow!! ${qus6} 😮, do i look that old!! 🥴`) : qus6 >= 30 && qus6 < 50 ? alert(`nope, thats too old for me 🙄 `) : qus6 >= 25 && qus6 < 30 ? alert(`you are a little bit high, But too close ${uName} 😃`) : qus6 <= 10 ? alert(`well.. i think babys these days still cant write codes.. 👶`) : qus6 <= 20 && qus6 > 10 ? alert(`alittle bit more 😃 ${uName}`) :"" 
}
score = score + 1;
document.getElementById("answ6").classList.add("answert");
document.getElementById("answ6").innerText = '👏Corect!!🎉';
alert(`Correct!!💯 im exactly 24 y.o 😄 and +1 to your score 🤩\n`+`Your score is ${score}, keep going 😃`) ;

var answ = ['kamkazi', 'the eminem show', 'Recovery', 'the marshel mathers lp', 'music to be murderd']
for (var i = 0; i < answ.length; i++ ){
   var qus7 = prompt(`Seventh question: while im hip hop music edicted 🎧, witch 'Eminem' albums you think i like?🎤\n` + `*Answer can be one of 5 of my favorite albums\n`+`*You only had 4 attebmts\n`+`you are now at Level 3`).toLocaleLowerCase();
   if (i == answ.length && !answ.includes(qus7)){
       alert(`im sory you are out of attempts.. :(`)
       break;
   }else if (answ.includes(qus7)){
    score = score + 1;
    alert(`Correct!!💯 ${uName}, ${qus7} is realy one of my favorite albums 🤗\n`+`witch is: ${answ}\n`+`and +1 to your score 🤩`)
    document.getElementById("answ7").classList.add("answert");
    document.getElementById("answ7").innerText = '👏Corect!!🎉';
    break;
   } else {
    alert(`mybe it is cool album!, but not of my favorite albums 🙄`)
   }
}


var ss = '';
if (score >= 5){
    ss = 'Exclent Score 🤩, Have we ever met before Homie? ❤️🤗'
}else if (score == 4 || score == 3){
    ss = 'Was Good Score 😃, That mean you know me well 💙'
}else if (score < 3){
    ss = 'Good Try but you should think twice next time..😏'
}

alert(`You did it ${uName} 🥳, your score is ${score}, and it's ${ss}`);




function toggle(){
    var sec = document.getElementById('rC');
    var nav = document.getElementById('res');
    sec.classList.toggle('active');
    nav.classList.toggle('active');

    var fulsSc = 8 - score;
    var croSc = score - fulsSc;
document.getElementById("crAn").innerText = 'You Made '+ croSc +' Correct Answers';
document.getElementById("fuAn").innerText = 'You Made '+ fulsSc +' Fulse Answers';
};



function func1(){
    var qus1 = prompt(`First Question: do you think im good car driver?            *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`First Question Answer was: ${qus1}`);
if (qus1 == "yes" || qus1 == "y"){
    alert(`Correct!!💯 well done ${uName}`);
    document.getElementById("answ1").classList.add("answert");
    document.getElementById("answ1").innerText = '👏Corect!!🎉';
}else if (qus1 == "no" || qus1 == "n"){
    alert(`Do you really have doubts?🙄 ${uName}`);
    document.getElementById("answ1").classList.add("answerf");
    document.getElementById("answ1").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    
};};

function func2(){var qus2 = prompt(`Second Question: do you think im sheshah Smoker?🚭           *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Second Question Answer was: ${qus2}`);
if (qus2 == "no" || qus2 == "n"){
    alert(`Correct!!💯 well done ${uName}`);
    document.getElementById("answ2").classList.add("answert");
    document.getElementById("answ2").innerText = '👏Corect!!🎉';
}else if (qus2 == "yes"){
    alert(`Unfortantly thats wrong :( ${uName} Actuly i used to but now i quit it 💪`);
    document.getElementById("answ2").classList.add("answerf");
    document.getElementById("answ2").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    
};};

function func3(){var qus3 = prompt(`Third Question: do you think im Speed as Flash?🚀           *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Third Question Answer was: ${qus3}`);
if (qus3 == "no" || qus3 == "n"){
    alert(`Correct!!💯 well done ${uName} i mean maybe im..😂`);
    document.getElementById("answ3").classList.add("answert");
    document.getElementById("answ3").innerText = '👏Corect!!🎉';
}else if (qus3 == "yes" || qus3 == "y"){
    alert(`Correct!! but not thes days..☹️ so Unfortantly thats wrong ${uName} maybe in the future 👀`);
    document.getElementById("answ3").classList.add("answerf");
    document.getElementById("answ3").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    
};};

function func4(){var qus4 = prompt(`Fourth Question: am i Gym Lover?💪  *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Forth Question Answer was: ${qus4}`);
if (qus4 == "no" || qus4 == "n"){
    alert(`True💯 ${uName} cus im programer as Sowftware Enginer💻 and also love sports..the elctronic one👩‍💻👨‍💻`);
    document.getElementById("answ4").classList.add("answert");
    document.getElementById("answ4").innerText = '👏Corect!!🎉';
}else if (qus4 == "yes" || qus4 == "y"){
    alert(`Unfortantly thats not wrong and also not True ${uName} maybe after quarnte i will back 👀`);
    document.getElementById("answ4").classList.add("answerf");
    document.getElementById("answ4").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
};};

function func5(){var qus5 = prompt(`Fifth Question: am i Lonly Lover?🔒  *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Fifth Question Answer was: ${qus5}`);
if (qus5 == "yes" || qus5 == "y"){
    alert(`Correct!!💯 ${uName}, Avtuly the Lonly is the best thing ever after being 3madov 😎`);
    document.getElementById("answ5").classList.add("answert");
    document.getElementById("answ5").innerText = '👏Corect!!🎉';
}else if (qus5 == "no" || qus5 == "n"){
    alert(`i think you should think twice ${uName} 🙄`);
    document.getElementById("answ5").classList.add("answerf");
    document.getElementById("answ5").innerText = 'Fulse☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
};};

function func6(){alert(`well .. this will start going harder 😼👌 becuse you are in \n`+`Level 2!`);
while (qus6 != 24){
    var qus6 = prompt(`Sixth Question: how old you think i am??\n`+`*Answer can be any number..`);
    qus6 >= 50 ? alert(`woow!! ${qus6} 😮, do i look that old!! 🥴`) : qus6 >= 30 && qus6 < 50 ? alert(`nope, thats too old for me 🙄 `) : qus6 >= 25 && qus6 < 30 ? alert(`you are a little bit high, But too close ${uName} 😃`) : qus6 <= 10 ? alert(`well.. i think babys these days still cant write codes.. 👶`) : qus6 <= 20 && qus6 > 10 ? alert(`alittle bit more 😃 ${uName}`) :alert(`Correct!!💯 im exactly 24 y.o 😄 and +1 to your score 🤩\n`+`Your score is ${score}, keep going 😃`);
    document.getElementById("answ6").classList.add("answert");
    document.getElementById("answ6").innerText = '👏Corect!!🎉';
};};

function func7(){for (var i = 0; i < answ.length; i++ ){
    var qus7 = prompt(`Seventh question: while im hip hop music edicted 🎧, witch 'Eminem' albums you think i like?🎤\n` + `*Answer can be one of 5 of my favorite albums\n`+`you are now at Level 3`).toLocaleLowerCase();
    if (answ.includes(qus7)){
     alert(`Correct!!💯 ${uName}, ${qus7} is realy one of my favorite albums 🤗\n`+`witch is: ${answ}\n`+`and +1 to your score 🤩`)
     document.getElementById("answ7").classList.add("answert");
     document.getElementById("answ7").innerText = '👏Corect!!🎉';
     break;
    } else {
    alert(`mybe it is cool album!, but not of my favorite albums 🙄`)
    };
};};    

