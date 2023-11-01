let output=document.getElementById("output");
let count=0;
function repeat(name){
	count++;
	let res=output.innerHTML=`${name}<br>`;
	document.write(res);
	if(count==5){
			clearInterval(ans);
	}		
}
let ans=setInterval(repeat,1000,"hello world");



  

	







