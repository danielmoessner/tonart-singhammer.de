export default {
  name: 'setting',
  label: 'Einstellungen',
  label_singular: 'Einstellung',
  delete: false,
  editor: {
    preview: false,
  },
  files: [
    {
      file: 'content/settings/global.yml',
      label: 'Global',
      name: 'global-settings',
      preview: false,
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'setting',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'global',
        },
        {
          label: 'Titel in der Navigation',
          name: 'navigationTitle',
          widget: 'string',
          default: 'Wildtiere',
        },
        {
          label: 'URL der Seite',
          name: 'siteUrl',
          widget: 'string',
          required: false,
        },
        {
          label: 'Favicon',
          name: 'favicon',
          widget: 'image',
        },
      ],
    },
  ],
};
