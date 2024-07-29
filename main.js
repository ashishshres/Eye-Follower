// let pupils = document.querySelectorAll(".pupil");
// document.addEventListener("mousemove", function (e) {
//   let x = (e.clientX * 50) / window.innerWidth + "%";
//   let y = (e.clientY * 50) / window.innerHeight + "%";
//   pupils.forEach((pupil) => {
//     pupil.style.left = x;
//     pupil.style.top = y;
//   });
// });

let lines = document.querySelectorAll(".line");

window.addEventListener("mousemove", function (e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let deltaX = mouseX - window.innerWidth / 2;
  let deltaY = mouseY - window.innerHeight / 2;
  let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  angle = angle - 180;
  lines.forEach((line) => {
    line.style.transform = `rotate(${angle}deg)`;
  });
});
