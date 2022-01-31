import Link from "next/link"


export default function ListenerType() {
  return (
    <div>
      <h1>리스너 타입 테스트</h1>
      <button>
        <Link href={"/listener-type/test"}>
          <a>테스트 하기</a>
        </Link>
      </button>
    </div>
  )
}