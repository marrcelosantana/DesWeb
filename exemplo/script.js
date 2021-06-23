function alterarTexto(){
    document.getElementById("meuP").innerHTML = "Novo texto usando JavaScript!!";
}

function acender(){
    document.getElementById("myImage").src="./images/lampOn.jpg";
}

function apagar(){
    document.getElementById("myImage").src="./images/lampOff.jpg";
}

function alterarFonte(){
    document.getElementById("demo").style.fontSize='35px';
    document.getElementById("demo").style.color='red';
    
}

function somar(){
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    let res = document.getElementById("resultado");
    let valor1 = Number(n1.value);
    let valor2 = Number(n2.value);
    let soma = valor1 + valor2;
    console.log("Calculo realizado!!")
    
    res.innerHTML = `O resultado é: ${soma}`; 
}

function exibirData(){
    document.getElementById("resultado").innerHTML = Date();
}
