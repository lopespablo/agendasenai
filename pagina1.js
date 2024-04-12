const meuBotao = document.getElementById('btnabrir');
const meuTexto = document.querySelector('.sobrenos');

meuBotao.addEventListener('click', function() {
    // Adicionando um atraso de 1 segundo (1000 milissegundos) antes de exibir o texto
    setTimeout(function() {
        if(meuTexto.style.display == ('none') || meuTexto.style.display == ('')){
            meuTexto.style.display = 'block';
        }else{
            meuTexto.style.display = 'none';
        }
        
    }, 500);
});

// function sobrenoss() {
//     const texto = document.querySelector('.sobrenos')

//     if(texto.style.display ==('none') || texto.style.display ==(' ') ) {
//             texto.style.display =('block')
//     }else{
//             texto.style.display =('none')
//     }

    
// }