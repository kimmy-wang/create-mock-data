import {useTranslation} from '../i18n'
import {
  Form,
  Select,
  InputNumber,
  Table,
  Button,
  Space
} from 'antd'

import MainLayout from '../layouts/main'

const FormItem = Form.Item
const Option = Select.Option

const columns = [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    type: 'John Brown',
    value: 32,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    type: 'Jim Green',
    value: 42,
    tags: ['loser'],
  },
  {
    key: '3',
    type: 'Joe Black',
    value: 32,
    tags: ['cool', 'teacher'],
  },
];

const Home = () => {
  const { t } = useTranslation(['common', 'footer']);
  return (
    <MainLayout>
      <Form layout="horizontal">
        <FormItem
          label="生成数量"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
        >
          <InputNumber
            size="large"
            min={1}
            style={{ width: 150 }}
            defaultValue={3}
            name="inputNumber"
          />
        </FormItem>

        <FormItem label="生成类型" labelCol={{ span: 6 }} wrapperCol={{ span: 12 }}>
          <Select mode="multiple" size="large" defaultValue="json" style={{ width: 200 }}>
            <Option value="json">json</Option>
            <Option value="yaml">yaml</Option>
            <Option value="toml">toml</Option>
          </Select>
        </FormItem>

        <FormItem
          label="数据模板"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
        >
          <Table columns={columns} dataSource={data} />
        </FormItem>
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button size="large" type="primary" htmlType="submit">
            OK
          </Button>
          <Button size="large" style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </FormItem>
      </Form>
    </MainLayout>
  )
}

export default Home
