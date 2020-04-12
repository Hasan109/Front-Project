"use strict";

// Clikc button style change


// var btnSytle=document.getElementById("btnSytle");
// var count=0;
// 	btnSytle.addEventListener("click",function(){
// 		if (count %2 == 0) 
// 		{
// 			btnSytle.style.padding="50px";
// 		}
// 		else
// 			{
// 				btnSytle.style.padding="10px";
// 			}
// 	count++;
// 	});






// write the value console when click any div


// let mains=document.getElementsByClassName("main"); 
// for(let i=0;i<mains.length;i++)
// 	{mains[i].addEventListener("click",function()
// 		{ console.log(this.innerText)}
// 		)}






// random radius generator

// let radius= document.querySelector(".bord");
// let count=0;
// radius.addEventListener("click", function(e){
// 	 let div=document.createElement("div");
	
// 	div.classList.add("random");
// 	div.style.top=e.pageY+"px";
// 	div.style.left = e.pageX + "px";
// 	radius.appendChild(div);
// 		setInterval(function(){
// 			if (count%2==0) 
// 	{
// 	    div.style.background = 'red';
// 	}
// 	else{
		
// 		div.style.background = 'black';
// 	}
// 	count++;
// 		},1000);
// })




// acardion


// let accr= document.querySelectorAll(".accordion");

// for(let i=0; i<accr.length;i++){
// 	accr[i].addEventListener("click", function(){
// 		let p=this.nextElementSibling;
// 		this.classList.toggle("active");
// 		if (p.style.height == '') 
// 		{
// 			p.style.height = '100px';
// 		}else {
// 			p.style.height = '';
// 		}
// 	})
// }




//todolist


// let input = document.querySelector(".maininput");
// let button= input.nextElementSibling;
// let ul = document.querySelector(".part");
// button.addEventListener("click", function(){
// 	let text = input.value;
// 	if (text.trim().length>0) 
// 	{
// 		let li = document.createElement("div");

// 		li.classList.add("list-group-item");
// 		li.innerText=text;
// 		ul.appendChild(li);
// 	}
// 		input.value="";

// })



