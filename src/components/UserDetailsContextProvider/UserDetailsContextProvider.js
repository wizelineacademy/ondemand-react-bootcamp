import { createContext, useState } from 'react';

//create a context, with createContext api
export const UserDetailsContext = createContext();

const UserDetailsContextProvider = (props) => {
        // this state will be shared with all components 
    const [userDetails, setUserDetails] = useState();

    return (
                // this is the provider providing state
        <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </UserDetailsContext.Provider>
    );
};

export default UserDetailsContextProvider;