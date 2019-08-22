import { css } from 'docz-plugin-css';

export default {
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Merriweather:900|Open+Sans|Roboto&display=swap" rel="styleshee'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Raleway&display=swap'
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap'
        }
      ]
    }
  },
  modifyBundlerConfig: bundlerConfig => {
    const rules = [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ];
    bundlerConfig.module.rules.push(...rules);
    return bundlerConfig;
  }
};
