import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useSelector((store) => store.user);;

    return (
        <Route
            {...rest}
            render={props => (
                isAuthenticated === true ?
                    <Component {...props} /> :
                    <Navigate to='/login' />
            )} 
        />
    )
}

export const PublicRoute = ({ component: Component, ...rest}) => {
    const { isAuthenticated } = useSelector((store) => store.user);;

    return (
        <Route
            { ...rest }
            render={ ( props ) =>
                //if the user is logged in take them to app itself, else show
                !!isAuthenticated ? (
                <Navigate
                    to='/user'
                />
                ) : (
                React.createElement( Component, props )
                )
            }
        />
    )
}