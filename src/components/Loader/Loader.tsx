import React  from 'react';

import {LoaderImage} from 'assets/images';
import './Loader.scss';

const Loader = () =>  {
    return (
        <div className='loader-ctn full-page'>
            <div className="loader-image">
                <img src={LoaderImage} alt="Loader Image"/>
            </div>
        </div>
    )
}
export default Loader;