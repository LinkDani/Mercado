const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('./calculaTotalItem');

lab.experiment('quando informa ID', () => {
  lab.test('deve retornar com o nome e o valor do produto ', (done) => {
    expect((1,5)).to.equal({ Id: 1, Nome: 'Maça', valorUnitário: 50 });
    done();
  });
});
