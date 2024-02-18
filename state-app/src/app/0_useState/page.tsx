import { styles } from './page.css';

import { Title } from '@/components';

export default function useState() {
  return (
    <div>
      <Title>useState</Title>
      <div className={styles.container}></div>
      <div></div>
    </div>
  );
}
