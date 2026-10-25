import "./Clubs-Activities.css"
import ClabsData from "../data/clubs-data"
import Club from "../components/Club"

export default function Clubs() {

    const clubsArr = ClabsData.map((ClubData) => {
        return (
            <Club
                key={ClubData.id}
                img={ClubData.mainImg}
                title={ClubData.title}
                miniAbout={ClubData.miniAbout}
            />
        )
    })


    return (
        <main>
            <section className="club_activity_head py-3 py-md-4 shadow-sm">
                <div className="container">
                    <div className="d-flex flex-column align-items-center">
                        <span className="fs-2">کانون‌های فرهنگی</span>
                        <p className="col-7 col-sm-12 m-0 pt-2 fw-light text-center">آشنایی با کانون‌های فرهنگی دانشجویان دانشگاه آزاد اسلامی قم واحد پردیسان</p>
                    </div>
                </div>
            </section>

            <section className="pt-3 pt-md-4">
                <div className="container">
                    <div className="d-flex justify-content-center">

                        <form className="clubs_search input-group d-flex justify-content-center">
                            <input type="search" className="col-10 col-lg-7 club_activity_search_input p-2" placeholder="جستجو در کانون‌ها..." />
                            <button type="submit" className="club_activity_search_btn p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search preview-icon"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                            </button>
                        </form>
                    </div>

                    <div className="py-4 py-md-5">
                        <div className="row g-4 d-flex justify-content-start">

                            {clubsArr}

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}