import React from "react";
import { TextField } from "@mui/material";
import { WorkspaceModule } from "enums/modules";
import { IProfileModel, IWorkspaceDetailsModel } from "models/Workspace";

interface IProfileProps {
  handleDashboardDetails: (
    module: string,
    details: IProfileModel | IWorkspaceDetailsModel | boolean
  ) => void;
}

const Profile: React.FC<IProfileProps> = ({ handleDashboardDetails }) => {
  const [details, setDetails] = React.useState<IProfileModel>({
    name: "",
    displayName: "",
    displayError: false,
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDetails({
      ...details,
      [e?.target?.name]: e?.target?.value,
    });
  };

  const onSubmit = () => {
    if (details.name !== "" && details.displayName !== "")
      handleDashboardDetails(WorkspaceModule.Profile, details);
    else {
      setDetails({ ...details, displayError: true });
    }
  };

  return (
    <div className="profile">
      <div className="statement">
        <h1>Welcome! First things first...</h1>
        <p>You can always change them later.</p>
      </div>
      <div className="inputs">
        <div className="input-fields">
          <p>Full Name</p>
          <TextField
            name="name"
            type="text"
            className="text-input"
            value={details.name}
            onChange={onChange}
            autoComplete="off"
          />
          {details.name === "" && details.displayError && (
            <p className="error-message">Name Field is a required.</p>
          )}
        </div>
        <div className="input-fields">
          <p>Display Name</p>
          <TextField
            type="text"
            name="displayName"
            className="text-input"
            onChange={onChange}
            value={details.displayName}
            autoComplete="off"
          />
          {details.displayName === "" && details.displayError && (
            <p className="error-message">Display Name Field is a required.</p>
          )}
        </div>
      </div>
      <div className="btn">
        <button type="submit" onClick={onSubmit}>
          Create Workspace
        </button>
      </div>
    </div>
  );
};

export default React.memo(Profile);
