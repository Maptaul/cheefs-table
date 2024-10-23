const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
      {/* Logo */}
      <h1 className="text-gray-800 font-bold text-3xl">Chef Table</h1>
      {/* menu start */}
      <div>
        <ul className=" navbar-center flex gap-6 text-gray-600 font-semibold text-base">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Recipes</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
        </ul>
      </div>
      {/* menu end */}
      <div className="flex gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className=" text-4xl border rounded-full px-2 py-2">
              <i className="fa-solid fa-user-tie"></i>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
