const userView = require('./../../app/views/userView')

describe('Test for user view',() =>{
    test('Return an error object when try to create a new user with an null payload', () =>{
        const payload=null
        const result= userView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    }),
    test('Return an error object when try to create a new user with a payload with invalid properties', () =>{
        const payload={userName: null,name: 12,id: 'id'}
        const result= userView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    }),
    test('Return an error object when try to create a new user with a payload with missing properties', () =>{
        const payload={userName: null}
        const result= userView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    }),
    test('Create a user bu  given valid payload', () =>{
        const payload={userName: 'username',id:1,name:'name'}
        const result= userView.createUser(payload)
        expect(result.name).toBe('name')
        expect(result.username).toBe('username')
        expect(result.id).toBe(1)
    })
})