import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({component: Component, isAuthenticated, ...rest}) {
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/signIn',
          state: {from: props.location.pathname}
        }}/>
    )}/>
  );
}

export default PrivateRoute;