import {withTranslation} from '../i18n'
import {Layout} from 'antd';

const {Footer} = Layout;

const Foot = ({t}) => (
  <Footer style={{
    textAlign: 'center',
    backgroundColor: '#fcefe8'
  }}>
    {t('copyright')}
  </Footer>
)

export default withTranslation('footer')(Foot)
