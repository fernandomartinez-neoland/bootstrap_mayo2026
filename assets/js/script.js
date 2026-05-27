const boton = document.getElementById("azul");
const titulo = document.getElementById("titulo");
const img = document.getElementById("imagenes");

console.log(boton.textContent);

boton.addEventListener("click", () => {
  titulo.style.color === "blue" ? "black" : "blue";
  if (titulo.style.color === "blue") {
    titulo.style.color = "black";
  } else {
    titulo.style.color = "blue";
  }
  img.innerHTML=`<img src="https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg">`
});
