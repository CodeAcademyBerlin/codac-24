export type Plan = "free" | "basic" | "premium";
export type GroupRole = "owner" | "admin" | "member";
export type Role = "user" | "student" | "mentor" | "admin";

export type UserProfile = {
  id: UserId;
  name: string | null;
  image: string | null;
};

export type UserId = number;

export type UserSession = {
  id: UserId;
};

export type MemberInfo = {
  name: string | null;
  userId: UserId;
  image: string | null;
  role: GroupRole;
};
