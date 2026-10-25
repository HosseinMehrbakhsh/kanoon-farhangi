import "./SingleClub.css"
import { Link } from "react-router-dom"
import peopleIcon from "../assets/imgs/people.webp"
import mainImg from "../assets/imgs/clubs/art/main.png"
import Activity from "../components/activity"
import GalleryImg from "../components/galleryImg"

export default function SingleClub() {
    return (
        <main>
            <section className="club_head py-3 py-md-4 shadow-sm">
                <div className="container">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex gap-1 fs-2">
                            <span>کانون</span>
                            <span>هنر و رسانه</span>
                        </div>
                        <p>عکاسی، گرافیک، تولید محتوا و رسانه‌های نوین</p>
                        <Link to="/clubs" className="single_club_btn d-flex align-items-center gap-1">
                            <span>بازگشت به کانون‌ها</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="about_club py-3 py-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <div className="d-flex flex-column">
                                <span className="fs-3 pb-3">درباره کانون</span>
                                <p className="col-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti magni veritatis distinctio tempore, repudiandae cupiditate adipisci! Ex doloremque delectus magnam neque dicta, laboriosam nesciunt sunt perferendis obcaecati aliquid, cum distinctio?
                                    Vero accusantium doloribus, a nihil dignissimos libero quia rerum modi hic quas excepturi id, error animi nisi cumque quae? Quaerat necessitatibus possimus aliquam quae aut non, incidunt temporibus excepturi dignissimos.</p>
                                <div className="row pt-3">
                                    <div className="col-4 club_stat_col">
                                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <div className="rounded-circle club_stat_icon_container">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock preview-icon"><path d="M16 14v2.2l1.6 1" /><path d="M16 2v3" /><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" /><path d="M3 9h5.859" /><path d="M8 2v3" /><circle cx="16" cy="16" r="6" /></svg>                                            </div>
                                            <span className="fs-3 pt-2">12</span>
                                            <span className="stat_title">سال فعالیت</span>
                                        </div>
                                    </div>

                                    <div className="col-4 club_stat_col">
                                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <div className="rounded-circle club_stat_icon_container">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-range preview-icon"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M16 2v3" /><path d="M3 9h18" /><path d="M8 2v3" /><path d="M17 13h-6" /><path d="M13 17H7" /><path d="M7 13h.01" /><path d="M17 17h.01" /></svg>
                                            </div>
                                            <span className="fs-3 pt-2">50</span>
                                            <span className="stat_title">برنامه و فعالیت</span>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <div className="rounded-circle club_stat_icon_container">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-group preview-icon"><path d="M17 21a5 5 0 00-10 0" /><path d="M22 10.5a3.5 3.5 0 00-5.507-2.868" /><path d="M7.507 7.632A3.5 3.5 0 002 10.5" /><circle cx="12" cy="13" r="3" /><circle cx="18.5" cy="4.5" r="2.5" /><circle cx="5.5" cy="4.5" r="2.5" /></svg>
                                            </div>
                                            <span className="fs-3 pt-2">60</span>
                                            <span className="stat_title">عضو فعال</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="h-100 d-flex align-items-center justify-content-center">
                                <img className="rounded-3" src={mainImg} alt="" width="80%" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        </Link>
                    </div>

                    <div className="row g-3">
                        <Activity
                            img="./src/assets/imgs/clubs/art/akkasi/main.png"
                            clubTitle="هنر و رسانه"
                            title="کارگاه عکاسی"
                            date="1405/06/01"
                        />
                        <Activity
                            img="./src/assets/imgs/clubs/art/akkasi/main.png"
                            clubTitle="هنر و رسانه"
                            title="کارگاه عکاسی"
                            date="1405/06/01"
                        />
                        <Activity
                            img="./src/assets/imgs/clubs/art/akkasi/main.png"
                            clubTitle="هنر و رسانه"
                            title="کارگاه عکاسی"
                            date="1405/06/01"
                        />
                        <Activity
                            img="./src/assets/imgs/clubs/art/akkasi/main.png"
                            clubTitle="هنر و رسانه"
                            title="کارگاه عکاسی"
                            date="1405/06/01"
                        />
                    </div>
                </div>
            </section>

            <section className="club_gallary py-3 py-md-4">
                <div className="container pb-3">
                    <div className="d-flex justify-content-between pb-3">
                        <span className="fs-3">گالری</span>
                        <Link to="" className="d-flex align-items-center gap-1 text-decoration-none small">
                            <span>مشاهده همه</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        </Link>
                    </div>

                    <div className="row g-3">
                        <GalleryImg />
                        <GalleryImg />
                        <GalleryImg />
                        <GalleryImg />
                    </div>
                </div>
            </section>
        </main>
    )
}
