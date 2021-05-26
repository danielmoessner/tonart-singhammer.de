export default {
  name: 'service',
  label: 'Leistungen',
  label_singular: 'Leistung',
  folder: 'content/service',
  editor: {
    preview: false,
  },
  extension: 'md',
  create: true,
  fields: [
    {
      label: 'Sammlung',
      name: 'collection',
      widget: 'hidden',
      default: 'service',
    },
    {
      label: 'Vortitel',
      name: 'pre',
      widget: 'string',
    },
    {
      label: 'Titel',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Sortierung',
      name: 'order',
      widget: 'number',
    },
    {
      label: 'Inhalt',
      name: 'body',
      widget: 'markdown',
    },
  ],
};
