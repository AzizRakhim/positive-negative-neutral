let elForm = document.querySelector(".main-form");
let elInput = document.querySelector(".main-number");
let elTypes = document.querySelectorAll(".main-text");
let elShowType = document.querySelector(".type-show");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  elTypes.forEach((el, index) => {
    if(index + 1 == elInput.value){
      elTypes[index].classList.add('active');
      elShowType.innerText = `${el.innerText} content`;
    } else{
      elTypes[index].classList.remove("active");
    }
  });
  elInput.value = "";
});

for(let i = 0; i < elTypes.length; i++){
  elTypes[i].addEventListener("click", () => {
    if(i + 1 == 1){
      elTypes[i].classList.add("active");
      elTypes[1].classList.remove("active");
      elTypes[2].classList.remove("active");
      elShowType.innerText = `${elTypes[i].innerText} content`;
    } else if(i + 1 == 2){
      elTypes[i].classList.add("active");
      elTypes[0].classList.remove("active");
      elTypes[2].classList.remove("active");
      elShowType.innerText = `${elTypes[i].innerText} content`;
    } else{
      elTypes[i].classList.add("active");
      elTypes[0].classList.remove("active");
      elTypes[1].classList.remove("active");
      elShowType.innerText = `${elTypes[i].innerText} content`;
    }
  })
}







