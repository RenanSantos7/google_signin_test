import { createContext, ReactNode, useContext, useState } from 'react';
import { IUser } from '../types';

type User = IUser | null;

interface IAuthContext {
    currentUser: User;
    loading: boolean;
    isSignedIn: boolean,
};

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default function AuthProvider ({ children }: {children: ReactNode}) {
    const [currentUser, setCurrentUser] = useState<User>(null);
    const [loading, setLoading] = useState(false);


    return (
        <AuthContext.Provider value={{ 
            currentUser,
            loading,
            isSignedIn: !!currentUser,
         }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuthContext(){
    const context = useContext(AuthContext);
    if(!context) throw new Error('AuthContext não está sendo provido neste componente');
    return context;
}