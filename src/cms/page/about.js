import header from '../symbols/header';
import meta from '../symbols/meta';

export default {
  file: 'content/pages/about.md',
  label: 'Über mich',
  name: 'about',
  fields: [
    {
      label: 'Sammlung',
      name: 'collection',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'hidden',
      default: 'about',
    },
    meta,
    header,
    {
      label: 'Inhalt',
      name: 'body',
      widget: 'markdown',
    },
  ],
};
