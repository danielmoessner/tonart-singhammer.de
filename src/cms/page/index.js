import meta from '../symbols/meta';
import header from '../symbols/header';
import home from './home';
import about from './about';
import order from './order';
import events from './events';
import contact from './contact';

export default [
  {
    name: 'page',
    label: 'Seiten',
    label_singular: 'Seite',
    delete: false,
    editor: {
      preview: false,
    },
    files: [
      home,
      about,
      {
        file: 'content/pages/work.yml',
        label: 'Tonarbeiten',
        name: 'work',
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
            default: 'work',
          },
          meta,
          header,
        ],
      },
      order,
      events,
      {
        file: 'content/pages/technique.yml',
        label: 'Töpfertechniken',
        name: 'technique',
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
            default: 'technique',
          },
          meta,
          header,
        ],
      },
      contact,
      {
        file: 'content/pages/imprint.md',
        label: 'Impressum',
        name: 'imprint',
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
            default: 'imprint',
          },
          meta,
          {
            label: 'Header',
            name: 'header',
            widget: 'object',
            fields: [
              {
                label: 'Pre',
                name: 'pre',
                widget: 'string',
              },
              {
                label: 'Title',
                name: 'title',
                widget: 'string',
              },
            ],
          },
          {
            label: 'Inhalt',
            name: 'body',
            widget: 'markdown',
          },
        ],
      },
      {
        file: 'content/pages/privacy.md',
        label: 'Datenschutz',
        name: 'privacy',
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
            default: 'privacy',
          },
          meta,
          {
            label: 'Header',
            name: 'header',
            widget: 'object',
            fields: [
              {
                label: 'Pre',
                name: 'pre',
                widget: 'string',
              },
              {
                label: 'Title',
                name: 'title',
                widget: 'string',
              },
            ],
          },
          {
            label: 'Inhalt',
            name: 'body',
            widget: 'markdown',
          },
        ],
      },
      {
        file: 'content/pages/styleguide.yml',
        label: 'Styleguide',
        name: 'styleguide',
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
            default: 'styleguide',
          },
          meta,
        ],
      },
    ],
  },
];
