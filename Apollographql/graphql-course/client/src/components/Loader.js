import React from 'react' 
import ClipLoader from 'react-spinners/ClipLoader'

const Loader = () =>
    <div className='full-page-loader'>
        <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={'#345D1'}
            loading={true}
        />
    </div>

export default Loader