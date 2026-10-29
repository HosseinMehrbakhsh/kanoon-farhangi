import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../assets/imgs/farhangi-logo.webp"
export default function Header(props) {
    return (
        <header>
            <nav className={styles.main_nav}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 col-md-7 col-lg-8 col-xl-4 pe-xl-0 pe-auto">
                            <div className="d-flex align-items-center gap-1 gap-sm-3">
                                <button onClick={props.toggleSidebar} className={`d-xl-none ${styles.menu_icon}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-text-align-justify preview-icon"><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" /></svg>
                                </button>

                                <img src={logo} className={styles.logo_img} alt="Azad univercity logo" width="70px" />
                                <div className={`d-flex flex-column ${styles.nav_title}`}>
                                    <span>کانون‌های فرهنگی دانشجویان</span>
                                    <span>دانشگاه آزاد اسلامی واحد قم</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-5 d-none d-xl-block">
                            <ul className={`${styles.nav_link_items} list-unstyled d-flex gap-5 align-items-center justify-content-center m-0 h-100`}>
                                <li>
                                    <Link to="/">خانه</Link>
                                </li>

                                <li>
                                    <Link to="/clubs">کانون‌ها</Link>
                                </li>

                                <li>
                                    <Link to="/activities">فعالیت‌ها</Link>
                                </li>

                                <li>
                                    <a href="#">تماس با ما</a>
                                </li>

                                <li>
                                    <a href="#">گالری</a>
                                </li>
                            </ul>
                        </div>

                        {/* search box */}
                        <div className="col-5 col-lg-4 col-xl-3 d-none d-md-flex align-items-center ">
                            <form className="search_box input-group d-flex justify-content-center">
                                <input type="search" className={`${styles.search_input} shadow`} placeholder="جستجو.." />
                                <button type="submit" className={`btn ${styles.search_btn} shadow`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                                </button>
                            </form>
                        </div>

                        <div className="col-2 d-md-none d-flex align-items-center justify-content-center">
                            <a href="#" className={styles.menu_icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
