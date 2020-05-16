import {useTranslation} from '../i18n'
import {Layout} from 'antd';
import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";

const {Content} = Layout;

const MainLayout = ({children}) => {
  const { t } = useTranslation(['common']);
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>{t('title')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.upcwangying.com/logo/mock-data.png"/>
      </Head>
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
    </>
  )
}

export default MainLayout
