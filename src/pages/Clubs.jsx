import { useSearchParams } from "react-router-dom"
import styles from "./Clubs-Activities.module.css"
import ClabsData from "../data/clubs-data"
import Club from "../components/Club"
import ClubSearch from "../components/ClubSearch"
import { normalizeSearchText } from "../utils/search"

export default function Clubs() {
    const [searchParams] = useSearchParams()
    const searchQuery = normalizeSearchText(searchParams.get("search") || "")
    const filteredClubs = searchQuery
        ? ClabsData.filter((club) => normalizeSearchText(club.title).includes(searchQuery))
        : ClabsData

    const clubsArr = filteredClubs.map((ClubData) => {
        return (
            <Club
                key={ClubData.id}
                id={ClubData.id}
                img={ClubData.mainImg}
                title={ClubData.title}
                miniAbout={ClubData.miniAbout}
            />
        )
    })


    return (
        <main className={styles.page}>
            <section className={`${styles.club_activity_head} py-3 py-md-4 shadow-sm`}>
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

                        <ClubSearch
                            formClassName="clubs_search input-group d-flex justify-content-center"
                            inputClassName={`col-10 col-lg-7 ${styles.club_activity_search_input} p-2`}
                            buttonClassName={`${styles.club_activity_search_btn} p-2`}
                        />
                    </div>

                    <div className="py-4 py-md-5">
                        <div className="row g-4 d-flex justify-content-start">

                            {clubsArr.length > 0 ? clubsArr : (
                                <p className="text-center text-secondary m-0 fs-5 pt-3" role="status" style={{height:"55vh"}}>
                                    کانونی با این نام پیدا نشد.
                                </p>
                            )}

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
