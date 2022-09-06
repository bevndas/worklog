import React from 'react';
import InputGroup from '../../InputGroup';
import Icon from '../../Icon';

const SearchBar  = () => {
    return (
        <InputGroup icon={<Icon name='search' />} control={<input type='text' placeholder='Search'/>} />
    )
}
export default SearchBar;