export  const setData = (key: string, value: any)=> {
    localStorage.setItem(key, value);
}

export const getData  = (key: string): string | null => {
    return  localStorage.getItem(key);
}

