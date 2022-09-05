import React, {MouseEventHandler} from 'react';
import './Button.scss';
import Spinner from "../Spinner";

interface IButtons {
    expand?: 'block' | 'inline';
    fill?: 'outline' | 'fill';
    color?: 'brand' | 'success' | 'danger';
    isLoading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: any
}

const Button = ({expand = 'block', fill = 'fill', color = 'brand', isLoading = false, onClick, children}: IButtons) => {
    return <button className={`button ${expand} ${fill} ${color}`} onClick={onClick}>
                {isLoading ? <Spinner /> : children}
         </button>
}
export default Button;