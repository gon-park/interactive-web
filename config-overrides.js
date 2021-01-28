const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const primaryTextColor = '#222';
const secondaryColor = '#555';

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': secondaryColor,

      '@link-color': '#409eff',
      '@success-color': '#52c41a',
      '@warning-color': '#fae100',
      '@error-color': '#f8626c',
      '@font-size-base': '14px',
      '@heading-color': 'rgba(0, 0, 0, 0.85)',
      '@disabled-color ': '#bbb',
      '@border-radius-base': '4px',
      '@border-color-base': '#d9d9d9',
      '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',

      '@btn-primary-bg': '#ffcd00',
      '@btn-primary-color': primaryTextColor
    }
  }),
);
