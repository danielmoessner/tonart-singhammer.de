import header from '../symbols/header';
import meta from '../symbols/meta';

export default {
  file: 'content/pages/contact.yml',
  label: 'Kontakt',
  name: 'contact',
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
      default: 'contact',
    },
    meta,
    header,
    {
      label: 'Kontakt',
      name: 'contact',
      widget: 'object',
      fields: [
        {
          label: 'Titel Kontakt',
          name: 'titleContact',
          widget: 'string',
        },
        {
          label: 'Text Kontakt',
          name: 'textContact',
          widget: 'text',
        },
        {
          label: 'Title Adresse',
          name: 'titleAddress',
          widget: 'string',
        },
        {
          label: 'Text Adresse',
          name: 'textAddress',
          widget: 'text',
        },
      ],
    },
  ],
};
