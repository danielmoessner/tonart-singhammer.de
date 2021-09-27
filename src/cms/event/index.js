export default {
  name: 'event',
  label: 'Veranstaltungen',
  label_singular: 'Veranstaltungen',
  editor: {
    preview: false,
  },
  folder: 'content/event',
  extension: 'yml',
  create: true,
  slug: '{{slug}}',
  fields: [
    {
      label: 'Sammlung',
      name: 'collection',
      widget: 'hidden',
      default: 'event',
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
      hint: 'Zb.: toepferkurs',
    },
    {
      label: 'Anfang',
      name: 'start',
      widget: 'datetime',
      date_format: 'DD.MM.YYYY',
      time_format: 'HH:mm',
    },
    {
      label: 'Ende',
      name: 'end',
      widget: 'datetime',
      date_format: 'DD.MM.YYYY',
      time_format: 'HH:mm',
    },
    {
      label: 'Ort',
      name: 'location',
      widget: 'string',
      required: false,
    },
    {
      label: 'Beschreibung',
      name: 'description',
      widget: 'text',
    },
  ],
};
