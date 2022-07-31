export default function Header({user}) {
  return (
    <header className="mb-11 flex">
        <div className="mr-[30px] grow">
            <img className="rounded-full w-[150px] h-[150px] mx-auto" src="no-avatar.jpg" alt="logo"/>
        </div>
        <section className="flex flex-col grow-[2]">
            <div className="flex shrink-[1] mb-5 h-12">
                <h2 className="font-light text-26 text-[28px] -mb-1.5 -mt-[5px]">{user.username}</h2>
            </div>
            <ul className="mb-5 flex gap-x-10 text-26 items-center">
                <li>
                    <span className="font-semibold text-26">{user.posts}</span> posts
                </li>
                <li>
                    <span className="font-semibold text-26">{user.followers.length}</span> followers
                </li>
                <li>
                    <span className="font-semibold text-26">{user.following.length}</span> following
                </li>
            </ul>

        </section>
    </header>
  )
}
