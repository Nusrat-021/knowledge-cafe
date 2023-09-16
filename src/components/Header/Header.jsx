import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl md:text-4xl">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <label className="avatar">
            <div className="w-14 h-14 rounded-full">
              <img src={profile} />
            </div>
          </label>
        </div>
      </div>
      <hr className="my-8" />
    </div>
  );
};

export default Header;
