//to simplify data fetching and state management in your application
import { 
    
    useMutation, //for modifying the data
   
} from '@tanstack/react-query';
import { createUserAccount, signInAccount, signOutAccount } from '../appwrite/api';
import { INewUser } from '@/types';

//for creating a new user account
export const useCreateUserAccount = () => { //useCreateUserAccountMutation is a custom hook
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    });
};

//for signing in a user account
export const useSignInAccount = () => { // Mutation word is removed from the function name
    return useMutation({
        mutationFn: (user: {
            email: string;
            password: string;
        }) => signInAccount(user)
    }); 
};

export const useSignOutAccount = () => { // Mutation word is removed from the function name
    return useMutation({
        mutationFn: signOutAccount
    }); 
};
