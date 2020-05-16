import {Layout, Avatar, Button} from 'antd';
import {RedoOutlined} from '@ant-design/icons';

import {i18n, useTranslation} from '../i18n'

const {Header} = Layout;

const Head = () => {
  const { t } = useTranslation(['common']);
  return (
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
      <div style={{
        display: 'flex',
        width: '200px',
        flexDirection: 'row'}}>
        <div><Avatar src='https://cdn.upcwangying.com/logo/mock-data.png'/></div> {t('title')}
      </div>
      <Button type="primary" shape="round" icon={<RedoOutlined/>} size='small'
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}><span style={{width: '20px'}}>{i18n.language === 'en' ? 'zh' : 'en'}</span></Button>
    </Header>
  )
}

export default Head
