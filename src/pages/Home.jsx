import './Home.css'
import data from "../data/clubs-data"
import Club from "../components/club"
import Activity from "../components/activity";


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
                        <button className="home_btn d-flex align-items-center gap-1">
                            <span>مشاهده کانون‌ها</span>
                            <i className="bi bi-arrow-left-short"></i>
                        </button>
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
                            <a href="#" className="clubs_title_link d-flex align-items-center gap-1">
                                <span>مشاهده همه کانون‌ها</span>
                                <i className="bi bi-arrow-left-short d-flex align-items-baseline"></i>
                            </a>
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
        </main>
    )
}