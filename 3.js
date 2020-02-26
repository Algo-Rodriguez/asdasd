const btn = document.getElementById('btn');
const sp = document.getElementById('speed');
const w = document.getElementById('words');
const get = document.getElementById('get');
btn.addEventListener('click', btnf);
var c = 0;
const words = ['I have a simple HTML with a paragraph and button. I want to carry out different commands',
'For first click, change paragraph colour, on second click change font family, on third click copy',
"Also, it's cleaner and easier to maintain if you add/remove CSS classes, rather than modifying",
"You've got the right idea, but you are missing the actual click event handling registration."];
function btnf(){
	c++;
	prev();
}
var r;
var spe = 0;
function speedCalc(){
	spe+=0.1
}
var m;
function prev(){
	
	if(c%2===1){
		r = Math.floor(Math.random()*4);
		console.log(r);
		w.innerHTML = words[r];
	btn.innerHTML = "Done";
	refresher();
	m = setInterval(speedCalc,100);	
	}
	else{
		btn.innerHTML = "Start";
		check();
		clearInterval(m);	
	}
	console.log(spe);
}
function check(){
	let str1 = words[r].split(' ');
	let getv = get.value;
	let str2 = getv.split(' ');	
		console.log(str1);
		console.log(str2);
		var wrong = 0;
			var right = 0;
		for(let i=0; i<str2.length; i++){
			
			if(str1[i]===str2[i]){
				right++;
			}
			else {
				wrong++;
			}

		}
		let speedv = Math.floor((60/spe)*right);
		w.innerHTML = (right + " right words of " + str1.length + " words");
		sp.innerHTML = "Speed is " + speedv + " word per minute"; 
		
	
}
function refresher(){
	get.value = "";
	sp.innerHTML = "";
	
}