import React from "react";
import NavBar from "../components/Header/NavBar";
import Left from "../components/Hero/left";
import Form from "../components/Hero/Form";
import Card from "../components/Card";
import building from "../assets/building.png"

const University = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="flex gap-2 items-center p-3">
          <img className="h-8" src={building} alt="" />
        <h1 className="text-3xl text-gray-900 font-bold p-3">
          Partner Universities
        </h1>
        </div>
        <div className="flex gap-5 p-3 flex-wrap justify-center">
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwR4-W3XXloyXFPAOD92PaJg0sq0ONBEe7eg&s"
            name="Graphic Era University"
            para="NAAC A+ university known for Engineering, CSE-AI/ML, Management, and robust placements."
            greenbtn_1="NAAC A+"
            greenbtn_2="Strong Placements"
            greenbtn_3="Modern Labs"
            btn_1="B.Tech CSE"
            btn_2="BBA"
            btn_3="MBA"
            btn_4="BCA"
            btn_5="M.Tech"
            btn_6="B.Com (Hons)"
            button="Apply to UPES"
          />

          <Card
            src="https://www.vidyalive.com/uploads/uni_slider_image/57baac9eae50a941205a281440d20da2.webp"
            name="Uttaranchal University"
            para="Wide program range: Law, Management, Engineering, Pharmacy with green, spacious campus."
            greenbtn_1="Law Excellence"
            greenbtn_2="Green Campus"
            greenbtn_3="Scholarships"
            btn_1="B.A. LL.B"
            btn_2="LL.B"
            btn_3="B.Pharm"
            btn_4="B.Tech CSE"
            btn_5="MBA"
            btn_6="B.Sc (IT)"
            button="Apply to UU"
          />

<Card
            src="https://images.shiksha.com/mediadata/images/1715060004phpJDPEgH.jpeg"
            name="Maya Devi Educational Group"
            para="Career-focused programs with supportive faculty and affordable fee structures."
            greenbtn_1="Affordable"
            greenbtn_2="Mentorship"
            greenbtn_3="Skill Training"
            btn_1="BBA"
            btn_2="BCA"
            btn_3="B.Com"
            btn_4="B.Sc"
            btn_5="MBA"
            btn_6="B.Sc (IT)"
            button="Apply to MDU"
          />

          <Card
            src="https://www.collegeinfoindia.com/wp-content/uploads/2022/10/UPES1-scaled.jpg"
            name="UPES Dehradun"
            para="Specialized programs in Energy, Law, Design, and CSE with industry-aligned curriculum."
            greenbtn_1="Industry Ties"
            greenbtn_2="Domain-Focused"
            greenbtn_3="Global"
            btn_1="B.Tech CSE (AI/ML)"
            btn_2="B.Des"
            btn_3="BBA"
            btn_4="BA LL.B"
            btn_5="MBA"
            btn_6="B.Sc (IT)"
            button="Apply to UPES"
          />
          <Card
            src="https://colleges18.s3.ap-south-1.amazonaws.com/Doon_Business_School_DBS_Dehradun_2_af5ffccbad.jpg"
            name="DBS (Doon Business School)"
            para="Management-focused institute known for practical exposure and internships."
            greenbtn_1="Practical"
            greenbtn_2="Internships"
            greenbtn_3="Corporate Talks"
            btn_1="BBA"
            btn_2="MBA"
            btn_3="B.Com (Hons)"
            btn_4="Mass Comm"
            btn_5="MBA"
            btn_6="B.Sc (IT)"
            button="Apply to DBS"
          />
          <Card
            src="https://www.doonuniversity.ac.in/admin/assets/uploads/slider/slide3.jpg"
            name="Doon University"
            para="State university recognized for research-led programs in Sciences and Humanities."
            greenbtn_1="State Univ"
            greenbtn_2="Research"
            greenbtn_3="Experienced Faculty"
            btn_1="B.Sc (Hons)"
            btn_2="MA"
            btn_3="MBA"
            btn_4="PhD"
            btn_5="MBA"
            btn_6="B.Sc (IT)"
            button="Apply to DU"
          />
        </div>
      </div>
      <div className="flex gap-2 justify-between items-start px-4 mt-24 max-md:flex-wrap max-md:justify-center">
        <Left />
        <Form />
      </div>
    </div>
  );
};

export default University;
