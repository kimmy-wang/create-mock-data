import PropTypes from 'prop-types';
import React from 'react';

import { useTranslation } from '../i18n';

const Error = ({ statusCode }) => {
  const { t } = useTranslation('common');

  return (
    <div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <h1 style={{color: '#f00056'}}>
        {statusCode
          ? t('error-with-status', { statusCode })
          : t('error-without-status')}
      </h1>
    </div>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ['common'],
    statusCode
  };
};

Error.defaultProps = {
  statusCode: null
};

Error.propTypes = {
  statusCode: PropTypes.number
};

export default Error;
