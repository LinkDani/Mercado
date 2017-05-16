const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { calculaTotalItem } = require('../calculaTotalItem');
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar o recibo de compra:', (done) => {
    expect(calculaTotalItem(1,4)).to.equal({ produto: 'Maçã da fruteira da avenida', valor: 40 });
    expect(calculaTotalItem(2,200)).to.equal({ produto: 'Banana verde do kiosque', valor: 800 });
    expect(calculaTotalItem(3,20)).to.equal({ produto: 'Açai artificial', valor: 120});
    expect(calculaTotalItem(4,50)).to.equal({ produto: 'Café do mercado público', valor: 2500});
    done();
  });
});
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar o recibo de compra com o desconto:', (done) => {
    expect(calculaTotalItem(1,4,50)).to.equal({ produto: 'Maçã da fruteira da avenida', valor: 0 });
    expect(calculaTotalItem(2,200,100)).to.equal({ produto: 'Banana verde do kiosque', valor: 700 });
    expect(calculaTotalItem(3,20,10)).to.equal({ produto: 'Açai artificial', valor: 110});
    expect(calculaTotalItem(4,50,30)).to.equal({ produto: 'Café do mercado público', valor: 2470});
    done();
  });
});
lab.experiment('quando informa ID', () => {
  lab.test('deve retornar o recibo de compra com o desconto desnecessário:', (done) => {
    expect(calculaTotalItem(1,4,50)).to.equal({ produto: 'Maçã da fruteira da avenida', valor: 0 });
    expect(calculaTotalItem(2,200,801)).to.equal({ produto: 'Banana verde do kiosque', valor: 0 });
    expect(calculaTotalItem(3,20,10)).to.equal({ produto: 'Açai artificial', valor: 110});
    expect(calculaTotalItem(4,50,30)).to.equal({ produto: 'Café do mercado público', valor: 2470});
    done();
  });
});
