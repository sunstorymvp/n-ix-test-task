import dynamic from 'next/dynamic';

import HeroTitle from 'shared/components/hero-title';

import styles from './component.module.css';

const LivingCells = dynamic(() => import('./living-cells'), { ssr: false });

const Homepage = () => (
  <main className={styles.root}>
    <HeroTitle>N-iX test task</HeroTitle>
    <LivingCells />
  </main>
);

export default Homepage;
