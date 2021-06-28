import meta from '../symbols/meta';
import headingText from '../symbols/headingText';
import section from '../symbols/section';
import button from '../symbols/button';
import linkButton from '../symbols/linkButton';

export default {
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
        {
          label: 'Text',
          name: 'text',
          widget: 'text',
        },
        {
          label: 'Bild',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Button Links',
          name: 'buttonLeft',
          widget: 'object',
          fields: linkButton,
        },
        {
          label: 'Button Rechts',
          name: 'buttonRight',
          widget: 'object',
          fields: linkButton,
        },
      ],
    },
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
        ...section,
        { label: 'Inhalt', name: 'content', widget: 'list', fields: headingText },
      ],
    },
    {
      label: 'Meine Arbeiten',
      name: 'work',
      widget: 'object',
      fields: [
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
        ...section,
        button,
        {
          label: 'Bild',
          name: 'image',
          widget: 'image',
        },
      ],
    },
    {
      label: 'Veranstaltungen',
      name: 'events',
      widget: 'object',
      fields: [...section],
    },
    {
      label: 'CTA',
      name: 'cta',
      widget: 'object',
      fields: [
        {
          label: 'Text oben',
          name: 'textTop',
          widget: 'string',
        },
        {
          label: 'Text unten',
          name: 'textBottom',
          widget: 'string',
        },
        button,
        {
          label: 'Interner Link',
          name: 'internalLink',
          widget: 'string',
          hint: 'Beispiel: /kontakt/',
        },
      ],
    },
  ],
};
