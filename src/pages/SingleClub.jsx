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
                        <Link to="/clubs" className="single_club_btn">
                            <span>بازگشت به کانون‌ها</span>
                            <i className="bi bi-arrow-left-short"></i>
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
                                                <i className="bi bi-book cta_icon d-flex align-items-center"></i>
                                            </div>
                                            <span className="fs-3 pt-2">12</span>
                                            <span className="stat_title">کانون فرهنگی</span>
                                        </div>
                                    </div>

                                    <div className="col-4 club_stat_col">
                                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <div className="rounded-circle club_stat_icon_container">
                                                <i className="bi bi-calendar4-week cta_icon d-flex align-items-center"></i>
                                            </div>
                                            <span className="fs-3 pt-2">50</span>
                                            <span className="stat_title">برنامه و فعالیت</span>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                            <div className="rounded-circle club_stat_icon_container">
                                                <img src={peopleIcon} alt="clubs icon" width="30px" />
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
                            <i className="bi bi-arrow-left-short d-flex align-items-center"></i>
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
                            <i className="bi bi-arrow-left-short d-flex align-items-center"></i>
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
