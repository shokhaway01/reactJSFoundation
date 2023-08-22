import s from './Nav.module.css'
import {IoPersonSharp, IoSettingsSharp} from "react-icons/io5";
import {BiSolidMessageRounded, BiSolidMusic, BiSolidNews} from "react-icons/bi";

export const Nav = () => {
    return(
        <nav className={s.nav}>
            <div>
                <a href='#'><IoPersonSharp className={s.icon}/>Profile</a>
            </div>

            <div>
                <a href='#'><BiSolidMessageRounded className={s.icon}/>Dialogs</a>
            </div>

            <div>
                <a href='#'><BiSolidNews className={s.icon}/>News</a>
            </div>

            <div>
                <a href='#'><BiSolidMusic className={s.icon}/>Music</a>
            </div>

            <div>
                <a href='#'><IoSettingsSharp className={s.icon}/>Settings</a>
            </div>

        </nav>
    )
}