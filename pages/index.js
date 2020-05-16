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

const Home = ({count, types}) => {
  const { t } = useTranslation(['home']);

  return (
    <MainLayout>
      <Form layout="horizontal">
        <FormItem
          label={t('numbers')}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
        >
          <InputNumber
            size="large"
            min={1}
            style={{ width: 150 }}
            defaultValue={count}
            name="inputNumber"
          />
        </FormItem>

        <FormItem label={t('types')} labelCol={{ span: 6 }} wrapperCol={{ span: 12 }}>
          <Select mode="multiple" size="large" defaultValue="json" style={{ width: 200 }}>
            {types.map((type, i) => <Option value={type}>{type}</Option>)}
          </Select>
        </FormItem>

        <FormItem
          label={t('template')}
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

Home.getInitialProps = async ctx => {
  const res = await fetch('https://api.upcwangying.com/create-mock-data/index.json', {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    referrerPolicy: 'no-referrer',
  })
  const json = await res.json()
  return {...json}
}

export default Home
