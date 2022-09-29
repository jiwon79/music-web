import Link from "next/link";
import MainLayout from "layout/MainLayout/MainLayout";

const TimePage = () => {
  return (
    <MainLayout title={'TIME X MUSIC'}>
      time page
      <div>
        <p>매니아 발굴기</p>
        <Link href={'/time/mania'}><p>전체보기</p></Link>
      </div>
    </MainLayout>
  )
}

export default TimePage;
