import Link from "next/link"
import MainLayout from "layout/MainLayout/MainLayout";
import styles from "./game.module.scss";

export default function GamePage() {
  return (
    <MainLayout title={"게임 / 테스트"}>
      <Link href={"/game/listener"}>
        <div className={styles.link}>
          <p>리스너 타입 테스트</p>
        </div>
      </Link>
      <Link href={"/game/festival"}>
        <div className={styles.link}>
          <p>페스티벌 타입 테스트</p>
        </div>
      </Link>
    </MainLayout>
  )
}
