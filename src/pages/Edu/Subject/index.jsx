import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import './index.less';
import { getSubjectList ,getSecSubjectList} from './redux';
const columns = [
  { title: '课程分类', dataIndex: 'title', key: 'name' },
  {
    title: '操作',
    dataIndex: '',
    width: 200,
    key: 'x',
    render: () => (
      <>
        <Button type="primary" style={{ marginRight: '10px' }}>
          <FormOutlined />
        </Button>
        <Button type="danger">
          <DeleteOutlined />
        </Button>
      </>
    ),
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    description:
      'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
];
@connect((state) => ({ subjectList: state.subjectList }), { getSubjectList, getSecSubjectList })
class Subject extends Component {
  page=1
  componentDidMount() {
    this.props.getSubjectList(1, 5);
  }
  // 页码发生变化时，触发的回调
  handleChange = (page, pageSize) => {
    this.props.getSubjectList(page, pageSize);
  };
  handleShowSizeChange = (page, pageSize) => {
    this.props.getSubjectList(1, pageSize);
  };
  handleExpand = (expanded,record) => {
    if (expanded) {
      this.props.getSecSubjectList(record._id)
    }
  }
  render() {
    return (
      <>
        <div className="subject">
          <Button type="primary" icon={<PlusOutlined />}>
            新建
          </Button>

          <Table
            style={{ marginTop: '20px' }}
            columns={columns}
            expandable={{
              onExpand=this.handleExpand
            }}
            dataSource={this.props.subjectList.items}
            // 唯一Id
            rowKey="_id"
            // 分页器
            pagination={{
              total: this.props.subjectList.total,
              // 跳到某页
              showQuickJumper: true,
              // 下拉选项框，一页展示几条
              showSizeChanger: true,
              // 一页显示几条选项
              pageSizeOptions: ['5', '10', '15'],
              // 默认显示一页5条
              defaultPageSize: 5,

              onChange: this.handleChange,
              onShowSizeChange: this.handleShowSizeChange,
            }}
          />
        </div>
      </>
    );
  }
}
export default Subject;
