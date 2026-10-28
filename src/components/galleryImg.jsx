
export default function GalleryImg(props){
    return(
        <div className="col-12 col-sm-6 col-lg-3">
            <div>
                <img src={props.src} className="rounded-3" width="100%" alt="" />
            </div>
        </div>
    )
}