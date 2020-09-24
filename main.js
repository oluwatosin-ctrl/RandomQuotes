var button = document.querySelector('.button')
var nane = document.querySelector('.nane');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

var num = Math.floor(Math.random()*100);



button.addEventListener('click',function(){
    fetch("https://type.fit/api/quotes")
   .then(response => response.json())
   .then(data=> {
    var namevalue = data[num]['author'];
    var descvalue = '"'+data[num]['text']+'"'
    
    nane.innerHTML = namevalue;
    desc.innerHTML = descvalue;
    
  });
 
  num++;

 
});

/*fetch("https://quotes21.p.rapidapi.com/quote", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes21.p.rapidapi.com",
		"x-rapidapi-key": "34a357fb26msh3262274a5406c62p1b46a8jsn093b1f05b7ec"
	}
})
.then(response => {
	console.log(response);
})
.then(data=>{
    console.log(data)
})

.catch(err => {
	console.log(err);
});*/