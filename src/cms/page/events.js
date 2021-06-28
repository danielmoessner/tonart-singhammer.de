import header from '../symbols/header';
import meta from '../symbols/meta';
import section from '../symbols/section';

export default {
  file: 'content/pages/event.yml',
  label: 'Veranstaltungen',
  name: 'event',
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
      default: 'event',
    },
    meta,
    header,
    {
      label: 'Events',
      name: 'events',
      widget: 'object',
      fields: [...section, { label: 'Button', name: 'button', widget: 'string' }],
    },
    {
      label: 'Anmeldung',
      name: 'registration',
      widget: 'object',
      fields: [...section],
    },
  ],
};
