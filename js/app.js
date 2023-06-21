$('textarea').on('keyup paste', function(){
    setTimeout(function(){
        var valortext = $('textarea').val().length,
            palavras = $('textarea').val().split(' ').length;
        $('.caracteres').text(valortext);
        $('.palavras').text(palavras);
    }, 200);
});