import s from './MyPosts.module.css'

export const MyPosts = () => {
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
            </div>
        </div>
    )
}