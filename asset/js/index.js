console.log("Working");

setTimeout(() => {plusSlides(1);}, 3000)
// Wrap every letter in a span
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  
}





$("#make-id").click(function() {
  $("#bid-from").show();
 
}) 

$("#close-window").click(function() {
  $("#bid-from").hide();
 
})





// For seraching 
function sendData(e){
    
  const searchsection= document.getElementById('search-section');
   
  let match=e.value.match(/^[a-zA-Z ]*/);
  let match2=e.value.match(/\s*/);

  if(match2[0]===e.value){
    searchsection.innerHTML='';
    return;
  }
  else if(match[0]===e.value){

  

    fetch('getname',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({payload: e.value})
    }).then(res => res.json()).then(data=>{
        let payload=data.payload;
         searchsection.innerHTML='';
         if(payload.length<1){
          searchsection.innerHTML='<p>Not Found<p>';
          return;
         }
         payload.forEach((item,index)=>{
           if(index>0) searchsection.innerHTML +='<br>';
           searchsection.innerHTML+= `<a href="/searched/?id=${item.pname}">${item.pname}<a>`
         })
         return;
    });
   return; 
  }
  searchsection.innerHTML='';
}




$('#search-section p').click(function(){
  console.log("Hey");
  console.log(searchButton.innerHTML);
})
























