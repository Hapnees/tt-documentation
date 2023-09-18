// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  architectureId: [
    'architecture/review',
    {
      type: 'category',
      label: 'Сегменты',
      items: ['architecture/ui', 'architecture/api', 'architecture/model'],
    },
  ],
  reactHookFormId: ['libs/react-hook-form/review'],
}

module.exports = sidebars
