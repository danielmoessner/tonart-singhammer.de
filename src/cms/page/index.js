import meta from '../symbols/meta';
import header from '../symbols/header';

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
      {
        file: 'content/pages/home.yml',
        label: 'Startseite',
        name: 'home',
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
            default: 'home',
          },
          meta,
          header,
          {
            label: 'Über mich',
            name: 'about',
            widget: 'object',
            fields: [
              {
                label: 'Bild',
                name: 'image',
                widget: 'image',
              },
            ],
          },
          {
            label: 'Meine Arbeiten',
            name: 'work',
            widget: 'object',
            fields: [
              {
                label: 'Bild',
                name: 'image',
                widget: 'image',
              },
              {
                label: 'Bilder',
                name: 'images',
                widget: 'list',
                fields: [
                  {
                    label: 'Bild',
                    name: 'image',
                    widget: 'image',
                  },
                  {
                    label: 'Beschreibung',
                    name: 'description',
                    widget: 'string',
                  },
                ],
              },
            ],
          },
          {
            label: 'Auftragsarbeiten',
            name: 'order',
            widget: 'object',
            fields: [
              {
                label: 'Bild',
                name: 'image',
                widget: 'image',
              },
            ],
          },
        ],
      },
      {
        file: 'content/pages/about.md',
        label: 'Über mich',
        name: 'about',
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
            default: 'about',
          },
          meta,
          header,
          {
            label: 'Inhalt',
            name: 'content',
            widget: 'object',
            fields: [
              {
                label: 'Bild',
                name: 'image',
                widget: 'image',
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
      {
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
                label: 'Inhalt',
                name: 'content',
                widget: 'markdown',
              },
            ],
          },
        ],
      },
      {
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
        ],
      },
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
      {
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
        ],
      },
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
