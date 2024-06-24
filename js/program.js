let form = document.querySelector("form");
 let local = localStorage.getItem("form") ?  JSON.parse(localStorage.getItem("form")) : {};
 console.log(local)
let handleSubmit = function (e) {
  e.preventDefault();
  let val = e.target.elements;
  let inputValue = {
    name: val.userName.value,
    number: val.phoneNumber.value,
    age: val.ageradio.value,
    city: val.city.value
  };
  console.log(inputValue);
 
  localStorage.setItem("form", JSON.stringify(inputValue));
};
form.addEventListener("submit", handleSubmit);
