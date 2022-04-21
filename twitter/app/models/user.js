class User{
    constructor(id,username,name,bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    set setUsername(newUserName){
        this.username = newUserName;
    }

    get getUsername(){
        return this.username
    }

    set setBio(newbio){
         this.bio = newbio
    }

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
       return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }

}

module.exports = User