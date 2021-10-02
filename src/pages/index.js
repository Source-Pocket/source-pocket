import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Easy to Reach",
    description: <>Useful sources for every language!</>,
  },
  {
    title: "Focus on What Matters",
    description: <>Find crucial sources in our Source Pocket.</>,
  },
];

function Feature({ imageUrl, title, description }) {
  return (
    <div className={clsx("col col--6", styles.feature)}>
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Useful resources for passionate developers."
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 style={{color: '#1c1e21'}} className="hero__title">{siteConfig.title}</h1>
          <p style={{color: '#1c1e21'}} className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
                styles.button
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
