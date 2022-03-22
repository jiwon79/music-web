import {useState} from "react";
import SideBar from "./sidebar";

export default function MainLayout({ children, title }) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <div>
        {title}
        <SideBar />
      </div>

      {children}
    </div>
  )
}
