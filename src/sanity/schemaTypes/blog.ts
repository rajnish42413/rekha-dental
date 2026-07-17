import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blogs",
  type: "document",

  fields: [
    // BASIC INFO
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(70),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.max(160),
      description:
        "Short summary used in cards and previews.",
    }),

    // THUMBNAIL
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    // AUTHOR
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Rekha Dental",
    }),

    // CATEGORY
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Dental Implants", value: "dental-implants" },
          { title: "Smile Makeover", value: "smile-makeover" },
          { title: "Root Canal", value: "root-canal" },
          { title: "Cosmetic Dentistry", value: "cosmetic-dentistry" },
          { title: "Dental Tourism", value: "dental-tourism" },
          { title: "General Dentistry", value: "general-dentistry" },
        ],
      },
    }),

    // TAGS
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    // PUBLISH DATE
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    // FEATURED BLOG
    defineField({
      name: "featured",
      title: "Featured Blog",
      type: "boolean",
      initialValue: false,
    }),

    // READING TIME
    defineField({
      name: "readingTime",
      title: "Reading Time",
      type: "string",
      description: "Example: 5 min read",
    }),

    // MAIN CONTENT
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
          },
        },

        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) =>
                Rule.required(),
            }),
          ],
        },
      ],
    }),

    // SEO SECTION
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) =>
        Rule.max(60),
      description:
        "Recommended under 60 characters.",
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 4,
      validation: (Rule) =>
        Rule.max(160),
      description:
        "Recommended under 160 characters.",
    }),

    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // INDEXING
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      description:
        "Prevent this page from appearing in search engines.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "thumbnail",
      subtitle: "category",
    },
  },
});