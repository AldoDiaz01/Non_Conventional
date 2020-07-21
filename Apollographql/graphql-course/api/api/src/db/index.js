const low = require('lowdb') //1.7K (gzipped: 747)
const FileSync = require('lowdb/adapters/FileSync') //85.1K (gzipped: 26.1K)

const adapter = new FileSync('C:/Users/vitom/Documents/Documentos/Universidad/6/Basesdedatosnoconvencionales/Proyectos/Apollographql/graphql-course/api/api/src/db/db.json')
const db = low(adapter)

const createPetModel = require('./pet')
const createUserModel = require('./user')

module.exports = {
    models: {
        Pet: createPetModel(db),
        User: createUserModel(db),
    },
    db
}