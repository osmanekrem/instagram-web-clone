import classNames from "classnames"
import Icon from "components/Icon"
import { getUserInfo } from "firebase.js"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import Header from "./components/Header"
import ProfileNotFound from "./NotFound"

export default function ProfileLayout() {

  const {username} = useParams()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo(username)
    .then(user => {
      setUser(user)
      setLoading(false)
    }).catch(err => {
      setUser(false)
    })
  }, [username])

  if (user === false) {
    return <ProfileNotFound />
  }

  return user && (
    <div className="mx-auto w-full max-w-[975px] px-5 pt-[30px]">
      <Helmet>
        <title>{`${user.fullName} (@${user.username}) • Instagram photos and videos`}</title>
      </Helmet>
      <Header user={user} />
      <nav className="border-t border-db w-full font-semibold text-xs tracking-[1px] flex items-center gap-x-[60px] justify-center">
        <NavLink end={true} className={({isActive}) => classNames({
          "h-[52px] flex items-center  -mt-[1px] gap-x-1.5 " : true,
          "text-8e": !isActive,
          "text-26 border-t border-26": isActive,
          })} to={`/${username}`}>
          <Icon name="posts" size={12} />
          POSTS
        </NavLink>
        <NavLink  end={true} className={({isActive}) => classNames({
          "h-[52px] flex items-center  -mt-[1px] gap-x-1.5 " : true,
          "text-8e": !isActive,
          "text-26 border-t border-26": isActive,
          })} to={`/${username}/tagged/`}>
          <Icon name="tag" size={12} />
          TAGGED
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
