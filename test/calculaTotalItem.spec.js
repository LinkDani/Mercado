const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('../calculaTotalItem');
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar com o nome e o valor do produto ', (done) => {
    expect(calculaTotalItem(1,4)).to.equal({ produto: 'Maçã', valor: 40 });
    done();
  });
});
