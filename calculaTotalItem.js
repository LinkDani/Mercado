const listaProdutos = [
     {id: 1, nome: 'Maçã', valorUnitário: 10},
     {id: 2, nome: 'Banana', valorUnitário: 4},
     {id: 3, nome: 'Açai', valorUnitário: 6}
];

const buscaProduto = function(codigo) {
  // listaProdutos.find ....

  return { id: 1, Nome: 'Maçã', valorUnitário: 50 }
}

const calculaTotalItem = function(codigo, quantidade) {
  const p = buscaProduto(codigo);

  return { produto: 'Maça', valor: 18}
}

module.exports = { buscaProduto, calculaTotalItem }
