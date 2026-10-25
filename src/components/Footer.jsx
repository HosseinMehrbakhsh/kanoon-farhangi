import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="pt-4 pb-3 position-relative">
            <div className="container">
                <div className="row footer_content d-flex justify-content-center g-4 g-md-5 g-md-0">
                    <div className="col-7 col-sm-6 col-md-3 p-0">
                        <div
                            className="col-12 d-flex justify-content-start justify-content-md-center">
                            <div className="ms-1 ms-lg-5 d-flex flex-column align-items-start align-items-md-center justify-content-center">
                                <img src="./src/assets/imgs/farhangi-logo.webp" width="60px" alt="IAU logo" />
                                <div className="d-flex flex-column footer_title">
                                    <span>کانون‌های فرهنگی دانشجویان</span>
                                    <span>دانشگاه آزاد اسلامی واحد قم</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <div className="row">
                            <div className="col-6 footer_links_col">
                                <div className="d-flex justify-content-start justify-content-lg-center">
                                    <div className="footer_links">
                                        <span className="d-block pb-2 fw-semibold text_2">دسترسی سریع</span>
                                        <ul className="list-unstyled small m-0">
                                            <li className="py-1">
                                                <Link to="/" className="footer_link_item">خانه</Link>
                                            </li>
                                            <li className="py-1">
                                                <Link to="/clubs" className="footer_link_item">کانون‌ها</Link>
                                            </li>
                                            <li className="py-1">
                                                <a href="#about_us" className="footer_link_item">گالری</a>
                                            </li>
                                            <li className="py-1">
                                                <a href="#about_us" className="footer_link_item">درباره ما</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 footer_links_col px-2">
                                <div className="d-flex justify-content-start justify-content-lg-center">
                                    <div className="footer_links">
                                        <span className="d-block pb-2 fw-semibold text_2">تماس با ما</span>
                                        <ul className="list-unstyled small">
                                            <li className="py-1 footer_contact">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin preview-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>                                                <span href="#">قم، دانشگاه آزاد اسلامی واحد پردیسان</span>
                                            </li>
                                            <li className="py-1 footer_contact">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone preview-icon"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>                                                <span href="#" className="ltr">025 32333444</span>
                                            </li>
                                            <li className="py-1 footer_contact">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail preview-icon"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>                                                <span className="ltr">test@fake.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-5 col-sm-6 col-md-3 order-1 order-md-2 d-flex align-items-center justify-content-start justify-content-md-center p-0">
                        <div className="footer_links_social d-flex flex-column align-items-center">
                            <span className="d-block pb-3 fw-semibold text_2">ما را دنبال کنید</span>
                            <ul className="list-unstyled d-flex gap-3 justify-content-center align-items-center m-0">
                                <li className="py-1">
                                    <a href="" className="social_link_item" target="_blank">
                                        <div>
                                            <svg className="footer_svg" height="25" viewBox="5.312 -.192 501.099 512.323"
                                                width="25" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                <path
                                                    d="m127.317 510.763a141.312 141.312 0 0 1 -49.749-17.707c-34.56-19.819-60.352-55.317-68.629-94.421-3.221-15.296-3.627-34.624-3.2-153.749.405-128.193.106-121.579 6.208-142.699 3.029-10.517 11.456-28.587 17.557-37.696 22.507-33.494 55.616-54.998 96.64-62.784 8.192-1.557 20.053-1.707 129.195-1.707 133.355 0 128.96-.192 150.741 6.699a145.216 145.216 0 0 1 92.032 89.259c7.04 19.989 7.381 23.189 7.872 75.84l.427 47.573-8.341 5.717c-11.904 8.128-27.52 22.613-49.408 45.867-25.216 26.795-50.688 51.627-63.616 62.016-27.925 22.421-53.504 35.221-79.488 39.765-13.525 2.347-35.883 1.429-49.109-2.027-11.797-3.072-11.029-3.584-15.488 9.899a135.573 135.573 0 0 0 -6.784 32.981l-.661 8.683-3.115-.64c-25.92-5.141-51.605-27.413-61.525-53.333a76.437 76.437 0 0 1 -5.547-26.005l-.341-7.253-6.592-6.059c-13.739-12.587-22.677-27.989-25.493-43.968-4.523-25.451 7.253-54.229 32.811-80.128 26.965-27.371 66.709-48.853 105.664-57.173 14.037-2.987 38.784-3.776 51.264-1.6 24.277 4.224 44.096 16.491 56.427 34.965 3.883 5.781 4.16 6.613 3.776 11.84a17.323 17.323 0 0 1 -3.904 10.517c-9.92 13.888-39.424 28.757-71.168 35.84-56 12.48-91.605-3.029-86.037-37.525.555-3.477.853-6.485.661-6.677-.683-.683-6.251 2.219-12.267 6.4-10.219 7.125-19.264 20.992-22.4 34.283-.768 3.328-1.067 8.661-.725 13.867.427 7.061 1.131 9.685 4.096 15.701 1.963 3.968 5.867 9.6 8.704 12.565l5.12 5.355-2.048 2.603a103.36 103.36 0 0 0 -14.443 25.963 77.547 77.547 0 0 0 -2.24 38.72c2.197 9.835 8.981 23.36 15.765 31.317 5.163 6.08 17.003 16.299 18.901 16.299.512 0 .939-1.024.939-2.261.021-4.907 3.925-20.757 6.955-28.309 9.024-22.571 28.821-41.813 60.16-58.453 5.227-2.773 20.309-10.027 33.536-16.149 29.013-13.44 44.864-21.653 53.568-27.84 25.088-17.771 40.597-44.053 45.653-77.333 1.835-12.16 1.835-34.859 0-47.083-7.851-52.011-46.827-87.381-102.784-93.227-62.4-6.549-141.824 41.664-190.763 115.776-23.808 36.053-39.893 76.053-46.656 116.117-2.624 15.531-3.605 44.373-1.984 58.667 4.117 36.352 17.536 65.664 40.597 88.661a139.328 139.328 0 0 0 39.893 28.011c50.517 24.107 106.453 24.64 155.627 1.515 21.248-10.005 42.112-25.515 64.491-48 21.76-21.867 36.48-40.107 76.629-95.104 22.187-30.357 39.765-50.517 48.469-55.573l3.2-1.835-.405 65.941c-.384 63.851-.469 66.283-2.624 75.968-12.8 57.131-54.187 98.901-110.827 111.829l-9.984 2.283-123.2.213c-100.992.171-124.8-.043-132.053-1.195z" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                                <li className="py-1">
                                    <a href="" className="social_link_item" target="_blank">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                                <li className="py-1">
                                    <a href="" className="social_link_item"
                                        target="_blank">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-between align-items-center pt-2 mt-4 g-1 footer_bottom">
                    <span className="col-12 col-sm-6 small fw-lighter order-2 order-sm-1">
                        <span>طراحی و توسعه توسط </span>
                        <a href="www.linkedin.com/in/hossein-mehrbakhsh" className="footer_author ps-1">Hossein Mehrbakhsh</a>
                    </span>
                    <span className="col-12 col-sm-6 small fw-lighter order-1 order-sm-2 ltr">© 2026 Islamic Azad Univercity. All
                        rights reserved.</span>
                </div>
            </div>

            <div className="footer_background1 position-absolute end-0 top-0">
                <img src="assets/imgs/footer_background.webp" width="150px" alt="" />
            </div>

            <div className="footer_background2 position-absolute start-0 top-0">
                <img src="assets/imgs/footer_background.webp" width="150px" alt="" />
            </div>
        </footer>
    )
}