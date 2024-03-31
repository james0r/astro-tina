import { defineConfig } from 'tinacms'
import type { TinaTemplate } from 'tinacms'

export const list: TinaTemplate = {
  name: 'list',
  label: 'List',
  fields: [
    {
      type: 'object',
      label: 'Item',
      name: 'item',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text',
        },
      ],
    },
  ],
}
