

const BannerComponent=(props)=>{
    return (
        <div className="w-100 text-center">
        <div className="col-md-12  banner-bg">
            <div className="py-5 ">
                <div className="text-white py-5 h1">{props.title}</div>
            </div>
        </div>
    </div>
    )
}


export default BannerComponent;