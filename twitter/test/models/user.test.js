const user = require('../../app/models/user')

describe('Unit test for user class', ()=>{
    test('Create and user object', ()=>{
        const u = new user(1,'urielnat','uriel','bio')
        
        expect(u.id).toBe(1)
        expect(u.username).toBe('urielnat')
        expect(u.name).toBe('uriel')
        expect(u.bio).toBe('bio')
        expect(u.dateCreated).not.toBeUndefined()
        expect(u.lastUpdated).not.toBeUndefined()
    }),
    test('Add getters',()=>{
        const u = new user(1,'urielnat','uriel','bio')
        expect(u.getUsername).toBe('urielnat')
        expect(u.getBio).toBe('bio')
        expect(u.getDateCreated).not.toBeUndefined()
        expect(u.getLastUpdated).not.toBeUndefined()
    }),
    test('Add setters',()=>{
        const u = new user(1,'urielnat','uriel','bio')
        
        u.setUsername = 'nathanUriel'
        expect(u.getUsername).toBe('nathanUriel')
        u.setBio = 'New bio'
        expect(u.getBio).toBe('New bio')
  
    })
})