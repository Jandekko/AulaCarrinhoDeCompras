var ValorTotal = [0,0];
var ValorProduto = [50.00,30.00];
var Qtd = [0,0];

function AdicionarItem(Item){
    
    var quantidade = document.getElementById('quantidade'+ Item);
    var total = document.getElementById('total'+Item);

    Qtd[Item] += 1;

    ValorTotal[Item] = Number.parseFloat(ValorProduto[Item])* Qtd[Item];
    quantidade.innerHTML = Qtd[Item];
    total.innerHTML = ValorTotal[Item].toFixed(2);

    ValorCompra();
}


function RemoverItem (Item){
    if(Qtd[Item] > 0){
        Qtd[Item] -= 1;

        var quantidade = document.getElementById('quantidade' + Item);
        var total = document.getElementById('total' + Item);

        quantidade.innerHTML = Qtd[Item];
        ValorTotal[Item] = Number.parseFloat(ValorProduto[Item])* Qtd[Item];
        total.innerHTML = ValorTotal[Item].toFixed(2);
       
        ValorCompra();
    }
}

function ValorCompra(){
    var valorTotalCompra = document.getElementById('valorTotalCompra');
    var valor = 0;

    for(var i = 0; i < ValorTotal.length; i++){
        valor += ValorTotal[i];
    }

    valorTotalCompra.innerHTML = valor.toFixed(2);
}