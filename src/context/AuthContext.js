import React, { Component } from "react";

//crear el context
const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;
class AuthProvaider extends Component {
  state = {
    user : {
        ID: '1',
        LOGIN: 'example',
        EMAIL: '@example.com',
        ROLE: 'admin',
        LANG: 'en'
    },
  };

 
  
  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvaider;
