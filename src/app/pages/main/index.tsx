import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sideBar";

export function Main() {
    return (
        <>
        <div className="main_content">
        <Sidebar/>
        <div className="outlate">
        <Outlet/>
        </div>
        </div>
  
        
        </>
    )
}