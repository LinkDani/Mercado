const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('../calculaTotalItem');
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar o recibo de compra:', (done) => {
    expect(calculaTotalItem(1,4)).to.equal({ produto: 'Maçã', valor: 40 });
    expect(calculaTotalItem(2,200)).to.equal({ produto: 'Banana', valor: 800 });
    expect(calculaTotalItem(3,20)).to.equal({ produto: 'Açai', valor: 120});
    expect(calculaTotalItem(4,50)).to.equal({ produto: 'Café', valor: 2500});
    done();
  });
});
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar o recibo de compra:', (done) => {
    expect(calculaTotalItem(1,4,5)).to.equal({ produto: 'Maçã', valor: 35 });
    expect(calculaTotalItem(2,200,100)).to.equal({ produto: 'Banana', valor: 700 });
    expect(calculaTotalItem(3,20,10)).to.equal({ produto: 'Açai', valor: 110});
    expect(calculaTotalItem(4,50,30)).to.equal({ produto: 'Café', valor: 2470});
    done();
  });
});
