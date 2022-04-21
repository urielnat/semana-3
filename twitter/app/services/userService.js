const User = require('./../models/user')

class UserService{
    static create(id,username,name,){
        return new User(id, username, name,'Sin bio')
  
    }



    static getInfo(user = new User){
       return [user.id,user.username,user.name,user.bio]
    }

    static updateUserUsername(user = new User,newName){
        user.username = newName
    }

    static getAllUsernames(usuarios=[]){
        let userNames = []
        usuarios.forEach(item=>{
            userNames.push(item.username)
        })
        return userNames
    }

    


}

module.exports = UserService