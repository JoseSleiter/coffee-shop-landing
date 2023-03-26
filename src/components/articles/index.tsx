/* eslint @typescript-eslint/no-floating-promises: off */
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense, useCallback, useEffect, useState } from "react";
import * as articleService from "../../services/articles";
import { IListArticle } from "../../types";

const Article = dynamic(async () => await import("./article-item"), { suspense: true });

const Articles: NextPage = () => {
  const [items, setItems] = useState<IListArticle>([]);

  const fetchData = useCallback(async () => {
    const data = await articleService.get();
    setItems(data);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={'grid'}>
      <Suspense fallback={<div>Loading...</div>}>
        {!(items.length === 0) && items.map((item) => <Article key={item.id} item={item} />)}
      </Suspense>
    </div>
  );
};

export default Articles;
