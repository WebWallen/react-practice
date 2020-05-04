// High Order Component (HOC) -- component that renders another component
// Goal is to reuse code via render hijacking, prop manipulation, abstract state

import React from 'react';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

// Example Application: medical app with privileged information

const withAdminWarning = (WrappedComponent) => {
    // Notice the use of (implicit return) versus curly brackets - same syntax above, too
    return (props) => (
        <div>
            {/* Only show the private info when an admin is logged in */}
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            {!props.isAdmin && <p>Sorry, this page can only be accessed by admins!</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {/* Only show this info after the user has been authenticated; otherwise, inform invalid credentials */}
            { props.isAuthenticated ? <p>Why yes. That is you. Hello!</p> : <p>Why you be hacking? Go away!</p> }
           
            <WrappedComponent {...props} />
        </div>
    )
};

export const AdminInfo = withAdminWarning(Info);
export const AuthenticatedInfo = requireAuthentication(Info);