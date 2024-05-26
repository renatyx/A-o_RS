function validacao(){
    let primeiro = document.getElementById("i_1");
    let segundo = document.getElementById("i_2");
    let terceiro = document.getElementById("i_3");
    let quarto = document.getElementById("i_4");
    let numero = document.getElementById("i_numero");

    estilo_input(primeiro, "#f45656", "#808080");
    estilo_input(segundo, "#f45656", "#808080");
    estilo_input(terceiro, "#f45656", "#808080");
    estilo_input(quarto, "#f45656", "#808080");
    estilo_input(numero, "#f45656", "#808080");

}

function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("f_alert");

    if(!input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `1px solid ${cor_2}`;
    }
}