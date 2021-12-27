//Razorpay launch
const launchRazorPay = () => {
    let options = {
        key: "rzp_test_xt9GyDJQe6zZr8",
        amount: 10000, //as per razorpay documentation last 2 digits are consider as decimal
        currency: "INR",
        name: "BMS Clone",
        description: "Movie Purchase",
        image: "https://spicyip.com/wp-content/uploads/2018/01/fWFLE3QM.jpg",
        handler: () => {
            alert("Payment Done")
        },
        theme: {color: "#c4242d"}
    };

    let rzp = new window.Razorpay(options)
};


const Movie  = () => {
    return (
        <>  
        <div className="">
            <div className="w-full h-full">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg" 
                      className="w-full h-full"
                />
            </div>

                <div className="absolute z-1">
                    <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg">
                    </img>
                </div>
                <div>
                    <h1>The Matrix Resurrections</h1>
                    
                </div>
        </div>    
        </>
    );
};

export default Movie;