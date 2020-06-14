document.cadastro.onsubmit = async e => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)

    const options = {
        method: form.method,
        body: new URLSearchParams(data)
    }

    fetch(form.action, options)
        .then(resp => resp.json())
        .then(result => {
            const resultado = document.getElementById('resultado')
            resultado.innerHTML = `Obrigado por se cadastrar ${result.nome} ${result.sobrenome}`
        })
}