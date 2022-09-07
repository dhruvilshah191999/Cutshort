import React from "react";
import "./assets/css/style.css";
import images from "assets/images";
import Profile from "pages/Workspace/Profile";
import WorkspaceDetails from "pages/Workspace/WorkspaceDetails";
import Selection from "pages/Workspace/Selection";
import Completed from "pages/Workspace/Completed";
import Stepper from "pages/Stepper/Stepper";
import {
  IProfileModel,
  IWorkspaceDetailsModel,
  IWorkspaceModel,
} from "models/Workspace";
import { WorkspaceModule } from "enums/modules";

function App() {
  const [steps, setSteps] = React.useState(1);
  const [workspace, setWorkspace] = React.useState<IWorkspaceModel>({
    name: "",
    displayName: "",
    workspaceName: "",
    url: "",
    forMyself: true,
  });

  const handleDashboardDetails = (
    module: string,
    details: IProfileModel | IWorkspaceDetailsModel | boolean
  ) => {
    if (module === WorkspaceModule.Profile) {
      setWorkspace({
        ...workspace,
        name: (details as IProfileModel).name,
        displayName: (details as IProfileModel).displayName,
      });
      setSteps(steps + 1);
    } else if (module === WorkspaceModule.WorkspaceDetails) {
      setWorkspace({
        ...workspace,
        workspaceName: (details as IWorkspaceDetailsModel).workspaceName,
        url: (details as IWorkspaceDetailsModel).url,
      });
      setSteps(steps + 1);
    } else if (module === WorkspaceModule.Selection) {
      setWorkspace({
        ...workspace,
        forMyself: details as boolean,
      });
      setSteps(steps + 1);
    }
  };

  const renderComponent = () => {
    switch (steps) {
      case 1:
        return <Profile handleDashboardDetails={handleDashboardDetails} />;
      case 2:
        return (
          <WorkspaceDetails handleDashboardDetails={handleDashboardDetails} />
        );
      case 3:
        return <Selection handleDashboardDetails={handleDashboardDetails} />;
      case 4:
        return <Completed workspace={workspace} />;
      default:
        return <Profile handleDashboardDetails={handleDashboardDetails} />;
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={images.Logo} alt="images" />
        </div>
        <h1>Eden</h1>
      </div>
      <Stepper steps={steps} />
      {renderComponent()}
    </div>
  );
}

export default App;
