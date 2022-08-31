export interface IArticle {
id: number;
category: string,
content: string,
image: string,
title: string;
url: string,
createdAt: string
}

export type IListArticle = IArticle[]