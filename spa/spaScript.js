function navegacao(url, seletor){
    if(!url || !seletor) return 
    const conteudo = document.querySelector(seletor)
    fetch(url)
        .then(resp => resp.text())
        .then(html => conteudo.innerHTML = html)
}

document.querySelectorAll('[link-ajax]').forEach(link => {
    const url = link.attributes['link-ajax'].value
    const seletorDestino = link.attributes['destino'].value

    link.onclick = e => {
        e.preventDefault()
        navegacao(url, seletorDestino)
    }
})