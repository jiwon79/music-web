import {festivalTypeMap} from "../../../../utils/game/festival/constant";
import {FestivalType} from "../../../../utils/game/festival/type";
import ShareButton from "../../../../components/common/ShareButtons";
import {useRouter} from "next/router";

interface ResultPageProps {
  festivalType: FestivalType
}

export default function ResultPage({ festivalType }: ResultPageProps) {
  const shareUrl: string = "https://music-web-indol.vercel.app/game/festival/result/" + festivalType.id;
  console.log(festivalType);
  const router = useRouter();
  console.log(router.asPath);

  return (
    <div>
      <p>{festivalType.name}</p>
      <ul>
        {festivalType.descriptions.map((desc, idx) =>
          <li key={idx}>{desc}</li>
        )}
      </ul>

      <ShareButton.KaKao
        content={{
          title: "Festival Type 게임",
          description: "내용!",
          imageUrl: "https://www.esn.org/blog/sites/default/files/imce/576364502a3f379b77617193680e21ff.jpg",
          link: {
            mobileWebUrl: shareUrl,
          }
        }}
      >
        <p>KaKao</p>
      </ShareButton.KaKao>
      <ShareButton.Facebook url={shareUrl}>
        <p>Facebook</p>
      </ShareButton.Facebook>
      <ShareButton.Twitter url={shareUrl} text={"Festival Type Game"}>
        <p>Twitter</p>
      </ShareButton.Twitter>
      <ShareButton.Url url={shareUrl}>
        <p>링크 복사</p>
      </ShareButton.Url>
    </div>
  )
}

export function getStaticProps({ params }) {
  return {
    props: {
      festivalType: festivalTypeMap[params.id]
    }
  }
}

export async function getStaticPaths() {
  return  {
    paths: [
      { params: { id: '1' }},
      { params: { id: '2' }},
      { params: { id: '3' }},
      { params: { id: '4' }},
      { params: { id: '5' }},
      { params: { id: '6' }},
      { params: { id: '7' }},
    ],
    fallback: false
  }
}
