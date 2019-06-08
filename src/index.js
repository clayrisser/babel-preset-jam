import { declare } from '@babel/helper-plugin-utils';

export default declare((_api, opts) => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3,
          useBuiltIns: 'usage',
          ...opts,
          targets: {
            node: '6',
            ...opts?.targets
          }
        }
      ],
      'babel-preset-everything'
    ],
    plugins: ['babel-plugin-transform-async-super', 'babel-plugin-macros']
  };
});
