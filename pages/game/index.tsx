import MainLayout from "../../layout/MainLayout/MainLayout";
import Link from "next/link"

export default function GamePage() {
  return (
    <MainLayout title={"게임 / 테스트"}>
      <p>Game Page</p>
      <Link href={"/game/listener"}><p>리스너 타입 링크</p></Link>
      <Link href={"/game/festival"}><p>페스티벌 타입 링크</p></Link>
    </MainLayout>
  )
}
