import MarqueeComponent from "@/components/Marquee";
import NewAboutUs from "@/components/about/NewAbout";
import Layout from "@/components/common/Layout";
import Seo from "@/components/seo";
import React from "react";

const About = () => {
  return (
    <Layout>
      <div>
        <Seo pageTitle="About us" />
        <NewAboutUs></NewAboutUs>
        <MarqueeComponent />
      </div>
    </Layout>
  );
};

export default About;
