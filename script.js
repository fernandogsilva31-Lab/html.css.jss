if(!localStorage.getItem('usuarios')){
    const bancoInicial= [
        {usuario: 'admin', senha:  '123'},
        {usuario: 'Fernando', senha: '1322'}
    ];
    localStorage.getItem('usuarios', JSON.stringify(bancoInicial));
}

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();

    const usuarioDigitado = document.getElementById('usuario').Value;
    const senhaDigitada = document.getElementById('senha').Value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const usuarioEncontrado = usuarios.find(function(user){
        return user.usuario === usuarioDigitado && user.senha === senhaDigitada;
    });

    if(usuarioEncontrado){
        localStorage.getItem('usuarioLogado', usuarioDigitado);
        window.location.href ='home.html';
    }else{
        alert ('usuario ou senha incorreta');
    
    }

});