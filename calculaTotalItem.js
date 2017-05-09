const listaProdutos = [
     {id: 1, nome: 'Maçã', valorUnitário: 10},
     {id: 2, nome: 'Banana', valorUnitário: 4},
     {id: 3, nome: 'Açai', valorUnitário: 6}
];

const calculaTotalItem = function(codigo, quantidade) {
  let produtoEncontrado;

  for(var i = 0; i <= listaProdutos.length-1; i++){
    if (listaProdutos[i].id == codigo) {
      produtoEncontrado = listaProdutos[i];
    }
  }
  const nomeProduto = produtoEncontrado.nome;
  const total = produtoEncontrado.valorUnitário * quantidade;

  return { produto: nomeProduto, valor: total}
}

module.exports = { calculaTotalItem }
