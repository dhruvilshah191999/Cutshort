import images from "assets/images";
import { IWorkspaceModel } from "models/Workspace";
import React from "react";

interface ICompletedProps {
  workspace: IWorkspaceModel;
}

const Completed: React.FC<ICompletedProps> = ({ workspace }) => {
  return (
    <div className="profile complete">
      <div className="complete-icon">
        <div className="icon">
          <img src={images.DoneWhite} alt="complete" />
        </div>
      </div>
      <div className="statement">
        <h1>Congratulations,{workspace.workspaceName}!</h1>
        <p>You have completed onboarding. you can start using Eden!</p>
      </div>
      <div className="btn">
        <button>Launch Eden</button>
      </div>
    </div>
  );
};

export default Completed;
