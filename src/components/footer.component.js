
const FooterComponent=()=>{    
    
    return (
        <div className="footer">
        <div className="container py-5">
            <div className="row">
                <div className="col-md-5 text-center">
                    <div className="py-2 h1 text-white">Our Place</div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-2 text-white"><i className="ri-facebook-circle-line"></i></div>
                        <div className="col-md-2 text-white"><i className="ri-instagram-line"></i></div>
                        <div className="col-md-2 text-white"><i className="ri-twitter-line"></i></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="h5 text-white">Quick Links</div>
                    <div className="text-white">Home</div>
                    <div className="text-white">About</div>
                    <div className="text-white">Our Menu</div>
                    <div className="text-white">Pre Order</div>
                    <div className="text-white">Contact</div>
                </div>
                <div className="col-md-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.07372353156!2d-74.31001968046667!3d40.69701731605891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1681765207212!5m2!1sen!2sin" className="w-100" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
               
            </div>
        
        </div>
    </div>
    )
}



export default FooterComponent;