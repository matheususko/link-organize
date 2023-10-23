function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')


    // pegar tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a img one
        img.setAttribute('src', './assets/avatar-two.png')
    } else {
        // se tiver dark mode, adicionar a img two
        img.setAttribute('src', './assets/avatar-one.png')

    }

}