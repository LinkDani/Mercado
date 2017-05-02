const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('./calculaTotalItem');

lab.experiment('quando informa ID', () => {
  lab.test('deve retornar com o nome e o valor do produto ', (done) => {
    expect(buscaProduto(1,5)).to.equal({ id: 1, Nome: 'Maça', valorUnitário: 50 });
    done();
  });
});

lab.experiment('quando não-informa ID', () => {
  lab.test('deve retornar com: valor não econtrado ', (done) => {
    expect(buscaProduto(7,5)).to.equal('Produto não encontrado');
    done();
  });
});
