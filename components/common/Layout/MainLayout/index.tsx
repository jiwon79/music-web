import Link from "next/link";

export default function MainLayout({ children, title }) {
  return (
    <div>
      <div>
        {title}
      </div>
      <ul>
        <li>
          <Link href={"/past"}>
            <a>과거</a>
          </Link>
        </li>
        <li>
          <Link href={"/current"}>
            <a>현재</a>
          </Link>
        </li>
        <li>
          <Link href={"/game"}>
            <a>게임/테스트</a>
          </Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
