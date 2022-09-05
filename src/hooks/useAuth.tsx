import {setData} from '../utils/storage';

const useAuth =  () =>  {
    const handleLogin = (jwtToken: string) => {
        setData('token', jwtToken);
    }

    const handleLogout = ()  => {
        setData('token', '');
    }
    return {handleLogin, handleLogout} as const;
}
export default useAuth;