import { PageRecord, ServiceSummary, ArticleRecord } from "./types";
import { mainPages } from "./data/main-pages";
import { servicesPages } from "./data/services-pages";
import { hostingPages } from "./data/hosting-pages";
import { solutionsPages } from "./data/solutions-pages";
import { regionalPages } from "./data/regional-pages";
import { articlePages } from "./data/article-pages";
import { allServicesList } from "./data/services-summary";
import { allArticlesList } from "./data/blog-articles";

/**
 * Initial Master Content Data Source
 * 
 * Contains pure typed data records for all published content pages, services,
 * and articles. No JSX components or arbitrary executable code are stored here.
 * The ContentSource abstraction allows this to be swapped seamlessly with any
 * headless CMS in the future.
 */
export const initialPages: PageRecord[] = [
  ...mainPages,
  ...servicesPages,
  ...hostingPages,
  ...solutionsPages,
  ...regionalPages,
  ...articlePages,
];

export const initialServices: ServiceSummary[] = allServicesList;
export const initialArticles: ArticleRecord[] = allArticlesList;

export {
  mainPages,
  servicesPages,
  hostingPages,
  solutionsPages,
  regionalPages,
  articlePages,
  allServicesList,
  allArticlesList,
};
