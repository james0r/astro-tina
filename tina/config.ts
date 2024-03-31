import { defineConfig } from "tinacms"
import { list } from "./blocks/list"

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main"

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            label: "Author",
            name: "author",
            type: "reference",
            collections: ["author"]
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'object',
            list: true,
            name: 'blocks',
            label: 'Sections',
            templates: [list],
          },
        ],
      },
      {
        label: "Author",
        name: "author",
        path: "authors",
        fields: [{
          label: "Name",
          name: "name",
          type: "string",
        }, {
          label: "Avatar",
          name: "avatar",
          type: "string",
        }]
      }
    ],
  },
})
