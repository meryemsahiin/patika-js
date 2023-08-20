const userName = prompt("Lütfen adınızı girin:");
const myName = document.getElementById("myName");
myName.textContent = userName;

function showTime() {
  const myClock = document.getElementById("myClock");
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();

  myClock.textContent = `${time} - ${date}`;
}

window.onload = function () {
  showTime();
};
