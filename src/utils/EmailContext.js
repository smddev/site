import React from 'react';

const EmailContext = React.createContext({
    email: "",
    changeEmail: () => {},
});

export default EmailContext;