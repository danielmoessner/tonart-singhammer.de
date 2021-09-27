import CMS, { init } from 'netlify-cms-app';
import { de } from 'netlify-cms-locales';
import event from './event';
import order from './order';
import page from './page';
import setting from './setting';
import technique from './technique';
import work from './work';

// See https://www.netlifycms.org/docs/configuration-options/#locale
CMS.registerLocale('de', de);

// See https://www.netlifycms.org/docs/beta-features/#manual-initialization
init({
  config: {
    backend: {
      name: 'git-gateway',
      branch: 'main',
      repo: 'danielmoessner/tonart-singhammer.de',
    },
    local_backend: true,
    locale: 'de',
    display_url: 'https://tonart-singhammer.de',
    site_url: 'https://tonart-singhammer.de',
    media_folder: '/content/media',
    public_folder: '../media',
    collections: [...page, order, technique, work, event, setting],
  },
});
