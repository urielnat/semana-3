const mc = require('../app/missionCommander')


describe('Unit Tests for Mission Commander Class', () =>{
	test('1) Create a mission commander objet', () =>{
	const myMc = new mc('Carlo')
	expect(myMc.name).toBe('Carlo')
	
});
	
})
