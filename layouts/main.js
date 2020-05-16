import {useTranslation} from '../i18n'
import {Layout} from 'antd';
import Header from "../components/Header";
import Footer from "../components/Footer";

const {Content} = Layout;

const MainLayout = ({children}) => {
  const { t } = useTranslation(['common']);
  return (
    <Layout
      style={{minHeight: '100vh'}}
    >
      <Header />
      <Content style={{
        minHeight: 'calc(100vh - 64px - 90px)',
        paddingTop: '60px',
        backgroundColor: 'white'
      }}>
        {children}
      </Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
