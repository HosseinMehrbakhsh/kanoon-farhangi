export default function Header() {
    return (
        <header>
            <nav className="main_nav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 col-sm-7 col-lg-8 col-xl-3 pe-xl-0 pe-auto">
                            <div className="d-flex align-items-center gap-1 gap-sm-3">
                                <a href="#" className=" d-xl-none menu_icon">
                                    <i className="bi bi-list fs-4"></i>
                                </a>

                                <img src="./src/assets/imgs/farhangi-logo.webp" alt="Azad univercity logo" width="70px" />
                                <div className="d-flex flex-column nav_title">
                                    <span>کانون‌های فرهنگی دانشجویان</span>
                                    <span>دانشگاه آزاد اسلامی واحد قم</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 d-none d-xl-block">
                            <ul className="nav_link_items list-unstyled d-flex gap-5 align-items-center justify-content-center m-0 h-100">
                                <li>
                                    <a href="#">خانه</a>
                                </li>

                                <li>
                                    <a href="#">کانون‌ها</a>
                                </li>

                                <li>
                                    <a href="#">فعالیت‌ها</a>
                                </li>

                                <li>
                                    <a href="#">گالری</a>
                                </li>

                                <li>
                                    <a href="#">درباره ما</a>
                                </li>

                                <li>
                                    <a href="#">تماس با ما</a>
                                </li>
                            </ul>
                        </div>

                        {/* search box */}
                        <div className="col-5 col-lg-4 col-xl-3 d-none d-sm-flex align-items-center ">
                            <form className="search_box input-group d-flex justify-content-center">
                                <input type="search" className="search_input shadow" placeholder="جستجو.." />
                                <button type="submit" className="btn search_btn shadow">
                                    <i className="bi bi-search icon_tooltip" data-tooltip="جستجو"></i>
                                </button>
                            </form>
                        </div>

                        <div className="col-2 d-sm-none d-flex align-items-center justify-content-center">
                            <a href="#" className="menu_icon">
                                <i className="bi bi-search icon_tooltip fs-4" data-tooltip="جستجو"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}