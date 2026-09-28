if(!localStorage.getItem('usuarios')){
    const bancoInicial= [
        {usuario: 'admin', senha:  '123'},
        {usuario: 'Fernando', senha: '1322'}
    ];
    localStorage.setItem('usuarios', JSON.stringify(bancoInicial));
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
        alert('Login realizado com sucesso!!! bem vindo'+ usuarioDigitado)
    }else{
        alert('Usuario ou senha incorreta');
    }

});