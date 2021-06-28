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
          label: 'Favicon',
          name: 'favicon',
          widget: 'image',
        },
        {
          label: 'Telefon',
          name: 'phone',
          widget: 'string',
        },
        {
          label: 'E-Mail',
          name: 'email',
          widget: 'string',
        },
        {
          label: 'Adresse',
          name: 'address',
          widget: 'text',
        },
      ],
    },
  ],
};
