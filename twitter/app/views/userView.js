const userService = require('./../services/userService')

class UserView{
    static createUser(user){
         let objService ={};
        if(user!=null){

            if(user.id!=null&&user.userName!=null&&user.name!=null){
    
                objService = userService.create(user.id,user.userName,user.name)
            }else{
                objService.error = 'necesitan tener un valor válido'
            }
        }else{
            objService.error = 'payload no existe'
        } 

        return objService

    }
}

module.exports = UserView