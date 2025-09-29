import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="flex flex-col justify-center items-center my-24 p-6 sm:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer testimonials
      </h1>
      <p className="text-gray-500 mb-12">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/60 rounded-lg border border-gray-200 shadow-md order-1 w-80 m-auto p-12 mt-4 cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <img
                className="rounded-full w-14"
                src={testimonial.image}
                alt="profile_img"
              />
              <h2 className="text-lg font-semibold mt-3">{testimonial.name}</h2>
              <p className="text-sm text-gray-500 font-semibold">
                {testimonial.role}
              </p>
              <div className="flex mb-4 mt-3">
                {Array(testimonial.stars)
                  .fill()
                  .map((item, index) => (
                    <img key={index} src={assets.rating_star} alt="rating" />
                  ))}
              </div>
            </div>

            <p className="text-gray-500 text-center text-sm mt-2 text-sm">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
