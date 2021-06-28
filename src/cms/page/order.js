import header from '../symbols/header';
import linkButton from '../symbols/linkButton';
import meta from '../symbols/meta';

export default {
  file: 'content/pages/order.yml',
  label: 'Auftragsarbeiten',
  name: 'order',
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
      default: 'order',
    },
    meta,
    header,
    {
      label: 'Auftragsarbeiten',
      name: 'order',
      widget: 'object',
      fields: [
        {
          label: 'Button',
          name: 'ctaButton',
          widget: 'object',
          fields: linkButton,
        },
      ],
    },
  ],
};
