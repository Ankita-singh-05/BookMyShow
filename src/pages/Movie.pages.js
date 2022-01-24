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
        <div className="mt-2">
                <div className="w-full h-full relative z-0 bg-gradient-to-t">
                    <img src="https://images.livemint.com/img/2021/05/14/1600x900/Pushpa_1620969459135_1620969466386.jpg" 
                      className="w-full h-full relative top-0 bottom-0"
                     />

                </div>

                <div className="absolute flex pt-28 top-10 z-50">
                  
                    <div>
                         <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa--the-rise-et00129538-08-12-2021-01-21-46.jpg" 
                           className="h-full ml-10 p-4"
                         />
                    </div>

                   <div className="ml-10 py-5">
                        <h1 className="text-white font-bold text-4xl ml-10 py-5"> Pushpa: The Rise - Part 01</h1>

                        <div classname="bg-white text-white rounded">
                            <span>2D</span>
                            <h1>Telugu, Kannada, Tamil, Malayalam, Hindi</h1> 
                        </div>


                        <button onClick={launchRazorPay} class="m-16 bg-red-500 hover:bg-red-600 text-xl text-white font-bold py-3 px-14 rounded-md">
                             Book tickets
                        </button>
                   </div>
                </div>
    
                <div className="py-4 px-5">
                    <h1 className="font-bold text-2xl">
                         About the movie
                    </h1>
                    <p className="py-2 w-4/6 text-md">
                         Based on the smuggling of red sander trees in Seshachalam forest, Andhra Pradesh, Pushpa tells the story of a lorry driver who is part of the illegal business.
                    </p>
                </div>
        </div>    
        </>
    );
};

export default Movie;