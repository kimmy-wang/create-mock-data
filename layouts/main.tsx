import dynamic from 'next/dynamic'

import {Layout} from 'antd';

const {Footer} = Layout;

import {BasicLayoutProps} from "@ant-design/pro-layout";

const ProLayout = dynamic(() => import('@ant-design/pro-layout'), {
  ssr: false,
})

const footerRender = (props: BasicLayoutProps) => (
  <Footer>Footer</Footer>
)

export default ({children}) => (
  <ProLayout
    style={{minHeight: '100vh'}}
    title='Create Mock Data'
    logo='https://cdn.upcwangying.com/logo/mock-data.png'
    layout='topmenu'
    fixedHeader
    footerRender={footerRender}
  >
    <div style={{minHeight: 'calc(100vh - 64px - 90px)', paddingTop: '20px'}}>
      {children}
    </div>
  </ProLayout>
)
