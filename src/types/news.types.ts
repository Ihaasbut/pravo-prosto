export type NewI = {
    title: string;
    categoryId: number;
    categoryName: string;
    image: string;
    slug: string;
    date: string;
    blocks: (
        | NewTextBlockI
        | NewImageBlockI
        | NewTitleTextBlockI
        | NewListBlockI
    )[];
};

export type NewTextBlockI = {
    text: string;
};

export type NewImageBlockI = {
    image: string;
};

export type NewTitleTextBlockI = {
    title: string;
    text: string;
};

export type NewListBlockI = {
    list: string[];
};

