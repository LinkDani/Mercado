const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('./calculaTotalItem');
 //testando somente um valorUnitário
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar com o nome e o valor do produto ', (done) => {
    expect(buscaProduto(1,5)).to.equal({ id: 1, Nome: 'Maçã', valorUnitário: 50 });
    done();
  });
});

lab.experiment('quando não-informa ID', () => {
  lab.test('deve retornar com: valor não econtrado ', (done) => {
    expect(buscaProduto(7,5)).to.equal('Produto não encontrado');
    done();
  });
});

lab.experiment('quando informa opção para exibir atributos de valorUnitário e produto', () => {
  lab.test('deve retornar com o vencedor', (done) => {
     const opcoes = ['Maçã', 'Banana', 'Açai'];
     const retorno = { resultado: [
       {id: 1, valorUnitário: 10}
       {id: 2, valorUnitário: 4}
       {id: 3, valorUnitário: 6}
       ]};
    done();
  });
});
