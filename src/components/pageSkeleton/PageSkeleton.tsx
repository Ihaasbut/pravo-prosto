import styles from "./PageSkeleton.module.css";
import type {
    PageSkeletonProps,
    SkeletonBlockProps,
    TitleSectionSkeletonProps,
} from "./PageSkeleton.types";

function SkeletonBlock({ className = "" }: SkeletonBlockProps) {
    const classes = className
        ? `${styles.skeleton} ${className}`
        : styles.skeleton;

    return <span className={classes} aria-hidden="true"></span>;
}

function TitleSectionSkeleton({
    description = true,
    button = false,
}: TitleSectionSkeletonProps) {
    return (
        <div className={styles.titleSection}>
            <div className="container">
                <div className="content">
                    <div className={styles.titleInner}>
                        <div className={styles.titleText}>
                            <SkeletonBlock
                                className={styles.titleHeading}
                            />
                            {description && (
                                <>
                                    <SkeletonBlock
                                        className={styles.lineLong}
                                    />
                                    <SkeletonBlock
                                        className={styles.lineMedium}
                                    />
                                </>
                            )}
                        </div>
                        {button && (
                            <SkeletonBlock className={styles.button} />
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
            <div className={styles.hero}>
                <div className="content">
                    <div className={styles.heroInner}>
                        <SkeletonBlock className={styles.heroTitleLarge} />
                        <SkeletonBlock className={styles.heroTitleSmall} />
                        <div className={styles.textGroup}>
                            <SkeletonBlock className={styles.lineLong} />
                            <SkeletonBlock className={styles.lineLong} />
                            <SkeletonBlock className={styles.lineShort} />
                        </div>
                        <SkeletonBlock className={styles.button} />
                    </div>
                </div>

                <div className={styles.heroTicker}>
                    <SkeletonBlock className={styles.tickerItem} />
                    <SkeletonBlock className={styles.tickerItem} />
                    <SkeletonBlock className={styles.tickerItem} />
                    <SkeletonBlock className={styles.tickerItem} />
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
                    <div className={styles.blockSection}>
                        <SkeletonBlock className={styles.map} />
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
                        <div className={styles.blockSection}>
                            <SkeletonBlock
                                className={styles.sectionHeading}
                            />
                            <div className={styles.servicesGrid}>
                                {[1, 2, 3].map((card) => (
                                    <div
                                        className={styles.serviceCard}
                                        key={card}
                                    >
                                        <SkeletonBlock
                                            className={
                                                styles.serviceCardTitle
                                            }
                                        />
                                        <SkeletonBlock
                                            className={styles.lineLong}
                                        />
                                        <SkeletonBlock
                                            className={styles.lineMedium}
                                        />
                                        <SkeletonBlock
                                            className={styles.lineShort}
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
            <div className={styles.newsLayout}>
                <div className={styles.newsFilters}>
                    {[1, 2, 3, 4].map((item) => (
                        <SkeletonBlock
                            className={styles.filterChip}
                            key={item}
                        />
                    ))}
                </div>
                <div className="container">
                    <div className="content">
                        <div className={styles.newsGrid}>
                            {[1, 2, 3].map((card) => (
                                <div className={styles.newsCard} key={card}>
                                    <SkeletonBlock
                                        className={styles.newsImage}
                                    />
                                    <SkeletonBlock
                                        className={styles.newsTitle}
                                    />
                                    <SkeletonBlock
                                        className={styles.newsDate}
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
                    <div className={styles.legalContent}>
                        <div className={styles.textGroup}>
                            <SkeletonBlock className={styles.lineLong} />
                            <SkeletonBlock className={styles.lineLong} />
                            <SkeletonBlock className={styles.lineMedium} />
                        </div>
                        {[1, 2, 3].map((section) => (
                            <div
                                className={styles.legalSection}
                                key={section}
                            >
                                <SkeletonBlock
                                    className={styles.sectionHeading}
                                />
                                <SkeletonBlock
                                    className={styles.lineLong}
                                />
                                <SkeletonBlock
                                    className={styles.lineLong}
                                />
                                <SkeletonBlock
                                    className={styles.lineShort}
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
                    <div className={styles.blockSection}>
                        <SkeletonBlock className={styles.sectionHeading} />
                        <div className={styles.featureGrid}>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div
                                    className={styles.featureCard}
                                    key={item}
                                >
                                    <SkeletonBlock
                                        className={styles.serviceCardTitle}
                                    />
                                    <SkeletonBlock
                                        className={styles.lineLong}
                                    />
                                    <SkeletonBlock
                                        className={styles.lineShort}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.banner}>
                    <div className={styles.bannerCopy}>
                        <SkeletonBlock className={styles.lineShort} />
                        <SkeletonBlock className={styles.lineLong} />
                        <SkeletonBlock className={styles.button} />
                    </div>
                    <SkeletonBlock className={styles.bannerMedia} />
                </div>
            </div>
        </div>
    );
}

function NewsDetailSkeleton() {
    return (
        <div>
            <TitleSectionSkeleton description={false} />
            <div className={styles.newsDetailLayout}>
                <div className={styles.newsDetailMain}>
                    <SkeletonBlock className={styles.articleHero} />
                    <div className={styles.articleCopy}>
                        <SkeletonBlock className={styles.lineLong} />
                        <SkeletonBlock className={styles.lineLong} />
                        <SkeletonBlock className={styles.lineMedium} />
                        <SkeletonBlock className={styles.lineLong} />
                        <SkeletonBlock className={styles.lineShort} />
                    </div>
                </div>

                <div className={styles.newsDetailSidebar}>
                    {[1, 2, 3].map((item) => (
                        <div className={styles.sidebarCard} key={item}>
                            <SkeletonBlock
                                className={styles.sidebarImage}
                            />
                            <SkeletonBlock className={styles.newsTitle} />
                            <SkeletonBlock className={styles.newsDate} />
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
                    <div className={styles.teamGrid}>
                        {[1, 2, 3].map((item) => (
                            <div className={styles.teamCard} key={item}>
                                <SkeletonBlock
                                    className={styles.teamImage}
                                />
                                <SkeletonBlock
                                    className={styles.teamName}
                                />
                                <SkeletonBlock
                                    className={styles.lineMedium}
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
