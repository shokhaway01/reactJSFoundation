import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://www.freeiconspng.com/uploads/naruto-icon-3.png" alt=""/>
            <div className={s.slogan}>anime.uz</div>
        </header>
    )
}