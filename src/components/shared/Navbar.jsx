import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between fixed top-0 left-0 w-full m-auto bg-base-200 fixed z-10">
        <img className="w-16 h-16" src="/btcCoin.png" alt="logo" />

        <div>
          <ul className="list-none flex flex-wrap gap-5 capitalize font-semibold">
            <li><Link to={'/'}>home</Link></li>
            <li><Link to={'/coins'}>coins</Link></li>
            <li><Link to={'/contact'}>contact</Link></li>
          </ul>
        </div>
        <button className="btn">Login / Signup</button>
      </nav>
    </>
  );
}
