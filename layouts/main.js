import {i18n, withTranslation} from '../i18n'
import {Layout, Avatar, Button} from 'antd';
import {RedoOutlined} from '@ant-design/icons';

const {Header, Content, Footer} = Layout;

const HeaderRender = withTranslation('common')(({t}) => (
  <Header style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 1,
    width: '100vw',
    textAlign: 'center',
    backgroundColor: '#e3f9fd'
  }}>
    <div><span><Avatar src='https://cdn.upcwangying.com/logo/mock-data.png'/></span> {t('title')}</div>
    <Button type="primary" shape="round" icon={<RedoOutlined/>} size='small'
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>{i18n.language === 'en' ? 'zh' : 'en'}</Button>
  </Header>
))

const FooterRender = withTranslation('footer')(({t}) => (
  <Footer style={{
    textAlign: 'center',
    backgroundColor: '#fcefe8'
  }}>
    {t('copyright')}
  </Footer>
))

const MainLayout = ({children, t}) => (
  <Layout
    style={{minHeight: '100vh'}}
  >
    <HeaderRender/>
    <Content style={{
      minHeight: 'calc(100vh - 64px - 90px)',
      paddingTop: '60px',
      backgroundColor: 'white'
    }}>
      {children}
    </Content>
    <FooterRender/>
  </Layout>
)

export default withTranslation('common')(MainLayout)
