const Spiderman = require('./../app/spiderman');
const spiderman = require('./../app/spiderman')

describe("Unit Test for spiderman Class",() =>{

	test("1) create an spiderman object",() =>{

		const aG = new spiderman('spiderman sony', 31,'Andrew Garfield', 2,'sony')

     
		expect(aG.name).toBe('spiderman sony')
		expect(aG.age).toBe(31)
		expect(aG.actor).toBe('Andrew Garfield')
		expect(aG.movies).toBe(2)
		expect(aG.studio).toBe('sony')
	});
	


})


describe('2) Use method getInfo()', ()=>{
	const tH = new Spiderman('Spiderman marvel',25,'Tom Holland',5,'Marvel')
	expect(tH.getInfo()).toBe('Hey, I´m Tom Holland from Marvel studio')
})
