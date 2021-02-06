import React from "react";

import "./Page.scss";
import Header from "./Header";
import Footer from "./ResumePage/Footer";
import ExperiencesList from "./ResumePage/lists/ExperiencesList";
import FormationsList from "./ResumePage/lists/FormationsList";
import Logos from "./Logos";
import SkillsList from "./ResumePage/lists/SkillsList";
import LangsList from "./ResumePage/lists/LangsList";
import SideProjectsList from "./ResumePage/lists/SideProjectsList";
import MyStack from "./MyStack";

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
