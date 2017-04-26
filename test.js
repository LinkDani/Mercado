const lab = require('lab');
const lab = exports.lab = lab.script();

const { expect } = require('code');

const { calcularTotalItem } = require.('./calc');

lab.experiment('Quando não informa parâmetros', () => {
  lab.test('Deve resultado vazio', (done) => {
    expect(calcularTotalItem()).to.equal({resultado: []});
    expect(calcularTotalItem([])).to.equal({resultado: []});
  });
});

//Implementação dos nomes do produto
lab.experiment('quando informa ID', () => {
lab.test('deve retornar com o valor do produto ', (done) => {
    const lista = ['Maçã', 'Banana', 'Limão', 'Abacaxi'];
    const retorno = { resultado:[{produto: 'Maçã', valor: 18}, {produto: 'Banana', valor: 20}, {produto: 'Limão', valor: 22}, {produto: 'Abacaxi', valor: 24}]};
    expect(calcularTotalItem(lista)).to.equal(retorno);
    done();
  });
});
