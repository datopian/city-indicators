Simple, static web page that uses [dashboard-js](https://github.com/datahq/dashboard-js) library to render visualizations.

## Development

### HTML and CSS

To improve layout, simply edit stylesheets in `css/` directory. The only HTML file is `index.html`.

### Widgets

We've modularized widgets into separate json files in `widgets/`. The `js/prepare.js` script bundles all json files into `config` variable in a way that `dashboard-js` can use it.

To add a new one, you need to create a json file in the directory. See other examples for syntax.

## Deployment

1. Update `dashboard-js` submodule
2. Bundle all widgets that will produce `js/script.js`: `node js/prepare.js`
  * This is needed as editing large config file is tedious.
3. Push to `master` branch
  * We're using GitHub pages which serves `index.html` file. Your deployment should be available at https://london.datahub.io
