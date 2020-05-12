'use strict'

var uName = prompt("Whats your name?🕵️‍♂️", 'Vistore');
alert(`nice to meet you ${uName}`);
console.log(`your name is: ${uName}`);
var ready = confirm("this webpage are maded to let you know me more :) , i will ask you some question about me, Rules are simple you have to answar with 'yes' OR 'NO',*if you answerd else you will start from beginng..😑         Are you Ready? 🧐");
if (ready === true){
    alert(`NICE!, Happy to Know that *-* ,  Lets Start  🏁`);
}else{
    alert(`Im Sorry For That.. :( , Thanks 4 visiting us 💔`);
    location.reload();
};


var qus1 = prompt(`First Question: do you think im good car driver?                        *Answer Only "yes"  OR "NO"`).toLowerCase();
console.log(`First Question Answer was: ${qus1}`);
if (qus1 == "yes" || qus1 == "y"){
    alert(`Correct!!💯 well done ${uName}`);
    document.getElementById("answ1").classList.add("answert");
    document.getElementById("answ1").innerText = '👏Corect!!🎉';
}else if (qus1 == "no" || qus1 == "n"){
    alert(`Do you really have doubts?🙄 ${uName}`);
    document.getElementById("answ1").classList.add("answerf");
    document.getElementById("answ1").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
};

var qus2 = prompt(`Second Question: do you think im sheshah Smoker?🚭                       *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Second Question Answer was: ${qus2}`);
if (qus2 == "no" || qus2 == "n"){
    alert(`Correct!!💯 well done ${uName}`);
    document.getElementById("answ2").classList.add("answert");
    document.getElementById("answ2").innerText = '👏Corect!!🎉';
}else if (qus2 == "yes" || qus2 == "y"){
    alert(`Unfortantly thats wrong :( ${uName} Actuly i used to but now i quit it 💪`);
    document.getElementById("answ2").classList.add("answerf");
    document.getElementById("answ2").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
};

var qus3 = prompt(`Third Question: do you think im Speed as Flash?🚀                       *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Third Question Answer was: ${qus3}`);
if (qus3 == "no" || qus3 == "n"){
    alert(`Correct!!💯 well done ${uName} i mean maybe im..😂`);
    document.getElementById("answ3").classList.add("answert");
    document.getElementById("answ3").innerText = '👏Corect!!🎉';
}else if (qus3 == "yes" || qus3 == "y"){
    alert(`Correct!! but not thes days..☹️ so Unfortantly thats wrong ${uName} maybe in the future 👀`);
    document.getElementById("answ3").classList.add("answerf");
    document.getElementById("answ3").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
};

var qus4 = prompt(`Fourth Question: am i Gym Lover?💪  *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Forth Question Answer was: ${qus4}`);
if (qus4 == "no" || qus4 == "n"){
    alert(`True💯 ${uName} cus im programer as Sowftware Enginer💻 and also love sports..the elctronic one👩‍💻👨‍💻`);
    document.getElementById("answ4").classList.add("answert");
    document.getElementById("answ4").innerText = '👏Corect!!🎉';
}else if (qus4 == "yes" || qus4 == "y"){
    alert(`Unfortantly thats not wrong and also not True ${uName} maybe after quarnte i will back 👀`);
    document.getElementById("answ4").classList.add("answerf");
    document.getElementById("answ4").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
};

var qus5 = prompt(`Fifth Question: am i Lonly Lover?🔒  *Answer Only "yes" OR "NO"`).toLowerCase();
console.log(`Fifth Question Answer was: ${qus5}`);
if (qus5 == "yes" || qus5 == "y"){
    alert(`Correct!!💯 ${uName}, Avtuly the Lonly is the best thing ever after being 3madov 😎`);
    document.getElementById("answ5").classList.add("answert");
    document.getElementById("answ5").innerText = '👏Corect!!🎉';
}else if (qus5 == "no" || qus5 == "n"){
    alert(`i think you should think twice ${uName} 🙄`);
    document.getElementById("answ5").classList.add("answerf");
    document.getElementById("answ5").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
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
    document.getElementById("answ1").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
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
    document.getElementById("answ2").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
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
    document.getElementById("answ3").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
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
    document.getElementById("answ4").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
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
    document.getElementById("answ5").innerText = 'Flase☹️';
}else {
    alert(`⛔️Pleaseee ⛔️ only ⛔️ 'yes' ⛔️ or ⛔️ 'no'⛔️`);
    location.reload();
};};