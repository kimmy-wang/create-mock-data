import {withTranslation} from '../i18n'
import {Layout} from 'antd';

const {Header, Content, Footer} = Layout;

const HeaderRender = withTranslation('common')(({t}) => (
  <Header style={{
    position: 'fixed',
    zIndex: 1,
    width: '100vw',
    textAlign: 'center',
    backgroundColor: '#e3f9fd'
  }}>
    {t('title')}
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
    title={t('title')}
    logo='https://cdn.upcwangying.com/logo/mock-data.png'
    // layout='topmenu'
    fixedHeader
  >
    <HeaderRender />
    <Content style={{
      minHeight: 'calc(100vh - 64px - 90px)',
      paddingTop: '60px',
      backgroundColor: 'white'
    }}>
      {children}
    </Content>
    <FooterRender />
  </Layout>
)

MainLayout.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

export default withTranslation('common')(MainLayout)
