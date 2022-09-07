export interface IWorkspaceModel {
  name: string;
  displayName: string;
  workspaceName: string;
  url: string;
  forMyself: boolean;
}

export interface IProfileModel {
  name: string;
  displayName: string;
  displayError?: boolean;
}

export interface IWorkspaceDetailsModel {
  workspaceName: string;
  url: string;
  displayError?: boolean;
}
