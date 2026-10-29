import styles from "./sidebar.module.css";
import logo from "../assets/imgs/farhangi-logo.webp"
import { Link } from "react-router-dom";

export default function sidebar(props) {

    return (
        <div className={`${styles.sidebar_container} ${props.isOpen ? styles.open : ""} row d-block d-xl-none position-fixed top-0 start-0 m-0`}>
            <div className={`${styles.sidebar} col-10 col-sm-8 col-md-6 col-lg-4`}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                        <img src={logo} className={styles.logo_img} alt="Azad univercity logo" width="70px" />
                        <div className={`d-flex flex-column ${styles.nav_title}`}>
                            <span>کانون‌های فرهنگی دانشجویان</span>
                            <span>دانشگاه آزاد اسلامی واحد قم</span>
                        </div>
                    </div>
                    <button onClick={props.toggleSidebar} className="btn-close btn-close-white mt-3"></button>
                </div>


                <div className="col-11 py-2">
                    <form className="search_box input-group d-flex justify-content-center flex-nowrap">
                        <input type="search" className={`${styles.search_input} shadow`} placeholder="جستجو.." />
                        <button type="submit" className={`btn ${styles.search_btn} shadow`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        </button>
                    </form>
                </div>

                <div className="col-8 pt-4 ps-2">
                    <ul className={`${styles.nav_link_items} list-unstyled d-flex flex-column gap-2`}>
                        <li>
                            <Link to="/" onClick={props.toggleSidebar}>خانه</Link>
                        </li>

                        <li>
                            <Link to="/clubs" onClick={props.toggleSidebar}>کانون‌ها</Link>
                        </li>

                        <li>
                            <Link to="/activities" onClick={props.toggleSidebar}>فعالیت‌ها</Link>
                        </li>

                        <li>
                            <a href="#" onClick={props.toggleSidebar}>تماس با ما</a>
                        </li>

                        <li>
                            <a href="#" onClick={props.toggleSidebar}>گالری</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}