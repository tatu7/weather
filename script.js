("use strict");

const findBtn = document.querySelector(".findBtn");
const inputCreate = document.querySelector(".inputCreate");
const list = document.querySelector(".list");
const container = document.querySelector(".container");
const box = document.querySelector(".box");
let malumot;
let search = "";
findBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  search = inputCreate.value;
  inputCreate.value = "";
  getUrl();
});
function getUrl() {
  fetch(
    `http://api.weatherstack.com/current?access_key=ebc2c14341b242accc4941b9a5c23bbf&query=${search}`
  )
    .then((response) => response.json())
    .then((data) => {
      malumot = data;
      console.log(malumot);
      getWeather();
    });
}
const getWeather = function () {
  console.log(malumot);

  let html = `
    <div class="element element-${malumot.current.is_day}">
    <div class="heading">${malumot.location.name}</div>
    <div class="day">${malumot.location.localtime}</div>
    <div class="desc">
            <div class="temper">
              <p>${malumot.current.temperature}</p>
              <sup>o</sup>C
            </div>
            <div class="kun">${
              malumot.current.is_day == "yes" ? "KUN" : "TUN"
            }</div>
          </div>
    <div class="desc">
      <div class="description">IT'S ${
        malumot.current.weather_descriptions[0]
      }</div>
      <div class="img"><img src="${
        malumot.current.weather_icons[0]
      }" alt="" /></div>
    </div>
  </div>
  `;
  box.insertAdjacentHTML("afterbegin", html);
};
{
  /* <ul class="list">
    <li class="name">${malumot.location.country}</li>
    <li class="temperatura">${malumot.current.weather_descriptions[0]}</li>
    <li class="shamol">${malumot.location.localtime}</li>
    <li class="decription">${
      malumot.current.is_day === "yes" ? "Kun" : "Tun"
    }</li>
    <li><img src="${malumot.current.weather_icons[0]}"/></li> */
}
