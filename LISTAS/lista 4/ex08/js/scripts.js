function gerarSenhaForte(tamanho = 8) {
    const caracteres = [
        'abcdefghijklmnopqrstuvwxyz', 
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
        '0123456789'                     
    ];

    let senha = '';

    
    for (let i = 0; i < tamanho; i++) {
       
        const tipoAleatorio = Math.floor(Math.random() * caracteres.length);
        const charAleatorio = caracteres[tipoAleatorio][Math.floor(Math.random() * caracteres[tipoAleatorio].length)];
        senha += charAleatorio;
    }

    return senha;
}


console.log(gerarSenhaForte());