import MainLayout from "layout/MainLayout/MainLayout";
import NotYet from "components/common/NotYet/NotYet";

const PlaylistPage = () => {
  return (
    <MainLayout title={"플레이리스트"}>
      <NotYet title={'세상이 아름다운 날 공개'}/>
    </MainLayout>
  )
};

export default PlaylistPage;
