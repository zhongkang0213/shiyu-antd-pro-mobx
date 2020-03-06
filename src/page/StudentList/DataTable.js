import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Divider, Popover, Popconfirm } from 'antd';

class DataTable extends React.Component {
  createColumns() {
    const { onDelete } = this.props;

    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => {
        // console.log(a.id);
        return parseInt(a.id) - parseInt(b.id)
      }
    }, {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '学号',
      dataIndex: 'sno',
      key: 'sno'
    }, {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at'
    }, {
      title: '更新时间',
      dataIndex: 'updated_at',
      key: 'updated_at',
      // render: text => (
      //   <Popover content={<img width="400" src={text} alt="" />} trigger="click">
      //     <img width="40" height="40" src={text} alt="" />
      //   </Popover>
      // )
    }, {
      title: '操作',
      dataIndex: 'p',
      key: 'p',
      render: (text, record) => (
        <span>
          <Link to={`/project/datareport/${text}`}>报表</Link>
          <Divider type="vertical" />
          <Link to={`/project/form/step/${text}`}>修改</Link>
          {
            record.state === 2 && (
              <React.Fragment>
                <Divider type="vertical" />
                <Popconfirm title="确定删除吗?" onConfirm={() => onDelete(text, record)} okText="确定" cancelText="取消">
                  <a href="javascript:;" style={{ color: 'red' }}>删除</a>
                </Popconfirm>
              </React.Fragment>
            )
          }
        </span>
      )
    }];

    return columns;
  }

  render() {
    const { data } = this.props;

    return <Table columns={this.createColumns()} dataSource={data} rowSelection={{}} rowKey="id" />;
  }
}

export default DataTable;
