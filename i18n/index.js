const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    zh: 'zh',
  },
  all: {
    en: 'en',
    zh: 'zh',
  },
}

module.exports = new NextI18Next({
  otherLanguages: ['zh'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
})
