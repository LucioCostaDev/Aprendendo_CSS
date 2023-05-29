const colors = {
    p: '#fc0303',
    div:'#fc5e03',
    span: '#fcb103',
    section: '#a5fc03',
     ul: '#0ffc03',
     ol: '#03fca1',
     Header: '#03f0fc',
     nav: '#034afc',
     main: '#5e03fc',
     footer: '#ba03fc',
     form: '#fc03db',
     body: '#fc0362',
     padrao: '#fc0303',
     get(tag) {
        return this[tag] ? this[tag] : this.padrao
     }
}

// metodo que vai retorna todos elementos ('.tag')
document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    // caixas ficam borda verde 
    elemento.style.borderColor = colors.get(tagName)

    // Pergunta: está contido na lista de classe o (nolabel)se estiver contido não entre nesse trecho, se não tiver o nolabel aplique e cria ? ou seja se O NO LABEL ESTIVER NAO FAÇA
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