import {useTranslation} from '../i18n'
import {Layout} from 'antd';

const {Footer} = Layout;

const Foot = () => {
  const { t } = useTranslation(['footer']);
  return (
    <Footer style={{
      textAlign: 'center',
      backgroundColor: '#fcefe8'
    }}>
      {t('copyright')}
    </Footer>
  )
}


export default Foot
