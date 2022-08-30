import React from 'react';
import './Button.scss';
import Spinner from "../Spinner";

interface IButtons {
    expand?: 'block' | 'inline';
    fill?: 'outline' | 'fill';
    color?: 'brand' | 'success' | 'danger';
    isLoading?: boolean;
    children: any
}

const Button = ({expand = 'block', fill = 'fill', color = 'brand', isLoading = false, children}: IButtons) => {
    return <button className={`button ${expand} ${fill} ${color}`}>
                {isLoading ? <Spinner /> : children}
         </button>
}
export default Button;