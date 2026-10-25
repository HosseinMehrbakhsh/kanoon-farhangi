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
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-clock preview-icon"><path d="M16 14v2.2l1.6 1" /><path d="M16 2v3" /><path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" /><path d="M3 9h5.859" /><path d="M8 2v3" /><circle cx="16" cy="16" r="6" /></svg>
                        <span>{props.date}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}