export default function Activity(props) {

    return (
        <div className="col-12 col-sm-6 col-lg-3 mx-auto">
            <a href="#" className="card_item rounded-3 shadow-sm d-flex flex-sm-column align-items-center">
                <div className="card_img_container d-flex rounded-3 overflow-hidden">
                    <img src={props.img} className="card_img" alt="" />
                </div>
                <div className="p-3 d-flex flex-column justify-content-center align-items-start pt-3 w-100 ps-4 ps-sm-3">
                    <div className="d-flex gap-1 activity_club_title rounded-2 mb-2">
                        <span>کانون</span>
                        <span>{props.clubTitle}</span>
                    </div>
                    <span className="card_item_title pt-1">{props.title}</span>
                    <div className="small text-secondary py-2 d-flex gap-2 align-items-center">
                        <i class="bi bi-calendar4-event"></i>
                        <span>{props.date}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}