import Link from "next/link"
import styles from "../../styles/listener-type/index.module.css"
import Header from "./../../components/listener-type/Header"

export default function ListenerType() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <div className={styles.title}>
          L.istener<br/>
          T.ype<br/>
          T.est
        </div>
        <button>
          <Link href={"/listener-type/test"}>
            <a>테스트 하기</a>
          </Link>
        </button>
      </div>
      <table>
        <tr>
          <td>item1</td>
          <td>item2</td>
          <td>item3</td>
          <td>item4</td>
          <td>item5</td>
        </tr>
      </table>
    </div>
  )
}
