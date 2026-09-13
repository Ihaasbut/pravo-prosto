export type PageSkeletonVariant =
    | "home"
    | "contacts"
    | "services"
    | "news"
    | "legal"
    | "service"
    | "news-detail"
    | "team";

export interface PageSkeletonProps {
    variant: PageSkeletonVariant;
}

export interface SkeletonBlockProps {
    className?: string;
}

export interface TitleSectionSkeletonProps {
    description?: boolean;
    button?: boolean;
}
