export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:4321', 'http://localhost:4322', 'http://127.0.0.1:4322', 'http://127.0.0.1:13388', 'https://psychologiamarketingu.edu.pl', 'https://www.psychologiamarketingu.edu.pl', 'https://cms.psychologiamarketingu.edu.pl'],
      headers: '*',
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
