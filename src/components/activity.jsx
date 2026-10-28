import { Link } from "react-router-dom"
import styles from "./Club-Activity.module.css"

export default function Activity(props) {

    return (
        <div className="col-12 col-sm-6 col-lg-3 mx-auto">
            <Link to="/singleActivity" className={`${styles.card_item} h-100 rounded-3 shadow-sm d-flex flex-sm-column align-items-start`}>
                <div className={`${styles.card_img_container} d-flex rounded-3 overflow-hidden`}>
                    <img src={props.img} className={styles.card_img} alt="" />
                </div>
                <div className={`${styles.card_item_detail} p-3 d-flex flex-column flex-grow-1 justify-content-center align-items-start pt-3 ps-4 ps-sm-3`}>
                    <div className={`${styles.activity_club_title} d-flex gap-1 rounded-2 mb-2`}>
                        <span>کانون</span>
                        <span>{props.clubTitle}</span>
                    </div>
                    <span className={`${styles.card_item_title} pt-1 text-start`}>{props.title}</span>
                    <div className="mt-auto small text-secondary py-2 d-flex gap-2 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-clock preview-icon"><path d="M16 14v2.2l1.6 1" /><path d="M16 2v3" /><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" /><path d="M3 9h5.859" /><path d="M8 2v3" /><circle cx="16" cy="16" r="6" /></svg>
                        <span>{props.date}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
