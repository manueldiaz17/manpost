import React, { Component } from 'react';
import {translate} from 'react-translate';

class FormularioLabel extends Component {
   
    render() { 
        let {t} = this.props;
        return (  
        <label>{t(this.props.content)}</label>
        );
    }
}
 
export default translate("labels") (FormularioLabel);