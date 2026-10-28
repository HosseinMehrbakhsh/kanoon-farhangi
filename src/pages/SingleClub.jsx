import Data from "../data/clubs-data"
import styles from "./SingleClub.module.css"
import { Link } from "react-router-dom"
import Activity from "../components/activity"
import GalleryImg from "../components/galleryImg"
import { useSearchParams } from "react-router-dom"

export default function SingleClub() {
    const [searchParams] = useSearchParams();
    const clubId = searchParams.get("id");
    const club = Data.find((club) => (clubId == club.id ? club : null));

    const activitiesArr =club.activities.map(activity => (
        <Activity
            img={activity.mainImg}
            clubTitle={club.title}
            title={activity.title}
            date={activity.date}
        />
    ));

    const gallaryArr=club.activities.map(activity=>(
        <GalleryImg src={activity.imgs[0]} />
    ))


    return (
        <main>
            <section className={`${styles.club_head} py-3 py-md-4 shadow-sm`}>
                <div className="container">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex gap-1 fs-2">
                            <span>کانون</span>
                            <span>{club.title}</span>
                        </div>
                        <p>{club.miniAbout}</p>
                        <Link to="/clubs" className={`${styles.single_club_btn} d-flex align-items-center gap-1`}>
                            <span>بازگشت به کانون‌ها</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="about_club py-3 py-md-5">
                <div className="container">
                    <div className="row gy-4 g-lg-0">
                        <div className="col-12 col-lg-7 order-2 order-lg-1">
                            <div className="d-flex flex-column">
                                <span className="fs-3 pb-3">درباره کانون</span>
                                <p className="col-11 col-sm-10">{club.about}</p>
                                <div className="row pt-3 gy-4">
                                    <div className="col-12 col-md-8">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <div className={`${styles.club_stat_icon_container} rounded-circle`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-clock preview-icon"><path d="M16 14v2.2l1.6 1" /><path d="M16 2v3" /><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" /><path d="M3 9h5.859" /><path d="M8 2v3" /><circle cx="16" cy="16" r="6" /></svg>
                                                    </div>
                                                    <div className="d-flex flex-column ps-3">
                                                        <span className={`${styles.stat_title} fw-semibold`}>سال تاسیس</span>
                                                        <span className="pt-1 small ltr">{club.foundation}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <div className={`${styles.club_stat_icon_container} rounded-circle`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-range preview-icon"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M16 2v3" /><path d="M3 9h18" /><path d="M8 2v3" /><path d="M17 13h-6" /><path d="M13 17H7" /><path d="M7 13h.01" /><path d="M17 17h.01" /></svg>
                                                    </div>
                                                    <div className="d-flex flex-column ps-3">
                                                        <span className={`${styles.stat_title} fw-semibold`}>برنامه و فعالیت</span>
                                                        <span className="pt-1 small"><span>{club.activities.length}</span>+ فعالیت</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <div className={`${styles.club_stat_icon_container} rounded-circle`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-group preview-icon"><path d="M17 21a5 5 0 00-10 0" /><path d="M22 10.5a3.5 3.5 0 00-5.507-2.868" /><path d="M7.507 7.632A3.5 3.5 0 002 10.5" /><circle cx="12" cy="13" r="3" /><circle cx="18.5" cy="4.5" r="2.5" /><circle cx="5.5" cy="4.5" r="2.5" /></svg>
                                                    </div>
                                                    <div className="d-flex flex-column ps-3">
                                                        <span className={`${styles.stat_title} fw-semibold`}>تعداد اعضا</span>
                                                        <span className="pt-1 small">بیش از <span>{club.members}</span> نفر</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <div className={`${styles.club_stat_icon_container} rounded-circle`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user preview-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                                    </div>
                                                    <div className="d-flex flex-column ps-3">
                                                        <span className={`${styles.stat_title} fw-semibold`}>مسئول کانون</span>
                                                        <span className="pt-1 small">{club.admin}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="d-flex justify-content-center justify-content-sm-start align-items-center h-100">
                                            <a href="" className={`${styles.single_club_btn} d-flex align-items-center justify-content-between justify-content-sm-start gap-1 col-6 col-sm-auto`}>
                                                <span>عضویت در کانون</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-11 col-lg-5 order-1 order-lg-2">
                            <div className="h-100 d-flex align-items-center justify-content-start justify-content-lg-center">
                                <img className="rounded-3" src={club.mainImg} alt="" width="80%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="club_last_activities py-3 py-md-4">
                <div className="container">
                    <div className="d-flex justify-content-between pb-3">
                        <span className="fs-3">آخرین فعالیت‌ها</span>
                        <Link to="" className="d-flex align-items-center gap-1 text-decoration-none small">
                            <span>مشاهده همه</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        </Link>
                    </div>

                    <div className="row g-3 d-flex flex-nowrap overflow-x-auto">

                        {activitiesArr}

                    </div>
                </div>
            </section>

            <section className="club_gallary py-3 py-md-4">
                <div className="container pb-3">
                    <div className="d-flex justify-content-between pb-3">
                        <span className="fs-3">گالری</span>
                        <Link to="" className="d-flex align-items-center gap-1 text-decoration-none small">
                            <span>مشاهده همه</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        </Link>
                    </div>

                    <div className="row g-3 d-flex flex-nowrap overflow-x-auto">
                        
                        {gallaryArr}

                    </div>
                </div>
            </section>
        </main>
    )
}
