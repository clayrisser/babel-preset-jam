import { declare } from '@babel/helper-plugin-utils';

export default declare((_api, opts) => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          ...opts,
          targets: {
            ...opts?.targets,
            node: '6'
          }
        }
      ],
      'babel-preset-everything'
    ],
    plugins: ['babel-plugin-transform-async-super', 'babel-plugin-macros']
  };
});
