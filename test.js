const lab = require('lab');
const lab = exports.lab = lab.script();

const { expect } = require('code');

const { calcularTotalItem } = require('./index.js');

lab.experiment('Quando não informa parâmetros', () => {
  lab.test('Deve resultado vazio', (done) => {
    expect(calcularTotalItem()).to.equal({resultado: []});
    expect(calcularTotalItem([])).to.equal({resultado: []});
  });
});

//Implementação dos nomes do produto
lab.experiment('quando informa ID', () => {
lab.test('deve retornar com o nome e o valor do produto ', (done) => {
    const lista = ['Maçã', 'Banana', 'Limão', 'Abacaxi'];
    const retorno = { resultado:[{Id: 1,produto: 'Maçã', valor unitário: 4}, {Id: 2, produto: 'Banana', valor unitário: 3}, {Id: 3, produto: 'Limão', valor unitário: 5}, {Id: 6, produto: 'Abacaxi', valor unitário: 10}]};
    expect(calcularTotalItem(lista)).to.equal(retorno);
    done();
  });
});
