import type { ComponentType } from "react";

export type NewI = {
    title: string;
    categoryId: number;
    categoryName: string;
    image: string;
    slug: string;
    date: string;
    blocks: (
        | NewsTextBlockI
        | NewsImageBlockI
        | NewsTitleTextBlockI
        | NewsListBlockI
    )[];
};

interface NewsOneComponentBlock {
    component: ComponentType;
}
export interface NewsTextBlockI extends NewsOneComponentBlock {
    text: string;
}

export interface NewsImageBlockI extends NewsOneComponentBlock {
    image: string;
}

export interface NewsTitleTextBlockI extends NewsOneComponentBlock {
    title: string;
    text: string;
}

export interface NewsListBlockI extends NewsOneComponentBlock {
    list: string[];
}
