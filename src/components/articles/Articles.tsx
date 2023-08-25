import { useCallback, useEffect, useState } from 'react';

import { useTranslations } from '@/i18n/utils';
import type { Lang } from '@/types';

import { Title } from '../projects';

type MediumArticle = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};

export const Articles = ({ lang }: Lang) => {
  const t = useTranslations(lang);
  const [articles, setArticles] = useState<MediumArticle[]>([]);

  const fetchArticles = useCallback(async () => {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thibaudbrault`,
    );
    const data = await response.json();
    setArticles(data.items);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <section id="articles" className="flex flex-col gap-12">
      <Title text={t(`section.title[3]`)} />
      <ul className="mx-auto flex w-11/12 flex-col justify-items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <li
            key={article.link}
            className="rounded-md bg-stone-200 text-stone-900"
          >
            <img
              className="rounded-t-md"
              src={article.thumbnail}
              alt={article.title}
            />
            <div className="flex flex-col gap-4 p-2">
              <a
                href={article.link}
                className="text-xl font-bold hover:text-yellow-600"
              >
                {article.title}
              </a>
              <ul className="flex flex-wrap gap-6">
                {article.categories.map((category, i) => (
                  <li
                    key={i}
                    className="rounded-3xl border border-stone-900 px-2 py-1 text-xs capitalize"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
