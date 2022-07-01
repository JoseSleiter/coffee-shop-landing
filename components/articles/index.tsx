import React, { useCallback, useEffect, useState } from "react";
import * as articleService from "../../services/articles";
import { IArticle } from "../../types";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";

const Article = dynamic(() => import("./article-item"), { suspense: true });

const Articles = () => {
  const [items, setItems] = useState<IArticle[]>([]);

  const fetchData = useCallback(async () => {
    const data = await articleService.get();
    setItems(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.grid}>
      <Suspense fallback={<div>Loading...</div>}>
        {!!items.length && items.map((item) => <Article key={item.id} item={item} />)}
      </Suspense>
    </div>
  );
};

export default Articles;
