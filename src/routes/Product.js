import React, { PureComponent } from "react";
import { connect } from "dva";

import * as apis from "../services/example";

class Product extends PureComponent {
  handleClick = () => {
    this.props.dispatch({
      type: "product/setName",
      data: {
        name: "zhangsan"
      }
    });
  };
  handleAsycClick = () => {
    this.props.dispatch({
      type: "product/setNameAsyc",
      data: {
        name: "zhangsan"
      }
    });
  };

  componentDidMount() {
    apis.testCode().then(res => {
      console.log(res.data);
    });
  }
  render() {
    const { name } = this.props;

    return (
      <div>
        <div>{name}</div>
        <div>
          <button onClick={this.handleClick}>123</button>
          <button onClick={this.handleAsycClick}>456</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.product.name
  };
};
export default connect(mapStateToProps)(Product);
