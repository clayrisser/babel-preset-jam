import { declare } from '@babel/helper-plugin-utils';

export default declare((_api, opts) => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          ...opts,
          targets: {
            corejs: 3,
            node: '6',
            useBuiltIns: 'usage',
            ...opts?.targets
          }
        }
      ],
      'babel-preset-everything'
    ],
    plugins: ['babel-plugin-transform-async-super', 'babel-plugin-macros']
  };
});
