export const AUTHENTICATION_ERROR_MESSAGE =
  "You must be logged in to view this content";

export const PRIVATE_GROUP_ERROR_MESSAGE =
  "You do not have permission to view this group";

export const ADMIN_ERROR_MESSAGE = "You do not have permission to do that";

export const AuthenticationError = class AuthenticationError extends Error {
  constructor() {
    super(AUTHENTICATION_ERROR_MESSAGE);
    this.name = "AuthenticationError";
  }
};

export const AdminError = class AuthenticationError extends Error {
  constructor() {
    super(ADMIN_ERROR_MESSAGE);
    this.name = "AdminError";
  }
}

export const PrivateGroupAccessError = class PrivateGroupAccessError extends Error {
  constructor() {
    super(PRIVATE_GROUP_ERROR_MESSAGE);
    this.name = "PrivateGroupAccessError";
  }
};

export const NotFoundError = class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
};
