
document.addEventListener('DOMContentLoaded', (e) => {
    let getLimits = {
        altura: innerHeight,
        largura: innerWidth
    }

    /*sumir coisas feitas para o mobile*/
    if (getLimits.largura >= 768) {
        sumir('menu')
        sumir('carroselCELULA')
    }


    /*sumir coisas feitas para o pc*/
    if (getLimits.largura < 768) {
        sumir('menuPC')
        sumir('noticias')
        sumir('teste')
    }


    function sumir(id){
        var elem = document.getElementById(id);
        if (elem) { // Verifica se o elemento existe antes de tentar alterar o estilo
            elem.style.display = 'none';
        }
    }

    function aparecer(id){
        var elem = document.getElementById(id);
        if (elem) { // Verifica se o elemento existe antes de tentar alterar o estilo
            elem.style.display = 'block';
        }
    }
})




