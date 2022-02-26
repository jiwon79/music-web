import Header from "../../../components/listener-type/Header";
import Menu from "../../../components/listener-type/Menu";
import styles from "../../../styles/listener-type/Result.module.css"
import {listenerTypeList} from "../../../utils/constant";

export default function ResultPage({ listenerType }) {
  console.log(listenerType);

  return (
    <div>
      <div className={styles.container}>
        <Header title={"Hello, CLASSIC!"}/>
        <div>
          <p>00:03 / 2:35</p>
          <p>{listenerType.recommend[0].title}</p>
          {/*<p>{listenerType.recommend[0].singer}</p>*/}
        </div>
        <div>
          {/*<p>{listenerType.name}</p>*/}
          {/*<p>{listenerType.default}</p>*/}
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
