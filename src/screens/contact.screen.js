import BannerComponent from "../components/banner.component"


const ContactScreen=()=>{
    return (
        <div>
            <BannerComponent title={"Contact us"}></BannerComponent>
            <div className="py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.07372353156!2d-74.31001968046667!3d40.69701731605891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1681765207212!5m2!1sen!2sin" class="w-100" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
                        </div>
                        <div className="col-md-6">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



export default ContactScreen;