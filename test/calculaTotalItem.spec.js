const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem, buscaProduto } = require('../calculaTotalItem');
 //testando somente um valorUnitário
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar com o nome e o valor do produto ', (done) => {
    expect(buscaProduto(1)).to.equal({ id: 1, Nome: 'Maçã', valorUnitário: 50 });
    done();
  });
});

lab.experiment('quando não-informa ID', () => {
  lab.test.skip('deve retornar com: valor não econtrado ', (done) => {
    expect(buscaProduto(7)).to.equal('Produto não encontrado');
    done();
  });
});
