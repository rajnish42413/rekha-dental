export interface Blog {
    _id: string;
    title: string;
    excerpt: string;
    category: string;
    readingTime: string;
    publishedAt: string;
  
    slug: {
      current: string;
    };
  
    thumbnail: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
  }