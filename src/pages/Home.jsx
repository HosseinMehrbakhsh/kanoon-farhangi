export default function Home() {
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
                            <i class="bi bi-arrow-left-short"></i>
                        </button>
                    </div>
                </div>
            </section>

            <section className="clubs my-4 my-md-5">
                <div className="container">
                    <div className="clubs_container">
                        <div className="d-flex justify-content-between align-items-center py-4">
                            <span className="clubs_title">کانون‌های فرهنگی</span>
                            <a href="#" className="clubs_title_link d-flex align-items-center gap-1">
                                <span>مشاهده همه کانون‌ها</span>
                                <i class="bi bi-arrow-left-short d-flex align-items-baseline"></i>
                            </a>
                        </div>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-lg-3 mx-auto">
                                <a href="#" className="club_item rounded-3 shadow-sm d-flex flex-sm-column align-items-center">
                                    <div className="club_img_container d-flex rounded-3 overflow-hidden">
                                        <img src="./src/assets/imgs/image.png" className="club_img" alt="" />
                                    </div>
                                    <div className="p-3 d-flex flex-column justify-content-center align-items-center pt-3">
                                        <span className="club_item_title"> کانون هنر و رسانه</span>
                                        <p className="col-10 col-sm-12 col-xl-9 col-xxl-8 py-2 text-center text-secondary m-0">عکاسی، گرافیک، تولید محتوا و رسانه‌های نوین</p>
                                        <a href="#" className="club_item_btn rounded-3 d-flex align-items-center gap-2">مشاهده کانون
                                            <i class="bi bi-arrow-left-short"></i>
                                        </a>
                                    </div>
                                </a>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3 mx-auto">
                                <a href="#" className="club_item rounded-3 shadow-sm d-flex flex-sm-column align-items-center">
                                    <div className="club_img_container d-flex rounded-3 overflow-hidden">
                                        <img src="./src/assets/imgs/image.png" className="club_img" alt="" />
                                    </div>
                                    <div className="p-3 d-flex flex-column justify-content-center align-items-center pt-3">
                                        <span className="club_item_title"> کانون هنر و رسانه</span>
                                        <p className="col-10 col-sm-12 col-xl-9 col-xxl-8 py-2 text-center text-secondary m-0">عکاسی، گرافیک، تولید محتوا و رسانه‌های نوین</p>
                                        <a href="#" className="club_item_btn rounded-3 d-flex align-items-center gap-2">مشاهده کانون
                                            <i class="bi bi-arrow-left-short"></i>
                                        </a>
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 mx-auto">
                                <a href="#" className="club_item rounded-3 shadow-sm d-flex flex-sm-column align-items-center">
                                    <div className="club_img_container d-flex rounded-3 overflow-hidden">
                                        <img src="./src/assets/imgs/image.png" className="club_img" alt="" />
                                    </div>
                                    <div className="p-3 d-flex flex-column justify-content-center align-items-center pt-3">
                                        <span className="club_item_title"> کانون هنر و رسانه</span>
                                        <p className="col-10 col-sm-12 col-xl-9 col-xxl-8 py-2 text-center text-secondary m-0">عکاسی، گرافیک، تولید محتوا و رسانه‌های نوین</p>
                                        <a href="#" className="club_item_btn rounded-3 d-flex align-items-center gap-2">مشاهده کانون
                                            <i class="bi bi-arrow-left-short"></i>
                                        </a>
                                    </div>
                                </a>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3 mx-auto">
                                <a href="#" className="club_item rounded-3 shadow-sm d-flex flex-sm-column align-items-center">
                                    <div className="club_img_container d-flex rounded-3 overflow-hidden ">
                                        <img src="./src/assets/imgs/image.png" className="club_img" alt="" />
                                    </div>
                                    <div className="p-3 d-flex flex-column justify-content-center align-items-center pt-3">
                                        <span className="club_item_title"> کانون هنر و رسانه</span>
                                        <p className="col-10 col-sm-12 col-xl-9 col-xxl-8 py-2 text-center text-secondary m-0">عکاسی، گرافیک، تولید محتوا و رسانه‌های نوین</p>
                                        <a href="#" className="club_item_btn rounded-3 d-flex align-items-center gap-2">مشاهده کانون
                                            <i class="bi bi-arrow-left-short"></i>
                                        </a>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}