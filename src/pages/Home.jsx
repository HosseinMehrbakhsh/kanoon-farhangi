import { Link } from 'react-router-dom';
import './Home.css'
import data from "../data/clubs-data"
import Club from "../components/Club"
import Activity from "../components/activity";
import peopleIcon from "../assets/imgs/people.webp"


export default function Home() {
    const selectedClubs = [data[0], data[1], data[2], data[3]];
    const clubsArr = selectedClubs.map((club) => {
        return (
            <Club
                key={club.id}
                img={club.mainImg}
                title={club.title}
                miniAbout={club.miniAbout}
            />
        )
    })

    const activityArr = selectedClubs.map((club) => {
        let lastActivity = club.activities.at(-1)
        return (
            <Activity
                key={club.id}
                clubTitle={club.title}
                img={lastActivity.mainImg}
                title={lastActivity.title}
                date={lastActivity.date}
            />
        )
    })

    return (
        <main>
            <section className="hero pt-5 pt-md-0 shadow">
                <div className="container h-100">
                    <div className="d-flex flex-column align-items-center justify-content-start justify-content-md-center h-100 pt-5 pt-md-0">
                        <div className="hero_title_box d-flex flex-column">
                            <span className="hero_title">کانون‌های فرهنگی دانشجویان</span>
                            <span className="hero_title">دانشگاه آزاد اسلامی واحد قم</span>
                        </div>
                        <p className="col-11 col-sm-9 col-md-5 col-xl-4 text-center py-4">بستری برای فعالیت، خلاقیت و مشارکت دانشجویان در عرصه‌های فرهنگی، هنری، اجتماعی و علمی</p>
                        <Link to="/clubs" className="home_btn d-flex align-items-center gap-1">
                            <span>مشاهده کانون‌ها</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="about_clubs pt-5 pt-md-5">
                <div className="container">
                    <div className="d-flex flex-column">
                        <span className="repeated_title pb-2">درباره کانون‌ها</span>
                        <p className="col-12 col-md-11 col-lg-9 text-secondary">کانون‌های فرهنگی دانشجویان دانشگاه آزاد اسلامی واحد قم، فرصتی برای شکوفایی استعدادها، پرورش خلاقیت و مشارکت دانشجویان در فعالیت‌های فرهنگی و هنری هستند. این کانون‌ها با فراهم کردن فضایی پویا برای یادگیری، تعامل و همکاری، به دانشجویان کمک می‌کنند تا علایق و توانایی‌های خود را در زمینه‌های مختلف دنبال کنند و تجربه‌هایی ارزشمند در کنار یکدیگر بسازند.</p>
                    </div>
                </div>
            </section>

            <section className="clubs py-2 py-md-4">
                <div className="container">
                    <div className="clubs_container">
                        <div className="d-flex justify-content-between align-items-center py-3 py-md-4">
                            <span className="repeated_title">کانون‌های فرهنگی</span>
                            <Link to="/clubs" className="clubs_title_link d-flex align-items-center gap-1">
                                <span>مشاهده همه کانون‌ها</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                            </Link>
                        </div>
                        <div className="row g-3">

                            {clubsArr}

                        </div>
                    </div>
                </div>
            </section>

            <section className="last_activities py-2 py-md-4">
                <div className="container">
                    <div className="ativities_container">
                        <div className="pt-4 pb-3 py-md-4">
                            <span className="repeated_title">آخرین فعالیت‌ها</span>
                        </div>
                        <div className="row g-3">

                            {activityArr}

                        </div>
                    </div>
                </div>
            </section>

            <section className="cta py-4 mt-3">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-10 col-sm-8 col-md-4">
                            <div className="ps-2 ps-md-5 d-flex flex-column justify-content-center align-items-start">
                                <span className="cta_title">با ما همراه باشید</span>
                                <p className="col-9 col-md-12 col-lg-10 col-xl-8 col-xxl-7 mb-2 py-2">کانون‌های فرهنگی، برای رشد استعدادها و تقویت هویت فرهنگی</p>
                                <a href="" className="cta_btn d-flex align-items-center gap-2">
                                    <span>تماس با ما</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-8 ">
                            <div className="row h-100 d-flex justify-content-end">
                                <div className="col-4 stat_col">
                                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open-text preview-icon"><path d="M12 5v16" /><path d="M16 13h2" /><path d="M16 9h2" /><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" /><path d="M6 13h2" /><path d="M6 9h2" /></svg>
                                        <span className="fs-3 pt-2">12</span>
                                        <span className="stat_title">کانون فرهنگی</span>
                                    </div>
                                </div>

                                <div className="col-4 stat_col">
                                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-range preview-icon"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M16 2v3" /><path d="M3 9h18" /><path d="M8 2v3" /><path d="M17 13h-6" /><path d="M13 17H7" /><path d="M7 13h.01" /><path d="M17 17h.01" /></svg>
                                        <span className="fs-3 pt-2">50</span>
                                        <span className="stat_title">برنامه و فعالیت</span>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-group preview-icon"><path d="M17 21a5 5 0 00-10 0" /><path d="M22 10.5a3.5 3.5 0 00-5.507-2.868" /><path d="M7.507 7.632A3.5 3.5 0 002 10.5" /><circle cx="12" cy="13" r="3" /><circle cx="18.5" cy="4.5" r="2.5" /><circle cx="5.5" cy="4.5" r="2.5" /></svg>
                                        <span className="fs-3 py-1">60</span>
                                        <span className="stat_title">عضو فعال</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}