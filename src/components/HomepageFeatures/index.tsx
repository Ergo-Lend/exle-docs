import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Set up & Contribute',
    Svg: require('@site/static/img/ergolend.svg').default,
    description: (
      <>
        Exle is built as a decentralized P2P lending protocol. There are multiple
        agents that contributes to the ecosystem of Exle. Here, you'll learn about
        the application, how to set up, and even contribute in multiple ways.
      </>
    ),
  },
  {
    title: 'System Architecture',
    Svg: require('@site/static/img/information-architecture.svg').default,
    description: (
      <>
        Learn about and even potentially contribute to the software 
        architecture and design decisions of a decentralized application 
        that utilizes blockchain technology. 
      </>
    ),
  },
  {
    title: 'Ergo-Focused',
    Svg: require('@site/static/img/ergo.svg').default,
    description: (
      <>
        Exle is built on top of the Ergo Blockchain. You'll be able to learn
        and gather an understanding on how to build on top of Ergo and get
        familiarize with Scala Development.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
