import React from "react";
import ServiceCard from "./Components/ServiceCard";
import "./style/Service.css";
import socialImg from "./images/social media.svg";
import branding from './images/Services/branding.svg'
import graphicDesing from './images/Services/Graphic Desing.svg'
import socialMediaMarketing from './images/Services/Social media marketing.svg'
import contentMarketing from './images/Services/Content marketing.svg'
import SEO from './images/Services/seo.svg'
import videoEditing from './images/Services/video editing.svg'
import websiteDesing from './images/Services/website desing.svg'

export default function Service() {
  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">Here's what we offer</h2>
        <div className="service-items p-1 d-flex d-flex justify-content-around flex-wrap">
          <ServiceCard
            img={branding}
            heading="Branding"
            details="Creative and professional identity design helps you stand out in the market. We develop your identity in a way that people say about you when you are yet at starting phase of your game and increase your brand awareness."
          />
          <ServiceCard
            img={graphicDesing}
            heading="Graphic design"
            details="We do understand our customers completely, their objectives, targets, and requirements. We come up with all the assumptions and concepts on the requirement and narrow down the concepts to a few that exactly reflect the core values of the business."
          />
          <ServiceCard
            img={socialMediaMarketing}
            heading="Social media"
            details="We support your brand with Social Media servicing to advertise your brand in a suitable manner that not only generates results but also timely reflects good results from the customers you desire. We are specialized in all social platform tools and technologies to implement respectively."
          />
          <ServiceCard
            img={contentMarketing}
            heading="Content marketing "
            details="Our strategic creation delivers the best content that speaks to your brand to the point you desire for your website with all the SEO elements brought into it. We also do content planning and creation for social platforms which stand unique for your business in all aspects."
          />
          <ServiceCard
            img={SEO}
            heading="SEO"
            details="We take care of your website to improve the quality and quantity traffic of your website through organic search results. Our SEO specialists are trained in all corners of the SEO and help to rank your website to the top in the search results."
          />
          <ServiceCard
            img={videoEditing}
            heading="Video Editing"
            details="We provide the servicing for professional and commercial purposes.
            With the best creative professional team, we deliver the best video editing to your brand or business.
            "
          />
          <ServiceCard
            img={websiteDesing}
            heading="Website Design"
            details="Effective web design can help improve the layout, text, and online forms to improve your conversion rates and increase sales. Website design is the way toward gathering thoughts and tastefully organizing and actualizing them, guided by specific standards for a particular reason."
          />
          <ServiceCard
            img={socialImg}
            heading="Facebook Ads"
            details="With Facebook ads, we increase your brand awareness. Facebook ads are a great way to make people aware of what you offer. Facebook advertising increases traffic to your website."
          />
          <ServiceCard
            img={socialImg}
            heading="Software Design"
            details="A software design that helps you to target audience, generate reports and analytics, create landing pages, and perform all other types of promotion techniques can be considered an online marketing software"
          />
          <ServiceCard
            img={socialImg}
            heading="Video Marketing"
            details="Our video Marketing does not just speak about your brand, rather they get the audience to take action by making a purchase or booking your services."
          />
          <ServiceCard
            img={socialImg}
            heading="App Development Marketing"
            details="We design the App by keeping in mind our target audience and their requirements. Effective App design covers all the crucial factors by using high-quality content and providing credibility to its users to gather trust."
          />
          <ServiceCard
            img={socialImg}
            heading="Micro video"
            details="Micro videos are short, 6-15 second video clips, often created through a micro-video social media platform such as Facebook, Instagram, or Snapchat. which is a single thought, image, or idea, and string them together to create a micro-video."
          />
          <ServiceCard
            img={socialImg}
            heading="Animation Video"
            details="Animations are the simplest sources of entertainment. The innovation of business and technology animation also spread their wings into multiple digital industries, likewise covering the advertising and marketing field."
          />
          <ServiceCard
            img={socialImg}
            heading="Pay-per-click Advertising"
            details="PPC or pay-per-click is a type of internet marketing that involves advertisers paying a fee each time one of their ads is clicked. Simply, you only pay for advertising if your ad is actually clicked on. It's essentially a method of 'buying' visits to your site, in addition to driving website visits organically."
          />
          <ServiceCard
            img={socialImg}
            heading="3D mock-up Design"
            details="We provide the service of 3D mock-up designs. it is a fantastic tool that allows you to rotate your product so you can see it from every angle. mock-up your brand design with us for your business growth."
          />
          <ServiceCard
            img={socialImg}
            heading="Influence Marketing "
            details="We are number of influencer in our list and they have 100k + Organic followers in his/her profile.
            Influence marketing is very powerful and result oriented way for marketing.  
            "
          />
        </div>
      </div>

    </>
  );
}
