import React, {useState, createContext, useEffect, useMemo} from 'react';

export const UserState = createContext();

const UserStore = (props) => {
  const [state, setState] = useState({
    token: null,
    userId: null,
    name: null,
    phoneNumber: null,
    phoneNumber: null,
    card: [],
  });

  const setStater = (att, value) => {
    let oldState = state;
    oldState[att] = value;
    setState({...oldState});
  };

  const auth = useMemo(
    () => ({
      login: (userName, password) => {
        console.log(userName + ': ' + password);
        setStater('token', 'token');
      },
      logout: () => {},
    }),
    [],
  );

  return (
    <UserState.Provider value={{state, setStater, auth}}>
      {props.children}
    </UserState.Provider>
  );
};

export default UserStore;
