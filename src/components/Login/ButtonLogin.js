import React, { Component } from "react";
import { translate } from "react-translate";

class Button extends Component {
  render() {
    let { t } = this.props;
    return (
      <button onClick={this.props.onClick}>{t(this.props.content)}</button>
    );
  }
}

export default translate("buttons")(Button);
