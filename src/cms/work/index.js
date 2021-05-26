export default {
  name: 'work',
  label: 'Tonarbeiten',
  label_singular: 'Tonarbeit',
  folder: 'content/work',
  editor: {
    preview: false,
  },
  extension: 'yml',
  create: true,
  fields: [
    {
      label: 'Sammlung',
      name: 'collection',
      widget: 'hidden',
      default: 'work',
    },
    {
      label: 'Titel',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Bild',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Technik',
      name: 'technique',
      widget: 'relation',
      collection: 'technique',
      search_fields: ['title'],
      display_fields: ['title'],
      value_field: 'slug',
    },
  ],
};
