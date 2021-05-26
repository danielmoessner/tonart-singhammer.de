export default {
  name: 'technique',
  label: 'Töpfertechniken',
  label_singular: 'Töpfertechnik',
  folder: 'content/technique',
  slug: '{{fields.slug}}',
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
      default: 'technique',
    },
    {
      label: 'Titel',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
    },
    {
      label: 'Beschreibung',
      name: 'description',
      widget: 'text',
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
    },
    {
      label: 'Features',
      name: 'features',
      widget: 'list',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
        },
      ],
    },
  ],
};
