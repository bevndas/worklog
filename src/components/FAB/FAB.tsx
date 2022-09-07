import React from 'react';
import './FAB.scss';
import Icon from '../Icon';

interface IFab {
    position: 'top-center' | 'top-left' | 'top-right' |
                'bottom-center' | 'bottom-left' | 'bottom-right' |
                'mid-center' | 'mid-left' | 'mid-right';
    action: () => void;
}

const FAB: React.FC<IFab> = ({position =  'bottom-right', action}) => {
    return (
        <div className={`fab ${position}`} onClick={action}>
            <Icon name='plus'/>
        </div>
    )
}
export default FAB;