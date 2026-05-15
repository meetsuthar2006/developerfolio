import React, {useContext} from "react";
import "./workProjects.scss";
import ProjectCard from "../../components/Projectcard/ProjectCard";
import {workProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkProjects() {

  const {isDark} = useContext(StyleContext);
  if (workProjects.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workProject">
            <div>
              <h1 className="experience-heading">Projects</h1>
              <div className="experience-cards-div">
                {workProjects.project.map((card, i) => {
                  return (
                    <prCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        prname: card.prname,
                        desc: card.desc,
                        date: card.date,
                        prlogo: card.prlogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
