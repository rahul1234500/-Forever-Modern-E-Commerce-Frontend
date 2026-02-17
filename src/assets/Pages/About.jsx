import React from "react";
import Title from "../Components/Title";
import { assets } from "../Images/assets";
import NewsLetter from "../Components/NewsLetterBox";
const About = () => {
  return (
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 md:text-left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            laudantium molestiae mollitia consequuntur perferendis veniam
            tenetur, ipsam voluptates delectus accusantium beatae ad. Porro,
            culpa? Eveniet officiis quam voluptate dignissimos veniam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem necessitatibus reiciendis sapiente possimus
            accusantium similique, officia reprehenderit rem consequatur odio
            culpa omnis nam a voluptatibus alias perferendis ab autem cupiditate
            nobis libero cum tenetur. Distinctio, amet. Omnis dolorem magni
            temporibus.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            alias sint dolorem neque commodi error qui quis nesciunt eius
            dolorum, esse aut fugiat cum maxime voluptatem eos nobis omnis
            accusamus.
          </p>
        </div>
      </div>
      <div className="text-xl py-4 ">
              <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col text-sm mb-20 md:flex-row">
              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                  <b>Quality Assurance</b>
                  <p>We ensure every product meets our high quality standards through rigorous testing and inspection.</p>
              </div>
              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                  <b>Convenience</b>
                  <p>We provide a seamless shopping experience with easy navigation, fast checkout, and multiple payment options.</p>
              </div>
              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                  <b>Exceptional Customer Service </b>
                  <p>Our dedicated support team is available 24/7 to assist you with any questions or concerns.</p>
              </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default About;
