import styles from "./PageSkeleton.module.css";

type PageSkeletonVariant =
    | "home"
    | "contacts"
    | "services"
    | "news"
    | "legal"
    | "service"
    | "news-detail"
    | "team";

type PageSkeletonProps = {
    variant: PageSkeletonVariant;
};

type SkeletonBlockProps = {
    className?: string;
};

function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
    const classes = className
        ? `${styles["skeleton"]} ${className}`
        : styles["skeleton"];

    return <span className={classes} aria-hidden="true"></span>;
}

function TitleSectionSkeleton({
    description = true,
    button = false,
}: {
    description?: boolean;
    button?: boolean;
}) {
    return (
        <div className={styles["title-section"]}>
            <div className="container">
                <div className="content">
                    <div className={styles["title-inner"]}>
                        <div className={styles["title-text"]}>
                            <SkeletonBlock
                                className={styles["title-heading"]}
                            />
                            {description && (
                                <>
                                    <SkeletonBlock
                                        className={styles["line-long"]}
                                    />
                                    <SkeletonBlock
                                        className={styles["line-medium"]}
                                    />
                                </>
                            )}
                        </div>
                        {button && (
                            <SkeletonBlock className={styles["button"]} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomeSkeleton() {
    return (
        <div className="container">
            <div className={styles["hero"]}>
                <div className="content">
                    <div className={styles["hero-inner"]}>
                        <SkeletonBlock className={styles["hero-title-large"]} />
                        <SkeletonBlock className={styles["hero-title-small"]} />
                        <div className={styles["text-group"]}>
                            <SkeletonBlock className={styles["line-long"]} />
                            <SkeletonBlock className={styles["line-long"]} />
                            <SkeletonBlock className={styles["line-short"]} />
                        </div>
                        <SkeletonBlock className={styles["button"]} />
                    </div>
                </div>

                <div className={styles["hero-ticker"]}>
                    <SkeletonBlock className={styles["ticker-item"]} />
                    <SkeletonBlock className={styles["ticker-item"]} />
                    <SkeletonBlock className={styles["ticker-item"]} />
                    <SkeletonBlock className={styles["ticker-item"]} />
                </div>
            </div>
        </div>
    );
}

function ContactsSkeleton() {
    return (
        <div>
            <TitleSectionSkeleton description={false} />
            <div className="container">
                <div className="content">
                    <div className={styles["block-section"]}>
                        <SkeletonBlock className={styles["map"]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServicesSkeleton() {
    return (
        <div>
            <TitleSectionSkeleton button description />
            {[1, 2].map((section) => (
                <div className="container" key={section}>
                    <div className="content">
                        <div className={styles["block-section"]}>
                            <SkeletonBlock
                                className={styles["section-heading"]}
                            />
                            <div className={styles["services-grid"]}>
                                {[1, 2, 3].map((card) => (
                                    <div
                                        className={styles["service-card"]}
                                        key={card}
                                    >
                                        <SkeletonBlock
                                            className={
                                                styles["service-card-title"]
                                            }
                                        />
                                        <SkeletonBlock
                                            className={styles["line-long"]}
                                        />
                                        <SkeletonBlock
                                            className={styles["line-medium"]}
                                        />
                                        <SkeletonBlock
                                            className={styles["line-short"]}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function NewsSkeleton() {
    return (
        <div>
            <TitleSectionSkeleton description={false} />
            <div className={styles["news-layout"]}>
                <div className={styles["news-filters"]}>
                    {[1, 2, 3, 4].map((item) => (
                        <SkeletonBlock
                            className={styles["filter-chip"]}
                            key={item}
                        />
                    ))}
                </div>
                <div className="container">
                    <div className="content">
                        <div className={styles["news-grid"]}>
                            {[1, 2, 3].map((card) => (
                                <div className={styles["news-card"]} key={card}>
                                    <SkeletonBlock
                                        className={styles["news-image"]}
                                    />
                                    <SkeletonBlock
                                        className={styles["news-title"]}
                                    />
                                    <SkeletonBlock
                                        className={styles["news-date"]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LegalSkeleton() {
    return (
        <div>
            <TitleSectionSkeleton description={false} />
            <div className="container">
                <div className="content">
                    <div className={styles["legal-content"]}>
                        <div className={styles["text-group"]}>
                            <SkeletonBlock className={styles["line-long"]} />
                            <SkeletonBlock className={styles["line-long"]} />
                            <SkeletonBlock className={styles["line-medium"]} />
                        </div>
                        {[1, 2, 3].map((section) => (
                            <div
                                className={styles["legal-section"]}
                                key={section}
                            >
                                <SkeletonBlock
                                    className={styles["section-heading"]}
                                />
                                <SkeletonBlock
                                    className={styles["line-long"]}
                                />
                                <SkeletonBlock
                                    className={styles["line-long"]}
                                />
                                <SkeletonBlock
                                    className={styles["line-short"]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServiceSkeleton() {
    return (
        <div>
            <TitleSectionSkeleton description />
            <div className="container">
                <div className="content">
                    <div className={styles["block-section"]}>
                        <SkeletonBlock className={styles["section-heading"]} />
                        <div className={styles["feature-grid"]}>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div
                                    className={styles["feature-card"]}
                                    key={item}
                                >
                                    <SkeletonBlock
                                        className={styles["service-card-title"]}
                                    />
                                    <SkeletonBlock
                                        className={styles["line-long"]}
                                    />
                                    <SkeletonBlock
                                        className={styles["line-short"]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles["banner"]}>
                    <div className={styles["banner-copy"]}>
                        <SkeletonBlock className={styles["line-short"]} />
                        <SkeletonBlock className={styles["line-long"]} />
                        <SkeletonBlock className={styles["button"]} />
                    </div>
                    <SkeletonBlock className={styles["banner-media"]} />
                </div>
            </div>
        </div>
    );
}

function NewsDetailSkeleton() {
    return (
        <div>
            <TitleSectionSkeleton description={false} />
            <div className={styles["news-detail-layout"]}>
                <div className={styles["news-detail-main"]}>
                    <SkeletonBlock className={styles["article-hero"]} />
                    <div className={styles["article-copy"]}>
                        <SkeletonBlock className={styles["line-long"]} />
                        <SkeletonBlock className={styles["line-long"]} />
                        <SkeletonBlock className={styles["line-medium"]} />
                        <SkeletonBlock className={styles["line-long"]} />
                        <SkeletonBlock className={styles["line-short"]} />
                    </div>
                </div>

                <div className={styles["news-detail-sidebar"]}>
                    {[1, 2, 3].map((item) => (
                        <div className={styles["sidebar-card"]} key={item}>
                            <SkeletonBlock
                                className={styles["sidebar-image"]}
                            />
                            <SkeletonBlock className={styles["news-title"]} />
                            <SkeletonBlock className={styles["news-date"]} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function TeamSkeleton() {
    return (
        <div>
            <TitleSectionSkeleton button description={false} />
            <div className="container">
                <div className="content">
                    <div className={styles["team-grid"]}>
                        {[1, 2, 3].map((item) => (
                            <div className={styles["team-card"]} key={item}>
                                <SkeletonBlock
                                    className={styles["team-image"]}
                                />
                                <SkeletonBlock
                                    className={styles["team-name"]}
                                />
                                <SkeletonBlock
                                    className={styles["line-medium"]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function PageSkeleton({ variant }: PageSkeletonProps) {
    switch (variant) {
        case "home":
            return <HomeSkeleton />;
        case "contacts":
            return <ContactsSkeleton />;
        case "services":
            return <ServicesSkeleton />;
        case "news":
            return <NewsSkeleton />;
        case "legal":
            return <LegalSkeleton />;
        case "service":
            return <ServiceSkeleton />;
        case "news-detail":
            return <NewsDetailSkeleton />;
        case "team":
            return <TeamSkeleton />;
        default:
            return null;
    }
}

export default PageSkeleton;
