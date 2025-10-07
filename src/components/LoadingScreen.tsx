import Card from './Card';
import PageContainer from './PageContainer';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  return (
    <PageContainer>
      <Card>
        <div className={styles.content}>
          <div className={styles.spinner}></div>
          <p className={styles.text}>Loading...</p>
        </div>
      </Card>
    </PageContainer>
  );
}
