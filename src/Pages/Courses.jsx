import React from "react";
import NavBar from "../components/Header/NavBar";
import Left from "../components/Hero/left";
import Form from "../components/Hero/Form";
import Course from "../components/Course";
import note from "../assets/notepad.png"

const Courses = () => {
  return (
    <>
      <NavBar/>
      
      <div className="p-3 space-y-3">
        <div className="flex gap-2 items-center">
        <img className="h-8" src={note} alt="" />
        <h3 className="text-3xl font-bold text-gray-800">Explore Courses</h3>
        </div>
        <p className="text-gray-600">
          UG & PG programs across Engineering, Management, Law, Design, Sciences
          and more. Filter using the search box above.
        </p>
        <div className="flex flex-wrap gap-5 max-md:justify-center max-md:w-full">
        <Course course="B.A. LL.B" src="https://5.imimg.com/data5/SELLER/Default/2024/5/418919749/JS/GC/AL/213933132/-ballb.jpg"/>
        <Course course="B.Com" src="https://agartscollege.com/assets/images/bcom-ca.jpg"/>
        <Course course="B.Com (Hons)" src="https://agartscollege.com/assets/images/bcom-ca.jpg"/>
        <Course course="B.Des" src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F06%2Fdesigner.webp&w=1920&q=75"/>
        <Course course="B.Pharm" src="https://www.sandipuniversity.edu.in/pharma/images/header/bpharm.jpg"/>
        <Course course="B.Sc" src="https://cache.careers360.mobi/media/article_images/2022/8/23/Courses-After-BSc-Computer-Science.jpg"/>
        <Course course="B.Sc (Hons)" src="https://cache.careers360.mobi/media/article_images/2022/8/23/Courses-After-BSc-Computer-Science.jpg"/>
        <Course course="B.Sc (IT)" src="https://cache.careers360.mobi/media/article_images/2022/8/23/Courses-After-BSc-Computer-Science.jpg"/>
        <Course course="B.Tech CSE" src="https://cache.careers360.mobi/media/article_images/2022/8/23/Courses-After-BSc-Computer-Science.jpg"/>
        <Course course="B.Tech CSE (AI/ML)" src="https://cache.careers360.mobi/media/article_images/2022/8/23/Courses-After-BSc-Computer-Science.jpg"/>
        <Course course="BA LL.B" src="https://5.imimg.com/data5/SELLER/Default/2024/5/418919749/JS/GC/AL/213933132/-ballb.jpg"/>
        <Course course="BBA" src="https://chanakyauniversity.edu.in/wp-content/uploads/2023/03/bba.jpg"/>
        <Course course="BCA" src="https://shooliniuniversity.com/media/1706869835-1685009028-1653739181-yogananda.jpg"/>
        <Course course="LL.B" src="https://5.imimg.com/data5/SELLER/Default/2024/5/418919749/JS/GC/AL/213933132/-ballb.jpg"/>
        <Course course="M.Tech" src="https://cgu-odisha.ac.in/wp-content/uploads/2023/05/M.Tech_.jpg"/>
        <Course course="MA" src="https://images.shiksha.com/mediadata/images/articles/1745839977phpOGvVHx.jpeg"/>
        <Course course="MBA" src="https://www.collegeprojectsolution.com/img/mba.jpeg"/>
        <Course course="Mass Comm" src="https://5.imimg.com/data5/SELLER/Default/2024/5/418919749/JS/GC/AL/213933132/-ballb.jpg"/>
        <Course course="PhD" src="https://www.isbr.in/blogs/wp-content/uploads/2024/11/phd-degree.webp"/>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-start px-4 mt-24 max-md:flex-wrap max-md:justify-center max-md:mt-6 ">
        <Left/>
        <Form/>
      </div>
    </>
  );
};

export default Courses;
