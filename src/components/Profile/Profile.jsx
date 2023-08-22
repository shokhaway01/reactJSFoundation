import s from './Profile.module.css'
import {useState} from "react";

export const Profile = () => {

    let [count,setState] = useState(0)

    return(
        <div className={s.content}>
            <img
                src="https://avatars.mds.yandex.net/i?id=7fc81a8c1285a7a105f2b94539a4ac43ac74514a-7777855-images-thumbs&n=13"
                alt=""/>
            <div>
                avatar + escrtipton
            </div>
            <div>
                MY POSTS
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
                <div className="btn">
                    <div className="countPlace">
                        {count} - Это количество нажатий!
                    </div>
                    <button onClick={() => setState( count + 1)}>+</button>
                    <button onClick={() => setState( count - 1)}>-</button>
                </div>
            </div>
        </div>
    )
}