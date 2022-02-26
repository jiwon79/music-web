import Header from "../../../components/listener-type/Header";
import Menu from "../../../components/listener-type/Menu";
import styles from "../../../styles/listener-type/Result.module.scss"
import {listenerTypeList} from "../../../utils/constant";
import {listenerType} from "../../../utils/types";

interface props {
  listenerType: listenerType
}

export default function ResultPage({ listenerType }: props) {
  return (
    <div>
      <div className={styles.container}>
        <Header title={"Hello, CLASSIC!"}/>
        <div className={styles.music}>
          <p className={styles.music__play}>00:03 / 2:35</p>
          <p className={styles.music__title}>{listenerType.recommend[0].title}</p>
          <p className={styles.music__artist}>{listenerType.recommend[0].artist}</p>
        </div>
        <div className={styles.listenerType}>
          <p className={styles.typeName}>{listenerType.name}</p>
          <p className={styles.typeDesc}>{listenerType.description}</p>
        </div>
      </div>
      <Menu/>
    </div>
  )
}

export function getStaticProps({ params }) {
  return {
    props: {
      listenerType: listenerTypeList[params.id]
    }
  }
}


export async function getStaticPaths() {
  return  {
    paths: [
      { params: { id: '0' }}
    ],
    fallback: false
  }
}
