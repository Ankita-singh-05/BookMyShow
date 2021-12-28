//Razorpay launch
const launchRazorPay = () => {
    let options = {
        key: "rzp_test_xt9GyDJQe6zZr8",
        amount: 10000, //as per razorpay documentation last 2 digits are consider as decimal
        currency: "INR",
        name: "BMS Clone",
        description: "Movie Purchase",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhX5WjSUyTf9-k2yh6Ryumrx0V-uW3NtiX0qkqopSbqSlfbmB9KkGhSJUWYyJicZumyHI&usqp=CAU",
        handler: () => {
            alert("Payment Done")
        },
        theme: {color: "#c4242d"}
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
};


const Movie  = () => {
    return (
        <>  
        <div className="">
            <div className="w-full h-full my-16">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/the-matrix-resurrections-et00133391-24-11-2021-12-59-51.jpg" 
                      className="w-full h-full"
                />
            </div>
            <button onClick={launchRazorPay} class="m-16 bg-red-500 hover:bg-red-600 text-xl text-white font-bold py-3 px-14 rounded-md">
                   Book tickets
            </button>

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