import {isEqual } from  'date-fns';

export const test = () => {}

export const isEqualDate  =(firstDate: Date, secondDate: Date): boolean => {
    return isEqual(firstDate, secondDate);
}