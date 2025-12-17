function calcular(){
    const nome = document.getElementById("nome").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const parcelas = parseInt(document.getElementById("parcelas").value);
    const resultado = document.getElementById("resuldado");

    if( !nome || isNaN(valor) || valor<= 0){
        resultado.innerHTML = "Preencha todos os campos";
        return;
    }

    const valorComDesconto = valor >= 100 ? valor * 0.9 : valor;
    const valorParcela = (valorComDesconto/parcelas).toFixed(2);
    
    resultado.innerHTML = `
    <p><strong>Cliente:</strong> ${nome}</p>
    <p><strong>Valor Original:</strong> R$${valor.toFixed(2)}</p>
   
    ${valor >=100 ? "<p><strong>Desconto Aplicado:</strong> 10%</p>" : "<p><strong>Sem Desconto aplicado.</strong></p>"}
    
    <p><strong>Total de Pagar:</strong> R$${valorComDesconto.toFixed(2)}</p>
    <p><strong>Forma de Pagamento:</strong> ${parcelas}x de <strong>R$${valorParcela}</strong></p>
    `;
}

function alternarTema(){
    document.body.classList.toggle("dark-mode");

    const botao = document.getElementById("temaBtn");
    const modoAtivo= document.body.classList.contains("dark-mode");

    botao.textContent = modoAtivo ? "Modo Claro" : "Modo Escuro";
}