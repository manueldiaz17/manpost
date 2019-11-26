import React, { Component } from 'react';
import {translate} from 'react-translate'

class LoginLabel extends Component {
    state = {  }
    render() { 
        let {t} = this.props;
        return (  
            <div className="Login_Label">
                {t(this.props.content)}
            </div>
        );
    }
}
 
export default translate('labels')(LoginLabel);