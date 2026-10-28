import { Link } from "react-router-dom";

export default function Club(props) {

    return (
        <div className="col-12 col-sm-6 col-lg-3 mx-auto d-sm-flex">
            <Link to={`/SingleClub?id=${props.id}`} className="card_item h-100 rounded-3 shadow-sm d-flex flex-sm-column align-items-center">
                <div className="card_img_container d-flex rounded-3 overflow-hidden">
                    <img src={props.img} className="card_img" alt="" />
                </div>
                <div className="card_item_detail p-2 p-sm-3 d-flex flex-column justify-content-center align-items-center flex-grow-1 pt-3">
                    <span className="card_item_title">{props.title}</span>
                    <p className="card_item_about col-11 col-sm-12 col-xl-9 col-xxl-8 py-2 text-center text-secondary m-0">{props.miniAbout}</p>
                    <button className="club_item_btn mt-auto rounded-3 d-flex align-items-center gap-2">مشاهده کانون
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left preview-icon"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    </button>
                </div>
            </Link>
        </div>
    )
}