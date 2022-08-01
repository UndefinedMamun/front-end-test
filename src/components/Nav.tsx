import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { toggleAuth } from "../store/atuh";

function Nav() {
  const { userName } = useAppSelector((state) => state.auth);
  console.log(userName)
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    dispatch(toggleAuth(false));
  }

  return (
    <nav className='w-screen p-6 bg-slate-400'>
      <div className='container mx-auto flex justify-between items-center'>
        <span>Hi, {userName}</span>
        <button onClick={logout} className='button'>Logout</button>
      </div>
    </nav>
  );
}

export default Nav;