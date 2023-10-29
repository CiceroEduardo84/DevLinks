function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/CiceroEduardo24.png");
  } else {
    img.setAttribute("src", "./images/1693235903877.jpeg");
  }
}
