import React from "react";
import AboutImg from "../Images/about.png";
import AboutImgResponsive from "../Images/about-responsive.png"
// import Header from "./Header";
import TransparentHeader from "./TransparentHeader";
import '../Css/About.css'
import Airvy from '../Images/airvy.png'

const About=()=>{
    return(
        <>
        <TransparentHeader/>
            <div className="aboutImg">
                <img src={AboutImg} alt="" />
            </div>
            <div className="aboutImgRes">
                <img src={AboutImgResponsive} alt="" />
            </div>
        <div className="container text-center mt-5">
        <h3 className="pt-5 about-heading pb-3">
        Airvy Atelier 
        </h3>
        <p className="about-text container">
        At Airvy atelier, we believe that every bride has a unique style, taste and personality. These are put into considering through the entire process of couture dressmaking, from the sketch to choice of fabric and detailing, the personality of the bride is represented. We are known for glamorous dresses as we pay keen attention to details for each dress, using carefully selected fabrics and embellishments to make every client charming on their special day! Our core values as an organization are Attention to details, Customer service, Customer satisfaction and Integrity.
        </p>

        <p className="about-text container pb-5">
        We are known for glamorous dresses as we pay keen attention to details for each dress, using carefully selected fabrics and embellishments to make every client charming on their special day! Our core values as an organization are Attention to details, Customer service, Customer satisfaction and Integrity.
        </p>
        
      </div>

      <div className="aboutImg2 mt-5">
                <img src={Airvy} alt="" />
            </div>

      <div className="container mt-5 about">
        <h3 className="pt-5 designer-tiny-heading text-center">The designer</h3>
        <h3 className="pt-1 designer-big-heading text-center pb-4">Evi Jesumuyiwa</h3>
        <p className="designer-intro container">
        Airvy atelier was established in 2015 by Evi Jesumuyiwa. She began designing as a teen in high school, creating sketches and making little dresses from scrap pieces she could find. In her university years, she had started creating designs for friends and other school mates while outsourcing the production to tailors. She graduated with a distinction in Business Administration and began learning how to make dresses immediately after her graduation. 
        </p>
        <p className="designer-intro container">
      She has since evolved in the fashion industry, building her team and creating masterpieces for brides and other clients from various parts of the world including Canada, U.S, Ireland, U.K, Liberia, France, Austria and so on. Evi's vision is to be among the leading couturiers in the world and she works towards this by accentuating the beauty in every woman through carefully- made, custom fitting garments. 
        </p>
        <p className="designer-intro container">“I'm a lover of art in fashion who's passionate about enchanting dresses. I believe dresses should be lush, dreamy and captivating so my daily goal is to create such pieces to satisfy you and make you elegant!” </p>

        <p className="text-left container signature-one ">With Love,</p>
        <p className="text-left container">
        Evi Jesumuyiwa <br />
        <span className="tiny">Designer & Creative director</span>
        </p>
        <p className="text-left signature container">Evi</p>
      </div>
      
        </>
    )
}
export default About;