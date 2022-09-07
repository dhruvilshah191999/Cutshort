/* eslint-disable no-useless-computed-key */
import React from "react";
import images from "assets/images";
import clsx from "clsx";
import { IProfileModel, IWorkspaceDetailsModel } from "models/Workspace";
import { WorkspaceModule } from "enums/modules";

interface ISelectionProps {
  handleDashboardDetails: (
    module: string,
    details: IProfileModel | IWorkspaceDetailsModel | boolean
  ) => void;
}

const Selection: React.FC<ISelectionProps> = ({ handleDashboardDetails }) => {
  const [forMyself, setForMyself] = React.useState<boolean>(true);

  const handleCards = (isMyself: boolean) => {
    setForMyself(isMyself);
  };

  return (
    <div className="profile selection">
      <div className="statement">
        <h1>How are you planning to use Eden?</h1>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className="selection-cards">
        <div
          className={clsx("cards", { ["card-blue"]: forMyself })}
          id="card1"
          onClick={() => handleCards(true)}
        >
          <div className="icon">
            {forMyself ? (
              <img src={images.UserBlue} alt="myself" />
            ) : (
              <img src={images.UserBlack} alt="myself" />
            )}
          </div>
          <h3>For myself</h3>
          <p>Write better.Think more clearly.Stay organized</p>
        </div>
        <div
          className={clsx("cards", { ["card-blue"]: !forMyself })}
          id="card2"
          onClick={() => handleCards(false)}
        >
          <div className="icon">
            {forMyself ? (
              <img src={images.GroupBlack} alt="myself" />
            ) : (
              <img src={images.GroupBlue} alt="myself" />
            )}
          </div>
          <h3>With my team</h3>
          <p>wikis, docs, tasks & projects, all in one place</p>
        </div>
      </div>
      <div className="btn">
        <button
          type="submit"
          onClick={() =>
            handleDashboardDetails(WorkspaceModule.Selection, forMyself)
          }
        >
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default Selection;
