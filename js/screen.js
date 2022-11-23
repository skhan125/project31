let carousel = document.querySelector("#carousel");

carousel.addEventListener("click", function(event){
  if(event.target === carousel.children[1]){
    if(parseInt(carousel.children[0].style.right) === 0){
      carousel.children[0].style.right = ((carousel.children[0].childElementCount - 1)*100) + "%";
    }
    else{
      carousel.children[0].style.right = (parseInt(carousel.children[0].style.right) - 100) + "%";
    }
  }
  if(event.target === carousel.children[2]){
    if(carousel.children[0].childElementCount === (parseInt(carousel.children[0].style.right)/100) + 1){
      carousel.children[0].style.right = (0) + "%";
    }
    else{
      carousel.children[0].style.right = (parseInt(carousel.children[0].style.right) + 100) + "%";
    }
  }
})