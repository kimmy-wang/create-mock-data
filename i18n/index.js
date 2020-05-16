import NextI18Next from 'next-i18next-serverless';
import getConfig from 'next/config';

const getNextI18NextInstance = nextConfig => {
  return new NextI18Next(nextConfig, {
    browserLanguageDetection: false,
    serverLanguageDetection: false,
    partialBundledLanguages: false,
    defaultLanguage: 'en',
    otherLanguages: ['zh'],
    lng: 'en',
    allLanguages: ['en', 'zh']
  });
};

export const {
  appWithTranslation,
  useTranslation,
  withTranslation,
  Link,
  i18n
} = getNextI18NextInstance(getConfig());

export const NextI18NextInstance = getNextI18NextInstance(getConfig());
