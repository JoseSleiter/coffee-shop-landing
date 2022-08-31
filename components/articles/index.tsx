import React, { useCallback, useEffect, useState , Suspense } from "react";
import * as articleService from "../../services/articles";
import { IListArticle } from "../../types";
import dynamic from "next/dynamic";
import styles from "../../styles/Home.module.css";

const Article = dynamic(async () => await import("./article-item"), { suspense: true });

const Articles = () => {
  const [items, setItems] = useState<IListArticle>([]);

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
        {!(items.length === 0) && items.map((item) => <Article key={item.id} item={item} />)}
      </Suspense>
    </div>
  );
};

export default Articles;
