import React from 'react';
import * as MaterialDesign from 'react-icons/md';
import {IconData} from "./IconData";
interface IIcon {
    name: string;
}
const Icon = ({name} : IIcon) => {
    // @ts-ignore
    const IconComponent = IconData[name];
    return <IconComponent />;
}
export default Icon;