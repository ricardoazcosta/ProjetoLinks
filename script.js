function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    //selecionar a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    if(html.classList.contains('light')){
  // se estiver light, adicionar light
  img.setAttribute('src', './assets/Avatar-dark.png')
       
    } else {
  img.setAttribute('src', './assets/Avatar.png')}
}