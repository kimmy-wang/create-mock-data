import App from 'next/app';
import React from 'react';
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import {appWithTranslation} from '../i18n';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
  constructor(props) {
    super(props)
    this.persistor = persistStore(props.reduxStore)
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <PersistGate
          loading={null}
          persistor={this.persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(appWithTranslation(MyApp));
