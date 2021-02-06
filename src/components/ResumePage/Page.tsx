import React from "react";

import "./Page.scss";
import Header from "./Header";
import MyStack from "./MyStack";
import SkillsList from "./lists/SkillsList";
import Footer from "./Footer";
import ExperiencesList from "./lists/ExperiencesList";
import FormationsList from "./lists/FormationsList";
import LangsList from "./lists/LangsList";
import SideProjectsList from "./lists/SideProjectsList";
import Logos from "./Logos";

const Page = () => {
  return (
    <div className={"page"}>
      <Header />

      <div className={"content"}>
        <div className={"row row-exp"}>
          <div className={"main"}>
            <ExperiencesList />
            <FormationsList />
            <Logos />
          </div>

          <div className={"col"}>
            <SkillsList />
            <SideProjectsList />
            <MyStack />
            <LangsList />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
