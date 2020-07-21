import React, { useState } from 'react'
import gql from 'graphql-tag' 
import { useQuery, useMutation } from '@apollo-react-hooks'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
import Loader from '../components/Loader'

const PETS_FIELDS = gql` 
    fragment PetsField  on Pet {
        id
        type
        name
        img
    }
`

const ALL_PETS = gql` {
    pets{...PetsField}
}
${PETS_FIELDS}
`
const NEW_PET = gql`
    mutation createPet($input: NewPetInput!){
        addPet(input: $input){...PetsField}
    }
    ${PETS_FIELDS}

`
export default function Pets() {
    const [modal, setModal] = useState(false)
    const { data, loading, error } = useQuery(ALL_PETS)
    const { newPet, pet } = useMutation (NEW_PET,{
        update(cache, {data: {addPet}}){
            const data = cache.readQuery({query: ALL_PETS})
            cache.writeQuery({
                query: ALL_PETS,
                data: {pets: [addPet, ...data.pets]}
            }) 
        }
    })

    const onSubmit = input => {
        setModal(false)
        newPet({
            variables: { input }
        })
            
    }

    if(loading) {
        return <Loader/>
    }
    if(error) {
        return <p>error</p>
    }
    if(modal) {
        return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
    }

    return (
        <div className="page pets-page">
            <section>
            <div className= "row betwee-xs middle-xs">
                <div className= "col-xs-10">
                    <h1>Pets</h1>
                </div>
                <div className= "col-xs-2">
                    <button onClick={()=> setModal(true)}>new pet</button>
                </div>
            </div>
            </section>
            <section>
                <PetsList pets={data.pets}/>
            </section>
        </div>
    )
}