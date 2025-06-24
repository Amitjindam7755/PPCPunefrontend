// WORKING VERY WELL
import React from 'react';
import Slider from 'react-slick';
import './Header.css'
import NewsItems from '../NewsItems/NewsItems';
import EventGallery from '../EventGallery/EventGallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTranslation } from 'react-i18next';

const Header = () => {
  const [showYoutubePopup, setShowYoutubePopup] = React.useState(false);
  const {t, i18n} = useTranslation();

  // Sample slides data (you can move this to a JSON file like in your commented code)
  const slides = [
    { id: 1, image: 'carouselImages/img1.jpg', alt: 'Slide 1' },
    { id: 2, image: 'carouselImages/img8.jpg', alt: 'Slide 2' },
    { id: 3, image: 'carouselImages/img11.jpg', alt: 'Slide 3' },
  ];

  const verticalSlides = [
  { id: 1, image: 'carouselImages/adv1.jpg',alt:'adv1' },
  { id: 2, image: 'carouselImages/adv2.jpg',alt:'adv2' },
  { id: 3, image: 'carouselImages/adv3.jpg',alt:'adv3' },
  { id: 4, image: 'carouselImages/adv4.jpg',alt:'adv4' },
];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [subscriber, setSubscriber] = React.useState('');
  const [message, setMessage] = React.useState('');

const handleSubscribe = async (e) => {
  e.preventDefault();
  if (!subscriber) return alert("Please enter email or mobile");

  try {
    // const res = await fetch("http://localhost:8081/api/subscribers", 
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribers`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: subscriber })
    });
    const data = await res.json();
    if (res.ok) {
      // setMessage("Subscribed successfully!");
      setSubscriber('');
      setShowYoutubePopup(true);
      localStorage.setItem("isSubscribed", "true");
      
    } else {
      setMessage(data.error || "Something went wrong.");
    }
  } catch (error) {
    setMessage("Error connecting to server.");
  }
};


  return (
    <>
      <NewsItems />
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 md:px-16 py-12 bg-white min-h-screen shadow-none">
        {/* Carousel on the left */}
        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className="flex justify-center items-center h-[400px] bg-white">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="max-h-full w-[1000px]  object-contain "
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Text content in the middle */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 px-2 md:px-6  text-start md:text-end whitespace-normal break-words">
          <div className="w-full overflow-hidden">
              <Slider
                vertical={true}
                verticalSwiping={true}
                infinite={true}
                autoplay={true}
                autoplaySpeed={2000}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
              >
                {verticalSlides.map((item) => (
                  <div key={item.id}>
                          <img
                            src={item.image}
                            alt={item.alt}
                            className="w-full h-[400px] object-contain"
                          />
                        </div>
                ))}
              </Slider>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
 <div className="text-center py-6 mt-10 bg-purple-50 ">
        <h4 className="text-xl font-semibold text-purple-800">Upcoming Events... (Ex. Vadhu Var Melava, Sports, Any other activites etc..)</h4>
          <div className="flex flex-col md:flex-row gap-6 p-4 justify-center items-start">
  {/* Subscription Box */}
  <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-md">
    <h4 className="text-md font-semibold text-purple-800 mb-4">Subscribe for Event Updates</h4>
    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 items-center">
      <input
        type="text"
        placeholder="Enter Email or Mobile Number"
        value={subscriber}
        onChange={(e) => setSubscriber(e.target.value)}
        className="flex-1 p-2 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        type="submit"
        className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition w-full sm:w-auto"
      >
        Subscribe
      </button>
    </form>
    {message && <p className="mt-2 text-green-600">{message}</p>}
  </div>

  {/* Horizontal Image Gallery with Scrollbar */}
<EventGallery/>
</div>
</div>



{showYoutubePopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center popup-animate">
      <h3 className="text-xl font-semibold mb-4">
        Subscribe to our YouTube Channel to grow our community and receive event updates in your Inbox/Text message.
      </h3>

      <div className="flex justify-center">
        <a
          href="https://www.youtube.com/channel/UCy6n9eW4QNwQ8NIGpLBwTgg?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-md text-lg font-semibold flex items-center gap-2 transition transform hover:scale-105 animate-bounce"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19.615 3.184C20.403 3.41 21.057 4.067 21.284 4.855C21.679 6.209 22 8.319 22 12C22 15.681 21.679 17.791 21.284 19.145C21.057 19.933 20.403 20.59 19.615 20.816C18.261 21.211 12 21.5 12 21.5C12 21.5 5.739 21.211 4.385 20.816C3.597 20.59 2.943 19.933 2.716 19.145C2.321 17.791 2 15.681 2 12C2 8.319 2.321 6.209 2.716 4.855C2.943 4.067 3.597 3.41 4.385 3.184C5.739 2.789 12 2.5 12 2.5C12 2.5 18.261 2.789 19.615 3.184ZM10 15.5L16 12L10 8.5V15.5Z" />
          </svg>
          Subscribe on YouTube
        </a>
      </div>

      <button
        onClick={() => setShowYoutubePopup(false)}
        className="mt-6 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
      >
        Close
      </button>
    </div>
  </div>
)}
    </>
  );
};

export default Header;