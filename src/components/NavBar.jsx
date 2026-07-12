import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar =()=>{
  const user = useSelector(store=>store.user);


    return(
        <><div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">devTinder👨🏻‍💻</Link>
  </div>
 
     {user &&(
    <div className="flex gap-2">
      <p className="flex px-0 py-2"> Welcome,{user.firstName}</p>
     <div className="dropdown dropdown-end mx-6">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar flex">
                <div className="w-10 rounded-full">
          <img
            alt="user photo"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-900 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to ="/settings">Settings</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  </div>)}
</div>
</> 
)
}
export default NavBar;