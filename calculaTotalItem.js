const listaProdutos = [
     {id: 1, nome: 'Maçã', valorUnitário: 10},
     {id: 2, nome: 'Banana', valorUnitário: 4},
     {id: 3, nome: 'Açai', valorUnitário: 6},
     {id: 4, nome: 'Café', valorUnitário: 50}
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
  console.log({ produto: nomeProduto, valor: total });
  return { produto: nomeProduto, valor: total}
}

module.exports = { calculaTotalItem }
