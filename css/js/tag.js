const colors = {
    p: '#420a0a',
    div:'#42230a',
    span: '#42420a',
    section: '#22420a',
     ul: '#0a4217',
     ol: '#0a4239',
     Header: '#0a2842',
     nav: '#0c0a42',
     main: '#330a42',
     footer: '#420a34',
     form: '#420a13',
     body: '#26a384'
     padrao: '#0d0e17',
     get(tag) {
        return this[tag] ? this[tag] : this.padrao
     }
}

// metodo que vai retorna todos elementos ('.tag')
document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    // caixas ficam borda verde 
    elemento.style.borderColor = colors.get(tagName)

    // Pergunta: está contido na lista de classe o (nolabel)se estiver contido não entre nesse trecho, se não tiver o nolabel aplique e cria
    if (!elemento.classList.contains('nolabel')) {
        // vai criar um elemento (tag) diretamente no javaS e vai injetar em todas as tags que tiverem o elemento TAG
        const label = document.createElement('label')
        // cria um fundo vermelho nas tag criadas
        label.style.backgroundColor = colors.get(tagName)
        // coloca o nome tagName dentro do Label
        label.innerHTML = tagName
        // vai inserir antes do primeiro elemento 
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})