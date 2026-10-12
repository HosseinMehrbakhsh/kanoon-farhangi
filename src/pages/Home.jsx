export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className="container h-100">
                    <div className="d-flex flex-column align-items-center justify-content-start justify-content-md-center h-100 pt-5 pt-md-0">
                        <div className="hero_title_box d-flex flex-column">
                            <span className="hero_title">کانون‌های فرهنگی دانشجویان</span>
                            <span className="hero_title">دانشگاه آزاد اسلامی واحد قم</span>
                        </div>
                        <p className="col-12 col-sm-9 col-md-5 col-xl-4 text-center py-4">بستری برای فعالیت، خلاقیت و مشارکت دانشجویان در عرصه‌های فرهنگی، هنری، اجتماعی و علمی</p>
                        <button className="home_btn d-flex align-items-center gap-1">
                            <span>مشاهده کانون‌ها</span>
                            <i class="bi bi-arrow-left-short"></i>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}