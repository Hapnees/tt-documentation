// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  architectureId: ['architecture/review', 'architecture/layer-rules'],
  reactHookFormId: [
    'libs/react-hook-form/review',
    'libs/react-hook-form/controller',
    'libs/react-hook-form/form-values',
    'libs/react-hook-form/deep-form',
  ],
  reduxId: ['libs/redux/review'],
  e2eId: ['tests/e2e/review'],
}

module.exports = sidebars
