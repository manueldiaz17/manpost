import React, { Component } from "react";
import { translate } from "react-translate";

class FormularioButton extends Component {
  render() {
    let { t } = this.props;
    return <button className="form-control">{t(this.props.content)}</button>;
  }
}

export default translate("buttons")(FormularioButton);
