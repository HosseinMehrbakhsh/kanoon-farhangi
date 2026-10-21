export default function Club(props) {

    return (
        <div className="col-12 col-sm-6 col-lg-3 mx-auto">
            <a href="#" className="card_item rounded-3 shadow-sm d-flex flex-sm-column align-items-center">
                <div className="card_img_container d-flex rounded-3 overflow-hidden">
                    <img src={props.img} className="card_img" alt="" />
                </div>
                <div className="p-3 d-flex flex-column justify-content-center align-items-center pt-3">
                    <span className="card_item_title">{props.title}</span>
                    <p className="col-10 col-sm-12 col-xl-9 col-xxl-8 py-2 text-center text-secondary m-0">{props.miniAbout}</p>
                    <button className="club_item_btn rounded-3 d-flex align-items-center gap-2">مشاهده کانون
                        <i className="bi bi-arrow-left-short"></i>
                    </button>
                </div>
            </a>
        </div>
    )
}