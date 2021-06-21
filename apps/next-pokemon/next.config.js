const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  nx: {
    // Set this to false if you do not want to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
    future: {
      webpack5: true,
    },
  },
  // NOTE: https://stackoverflow.com/questions/64309158/nextjs-env-variable-is-always-undefined
  // https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
  publicRuntimeConfig: {
    API: process.env.API,
    PORT: process.env.PORT,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    API: process.env.API,
    PORT: process.env.PORT,
  },
  // env: {
  //   API: process.env.API,
  // },
});
