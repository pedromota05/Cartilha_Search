require('dotenv').config();

const MATOMO_URL =  process.env.MATOMO_URL;
const MATOMO_SITE_ID = process.env.MATOMO_SITE_ID;

export default {
  matomoUrl: MATOMO_URL,
  siteId: MATOMO_SITE_ID,
};
