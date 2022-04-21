const UserService = require('../../app/services/userService')
const userService = require('../../app/services/userService')

describe('Unit test for userService class', ()=>{
    test('1. Create new user usning the userService', ()=>{
        const u =userService.create(1,'urielnat','uriel')
        
        expect(u.id).toBe(1)
        expect(u.username).toBe('urielnat')
        expect(u.name).toBe('uriel')
        expect(u.bio).not.toBeUndefined()

    })
    test('2.- Get all user data in list',()=>{
        const u =  userService.create(1,'urielnat','uriel')
        const userInfoList = UserService.getInfo(u)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe('urielnat')
        expect(userInfoList[2]).toBe('uriel')
        expect(userInfoList[3]).toBe('Sin bio')
    }),
    test('3. update username',()=>{
        const u = userService.create(1,'urielnat','uriel')
        
        userService.updateUserUsername(u, 'nathanUriel')
        expect(u.username).toBe('nathanUriel')
  
    }),
    test('4. Given a list of users give the list of usernames', ()=>{
        const user1 = UserService.create(1,'urielnat1','uriel')
        const user2 = UserService.create(1,'urielnat2','uriel')
        const user3 = UserService.create(1,'urielnat3','uriel')

        const usernames = userService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain('urielnat1')
        expect(usernames).toContain('urielnat2')
        expect(usernames).toContain('urielnat3')
    })
})