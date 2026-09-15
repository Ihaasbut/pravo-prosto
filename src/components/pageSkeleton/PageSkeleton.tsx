import cn from "classnames";
import styles from "./PageSkeleton.module.css";
import type {
  PageSkeletonProps,
  SkeletonBlockProps,
  TitleSectionSkeletonProps,
} from "./PageSkeleton.types";

function SkeletonBlock({ className }: SkeletonBlockProps) {
  return (
    <span className={cn(styles.skeleton, className)}></span>
  );
}

function TitleSectionSkeleton({
  description = true,
  button = false,
  filters = false,
  compact = false,
}: TitleSectionSkeletonProps) {
  return (
    <div
      className={cn(styles.titleSection, compact && styles.titleSectionCompact)}
    >
      <div className="container">
        <div className="content">
          <div className={styles.titleInner}>
            <div className={styles.titleText}>
              <SkeletonBlock className={styles.titleHeading} />
              {description && (
                <>
                  <SkeletonBlock className={styles.lineLong} />
                  <SkeletonBlock className={styles.lineMedium} />
                </>
              )}
            </div>
            {filters && (
              <div className={styles.titleFilters}>
                {[1, 2, 3, 4, 5].map((item) => (
                  <SkeletonBlock className={styles.filterChip} key={item} />
                ))}
              </div>
            )}
            {button && <SkeletonBlock className={styles.button} />}
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeSkeleton() {
  return (
    <>
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

      <div className="container">
        <div className="content">
          <div className={styles.homeBlock}>
            <div className={styles.titleInner}>
              <div className={styles.titleText}>
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
            </div>
            <div className={styles.homeAboutGrid}>
              {[1, 2, 3].map((card) => (
                <div className={styles.homeAboutCard} key={card}>
                  <SkeletonBlock className={styles.lineShort} />
                  <SkeletonBlock className={styles.serviceCardTitle} />
                  <SkeletonBlock className={styles.lineLong} />
                  <SkeletonBlock className={styles.lineMedium} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeSurface}>
        <div className="container">
          <div className="content">
            <div className={styles.homeBlock}>
              <div className={styles.titleInner}>
                <div className={styles.titleText}>
                  <SkeletonBlock className={styles.titleHeading} />
                  <SkeletonBlock className={styles.lineLong} />
                </div>
                <SkeletonBlock className={styles.button} />
              </div>
              <SkeletonBlock className={styles.sectionHeading} />
              <div className={styles.servicesGrid}>
                {[1, 2, 3].map((card) => (
                  <div className={styles.serviceCard} key={card}>
                    <SkeletonBlock className={styles.serviceCardTitle} />
                    <SkeletonBlock className={styles.lineLong} />
                    <SkeletonBlock className={styles.lineMedium} />
                    <SkeletonBlock className={styles.lineShort} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className={styles.homeBlock}>
            <div className={styles.titleInner}>
              <div className={styles.titleText}>
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
            </div>
            <div className={styles.homeProcessGrid}>
              {[1, 2, 3, 4].map((card) => (
                <div className={styles.homeProcessCard} key={card}>
                  <SkeletonBlock className={styles.lineShort} />
                  <SkeletonBlock className={styles.serviceCardTitle} />
                  <SkeletonBlock className={styles.lineLong} />
                  <SkeletonBlock className={styles.lineMedium} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeSurface}>
        <div className="container">
          <div className="content">
            <div className={styles.homeBlock}>
              <div className={styles.titleInner}>
                <div className={styles.titleText}>
                  <SkeletonBlock className={styles.titleHeading} />
                  <SkeletonBlock className={styles.lineLong} />
                </div>
                <SkeletonBlock className={styles.button} />
              </div>
              <div className={styles.homeTeamPreview}>
                {[1, 2, 3, 4].map((card) => (
                  <div className={styles.homeTeamPreviewCard} key={card}>
                    <SkeletonBlock className={styles.homeTeamPreviewImage} />
                    <SkeletonBlock className={styles.teamName} />
                    <SkeletonBlock className={styles.lineShort} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className={styles.homeBlock}>
            <div className={styles.titleInner}>
              <div className={styles.titleText}>
                <SkeletonBlock className={styles.titleHeading} />
              </div>
              <SkeletonBlock className={styles.button} />
            </div>
            <div className={styles.homeNewsGrid}>
              {[1, 2, 3, 4].map((card) => (
                <div className={styles.newsCard} key={card}>
                  <SkeletonBlock className={styles.newsBadge} />
                  <SkeletonBlock className={styles.newsTitle} />
                  <SkeletonBlock className={styles.newsDate} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.homeRequest}>
        <div className="container">
          <div className="content">
            <div className={styles.homeRequestInner}>
              <div className={styles.bannerCopy}>
                <SkeletonBlock className={styles.lineShort} />
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
              <SkeletonBlock className={styles.homeRequestForm} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactsSkeleton() {
  return (
    <div>
      <TitleSectionSkeleton button compact description={false} />
      <div className="container">
        <div className="content">
          <div className={styles.contactsInfo}>
            {[1, 2, 3].map((item) => (
              <div className={styles.contactCard} key={item}>
                <SkeletonBlock className={styles.newsBadge} />
                <SkeletonBlock className={styles.lineMedium} />
                <SkeletonBlock className={styles.lineShort} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SkeletonBlock className={styles.map} />
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
              <SkeletonBlock className={styles.sectionHeading} />
              <div className={styles.servicesGrid}>
                {[1, 2, 3].map((card) => (
                  <div className={styles.serviceCard} key={card}>
                    <SkeletonBlock className={styles.serviceCardTitle} />
                    <SkeletonBlock className={styles.lineLong} />
                    <SkeletonBlock className={styles.lineMedium} />
                    <SkeletonBlock className={styles.lineShort} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="container">
        <div className="content">
          <div className={styles.homeBlock}>
            <div className={styles.titleInner}>
              <div className={styles.titleText}>
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
            </div>
            <div className={styles.homeProcessGrid}>
              {[1, 2, 3, 4].map((card) => (
                <div className={styles.homeAboutCard} key={card}>
                  <SkeletonBlock className={styles.lineShort} />
                  <SkeletonBlock className={styles.serviceCardTitle} />
                  <SkeletonBlock className={styles.lineLong} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeRequest}>
        <div className="container">
          <div className="content">
            <div className={styles.homeRequestInner}>
              <div className={styles.bannerCopy}>
                <SkeletonBlock className={styles.lineShort} />
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
              <SkeletonBlock className={styles.homeRequestForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsSkeleton() {
  return (
    <div>
      <TitleSectionSkeleton filters compact />
      <div className="container">
        <div className="content">
          <div className={styles.newsGrid}>
            {[1, 2, 3, 4].map((card) => (
              <div className={styles.newsCard} key={card}>
                <SkeletonBlock className={styles.newsBadge} />
                <SkeletonBlock className={styles.newsTitle} />
                <SkeletonBlock className={styles.newsDate} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className={styles.homeBlock}>
            <div className={styles.titleInner}>
              <div className={styles.titleText}>
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
            </div>
            <div className={styles.homeProcessGrid}>
              {[1, 2, 3, 4].map((card) => (
                <div className={styles.homeAboutCard} key={card}>
                  <SkeletonBlock className={styles.lineShort} />
                  <SkeletonBlock className={styles.serviceCardTitle} />
                  <SkeletonBlock className={styles.lineLong} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeRequest}>
        <div className="container">
          <div className="content">
            <div className={styles.homeRequestInner}>
              <div className={styles.bannerCopy}>
                <SkeletonBlock className={styles.lineShort} />
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
              <SkeletonBlock className={styles.homeRequestForm} />
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
              <div className={styles.legalSection} key={section}>
                <SkeletonBlock className={styles.sectionHeading} />
                <SkeletonBlock className={styles.lineLong} />
                <SkeletonBlock className={styles.lineLong} />
                <SkeletonBlock className={styles.lineShort} />
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
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className={styles.featureCard} key={item}>
                  <SkeletonBlock className={styles.serviceCardTitle} />
                  <SkeletonBlock className={styles.lineLong} />
                  <SkeletonBlock className={styles.lineShort} />
                </div>
              ))}
            </div>
            <SkeletonBlock className={styles.sectionHeading} />
            <div className={styles.homeProcessGrid}>
              {[1, 2, 3, 4].map((card) => (
                <div className={styles.homeProcessCard} key={card}>
                  <SkeletonBlock className={styles.lineShort} />
                  <SkeletonBlock className={styles.serviceCardTitle} />
                  <SkeletonBlock className={styles.lineLong} />
                </div>
              ))}
            </div>
            <SkeletonBlock className={styles.sectionHeading} />
            <div className={styles.textGroup}>
              {[1, 2, 3, 4].map((item) => (
                <div className={styles.legalSection} key={item}>
                  <SkeletonBlock className={styles.lineMedium} />
                  <SkeletonBlock className={styles.lineLong} />
                </div>
              ))}
            </div>
            <SkeletonBlock className={styles.sectionHeading} />
            <div className={styles.servicesGrid}>
              {[1, 2, 3].map((card) => (
                <div className={styles.serviceCard} key={card}>
                  <SkeletonBlock className={styles.serviceCardTitle} />
                  <SkeletonBlock className={styles.lineMedium} />
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
      <TitleSectionSkeleton description={false} compact />
      <div className="container">
        <div className="content">
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
                  <SkeletonBlock className={styles.newsBadge} />
                  <SkeletonBlock className={styles.newsTitle} />
                  <SkeletonBlock className={styles.newsDate} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeRequest}>
        <div className="container">
          <div className="content">
            <div className={styles.homeRequestInner}>
              <div className={styles.bannerCopy}>
                <SkeletonBlock className={styles.lineShort} />
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
              <SkeletonBlock className={styles.homeRequestForm} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSkeleton() {
  return (
    <div>
      <TitleSectionSkeleton compact />
      <div className="container">
        <div className="content">
          <div className={styles.teamGrid}>
            {[1, 2, 3, 4].map((item) => (
              <div className={styles.teamCard} key={item}>
                <SkeletonBlock className={styles.teamImage} />
                <div className={styles.teamCardText}>
                  <SkeletonBlock className={styles.teamName} />
                  <SkeletonBlock className={styles.lineMedium} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <div className={styles.homeBlock}>
            <div className={styles.titleInner}>
              <div className={styles.titleText}>
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
            </div>
            <div className={styles.homeProcessGrid}>
              {[1, 2, 3, 4].map((card) => (
                <div className={styles.homeProcessCard} key={card}>
                  <SkeletonBlock className={styles.lineShort} />
                  <SkeletonBlock className={styles.serviceCardTitle} />
                  <SkeletonBlock className={styles.lineLong} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeRequest}>
        <div className="container">
          <div className="content">
            <div className={styles.homeRequestInner}>
              <div className={styles.bannerCopy}>
                <SkeletonBlock className={styles.lineShort} />
                <SkeletonBlock className={styles.titleHeading} />
                <SkeletonBlock className={styles.lineLong} />
              </div>
              <SkeletonBlock className={styles.homeRequestForm} />
            </div>
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
