import { Link } from "react-router-dom"
import styles from "./MiniNav.module.css"
import logo from "../assets/imgs/farhangi-logo.webp"
import ClubSearch from "./ClubSearch"
export default function MiniNav(props) {
    return (
        <header className={`${styles.mini_nav} ${props.isScrolled ? styles.scrolled : ""}`}>
            <nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 col-md-11 col-xl-4 pe-xl-0 pe-auto">
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
                                    <a href="#contact_us">تماس با ما</a>
                                </li>
                            </ul>
                        </div>

                        {/* search box */}
                        <div className="col-3 d-none d-xl-flex align-items-center ">
                            <ClubSearch
                                formClassName="search_box input-group d-flex justify-content-center"
                                inputClassName={`${styles.search_input} shadow`}
                                buttonClassName={`btn ${styles.search_btn} shadow`}
                            />
                        </div>

                        <div className="col-2 col-md-1 d-xl-none d-flex align-items-center justify-content-center">
                            <button type="button" onClick={props.toggleSidebar} className={styles.menu_icon} aria-label="باز کردن منو و جستجو">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
