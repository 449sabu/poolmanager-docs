import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cardanoステークプール',
    Svg: require('@site/static/svg/top3.svg').default,
    description: (
      <>
        CIELは非常に小さいプールです。プロジェクトが良いなと感じたら委任や、SNS等でシェアしていただけると幸いです。
      </>
    ),
  },
  {
    title: 'OSSツール開発',
    Svg: require('@site/static/svg/top.svg').default,
    // Svg: require('@site/static/img/docusaurus/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        開発プロジェクトはGithubで公開しています。 ユーザーのフィードバックを反映できるよう継続的な開発を目指しています。
      </>
    ),
  },
  {
    title: 'ドキュメント',
    Svg: require('@site/static/svg/top2.svg').default,
    // Svg: require('@site/static/img/docusaurus/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        わかりやすいドキュメント作成を心がけています。  
        ご不明な点や、改善のご要望はお気軽にご連絡ください。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
