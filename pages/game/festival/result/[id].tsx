import {festivalTypeMap} from "../../../../utils/game/festival/constant";
import {FestivalType} from "../../../../utils/game/festival/type";

interface ResultPageProps {
  festivalType: FestivalType
}

export default function ResultPage({ festivalType }: ResultPageProps) {
  return (
    <div>
      <p>{festivalType.name}</p>
      <ul>
        {festivalType.descriptions.map((desc, idx) =>
          <li key={idx}>{desc}</li>
        )}
      </ul>
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
