function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatargato-light.png")
    img.setAttribute(
      "alt",
      "Foto de uam gato branco cartoon, usando oculos escuro  e fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/Avatargato.png")
    img.setAttribute(
      "alt",
      "Foto de uam gato branco cartoon, usando oculos escuro quadrado e fundo amarelo"
    )
  }
}
