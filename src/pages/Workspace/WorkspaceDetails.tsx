import React from "react";
import { TextField } from "@mui/material";
import { IProfileModel, IWorkspaceDetailsModel } from "models/Workspace";
import { validRegex, WorkspaceModule } from "enums/modules";

interface IWorkspaceDetailsProps {
  handleDashboardDetails: (
    module: string,
    details: IProfileModel | IWorkspaceDetailsModel | boolean
  ) => void;
}

const WorkspaceDetails: React.FC<IWorkspaceDetailsProps> = ({
  handleDashboardDetails,
}) => {
  const [details, setDetails] = React.useState<IWorkspaceDetailsModel>({
    workspaceName: "",
    url: "",
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
    if (
      details.workspaceName !== "" &&
      (details.url === "" || validRegex.test(details.url))
    )
      handleDashboardDetails(WorkspaceModule.WorkspaceDetails, details);
    else {
      setDetails({ ...details, displayError: true });
    }
  };

  return (
    <div className="profile workspace-details">
      <div className="statement">
        <h1>Let's set up a home for all your work</h1>
        <p>You can always create another workspace later.</p>
      </div>
      <div className="inputs">
        <div className="input-fields">
          <p>Workspace Name</p>
          <TextField
            name="workspaceName"
            type="text"
            className="text-input"
            value={details.workspaceName}
            onChange={onChange}
            autoComplete="off"
          />
          {details.workspaceName === "" && details.displayError && (
            <p className="error-message">Workspace Name Field is a required.</p>
          )}
        </div>
        <div className="input-fields">
          <p>
            Workspace URL <span>(optional)</span>
          </p>
          <div className="email-field">
            <TextField
              type="text"
              name="displayName"
              className="default-email text-input"
              value="www.eden.com/"
              disabled={true}
            />
            <TextField
              type="text"
              name="url"
              value={details.url}
              className="email-input text-input"
              onChange={onChange}
              required
              autoComplete="off"
            />
            {details.url !== "" &&
              details.displayError &&
              !validRegex.test(details.url) && (
                <p className="error-message">
                  URL Field is a required or URL is not valid.
                </p>
              )}
          </div>
        </div>
        <div className="btn" onClick={onSubmit}>
          <button>Create Workspace</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(WorkspaceDetails);
