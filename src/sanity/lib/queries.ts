import { groq } from "next-sanity";

export const GET_PAGINATED_BLOGS = groq`
  *[_type == "blog"]
  | order(publishedAt desc)
  [$start...$end]{
    _id,
    title,
    slug,
    excerpt,
    thumbnail,
    publishedAt,
    category,
    readingTime
  }
`;

export const GET_TOTAL_BLOGS = groq`
  count(*[_type == "blog"])
`;

export const GET_SINGLE_BLOG = groq`
  *[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    thumbnail,
    content,
    publishedAt,
    category,
    readingTime,
    seoTitle,
    seoDescription,
    seoKeywords,
    author
  }
`;