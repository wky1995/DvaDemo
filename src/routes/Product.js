import React, { PureComponent } from "react";
import { connect } from "dva";
import { Table } from "antd";
class Product extends PureComponent {
  handleClick = () => {
    this.props.dispatch({
      type: "product/setName",
      data: {
        name: "zhangsan",
      },
    });
  };
  handleAsycClick = () => {
    this.props.dispatch({
      type: "product/setNameAsyc",
    });
  };

  render() {
    const columns = [
      {
        title: "TITLE",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
    ];

    const { name, list } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>
          <button onClick={this.handleClick}>123</button>
          <button onClick={this.handleAsycClick}>456</button>
        </div>
        <div>
          <Table columns={columns} dataSource={list} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.product.name,
    list: state.product.list,
  };
};
export default connect(mapStateToProps)(Product);
