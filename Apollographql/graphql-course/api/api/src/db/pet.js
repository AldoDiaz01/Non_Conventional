const {nanoid} = require('nanoid') //1.1K (gzipped: 600)

const createPetModel = db => {
    return {
        findMany(filter) {
            return db.get('pet')
                .filter(filter)
                .orderBy(['createdAt'], ['desc'])
                .value()
        },
        findOne(filter) {
            return db.get('pet')
                .find(filter)
                .value()
        },
        create(pet) {
            const id = nanoid()
            const newPet = { id: id, createdAt: Date.now(), ...pet }
            //const newPet = { id: String, createdAt: Date.now(), ...pet }

            db.get('pet')
                .push(newPet)
                .write()
            return newPet
        }
    }
}
module.exports = createPetModel