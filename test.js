//Prueba de suma
const { suma } = require('./app.js');

test('Sumar 14 + 9 = 23', () => {
    
    let total = suma(14, 9);
    expect(total).toBe(23);
});

//Prueba de conversion
test("Conversion de Euro a USD", function() {
    
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.5);
})

test("Conversion de USD a JPY", function() {
 
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(10)).toBe(2000);
})

test("Conversion de JPY a GBP ", function() {
 
    const {fromYenToPound} = require('./app.js')
    expect(fromYenToPound(1000)).toBe(4.35);
})