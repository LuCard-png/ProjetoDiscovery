function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Lucas Cardoso, usando camisa preta, barba e fundo"
    )
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Lucas Cardoso, usando camisa preta, barba e fundo"
    )
  }
}
