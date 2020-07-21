const nanoid = require('nanoid') //1.1K (gzipped: 600)

const createUserModel = db => {
    return{
        findOne(filter) {
            return db.get('user')
                .value()
        },
        create(user) {
            const newUser = {id: nanonid(), createdAt: Date.now(), ...user}
            //const newUser = {id: String, createdAt: Date.now(), ...user}

            db.set('user', newUser)
                .write()
            return newUser
        }
    }
}
module.exports = createUserModel