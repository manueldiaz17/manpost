import React, { Component } from 'react';
import {translate} from 'react-translate';
class FormulariioTitulo extends Component {
    
    render() { 
        let {t} = this.props;
        return (
        <h2>{t(this.props.content)}</h2>
          );
    }
}
 
export default translate("titulos")(FormulariioTitulo);