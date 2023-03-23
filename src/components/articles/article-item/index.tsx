import React from "react";
import { IArticle } from "../../../types";
import CustomImage from "../../custom/image";
import styles from "../../../styles/Home.module.css";

interface Props {
  item: IArticle;
}

const Article: React.FC<Props> = (props: Props) => {
  const { item } = props;

  return (
    <div className={'card'} key={item.id}>
      <CustomImage image={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <span>{item.category}</span>
      <p>{item.content}</p>
      <a className={'btn article__btn'} href={item.url} target="_blank" rel="noopener noreferrer">
        see more
      </a>
    </div>
  );
};

export default Article;
