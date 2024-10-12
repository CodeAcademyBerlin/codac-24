import { relations, sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["visitor", "student", "mentor", "super"]);
export const groupRoleEnum = pgEnum("groupRole", ["member", "admin", "owner"]);
export const accountTypeEnum = pgEnum("type", ["email", "google", "github"]);

export const users = pgTable("user", {
  id: serial("id").primaryKey(),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  role: roleEnum("role").notNull().default("visitor"),
});

export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accountType: accountTypeEnum("accountType").notNull(),
  githubId: text("githubId").unique(),
  googleId: text("googleId").unique(),
  password: text("password"),
  salt: text("salt"),
}, (table) => ({
  userIdAccountTypeIdx: index("user_id_account_type_idx").on(table.userId, table.accountType),
}));

export const magicLinks = pgTable("magic_links", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  token: text("token"),
  tokenExpiresAt: timestamp("tokenExpiresAt", { mode: "date" }),
}, (table) => ({
  tokenIdx: index("magic_links_token_idx").on(table.token),
}));

export const resetTokens = pgTable("reset_tokens", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  token: text("token"),
  tokenExpiresAt: timestamp("tokenExpiresAt", { mode: "date" }),
}, (table) => ({
  tokenIdx: index("reset_tokens_token_idx").on(table.token),
}));

export const verifyEmailTokens = pgTable("verify_email_tokens", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  token: text("token"),
  tokenExpiresAt: timestamp("tokenExpiresAt", { mode: "date" }),
}, (table) => ({
  tokenIdx: index("verify_email_tokens_token_idx").on(table.token),
}));

export const profiles = pgTable("profile", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  displayName: text("displayName"),
  imageId: text("imageId"),
  image: text("image"),
  bio: text("bio").notNull().default(""),
});

export const sessions = pgTable("session", {
  id: text("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
}, (table) => ({
  userIdIdx: index("sessions_user_id_idx").on(table.userId),
}));

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  stripeSubscriptionId: text("stripeSubscriptionId").notNull(),
  stripeCustomerId: text("stripeCustomerId").notNull(),
  stripePriceId: text("stripePriceId").notNull(),
  stripeCurrentPeriodEnd: timestamp("expires", { mode: "date" }).notNull(),
}, (table) => ({
  stripeSubscriptionIdIdx: index("subscriptions_stripe_subscription_id_idx").on(table.stripeSubscriptionId),
}));

export const following = pgTable("following", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  foreignUserId: serial("foreignUserId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
}, (table) => ({
  userIdForeignUserIdIdx: index("following_user_id_foreign_user_id_idx").on(table.userId, table.foreignUserId),
}));

/**
 * newsletters - although the emails for the newsletter are tracked in Resend, it's beneficial to also track
 * sign ups in your own database in case you decide to move to another email provider.
 * The last thing you'd want is for your email list to get lost due to a
 * third party provider shutting down or dropping your data.
 */
export const newsletters = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
});



export const groups = pgTable("group", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  type: text("type").notNull().default("other"),
  description: text("description").notNull(),
  isPublic: boolean("isPublic").notNull().default(false),
  isCohort: boolean("isCohort").notNull().default(false),
  bannerId: text("bannerId"),
  info: text("info").default(""),
  youtubeLink: text("youtubeLink").default(""),
  discordLink: text("discordLink").default(""),
  githubLink: text("githubLink").default(""),
  xLink: text("xLink").default(""),
}, (table) => ({
  userIdIsPublicIdx: index("groups_user_id_is_public_idx").on(table.userId, table.isPublic),
}));

export const cohorts = pgTable("cohort", {
  id: serial("id").primaryKey(),
  groupId: serial("groupId"),
  name: text("name").notNull(),
  aka: text("aka"),
  startDate: timestamp('startDate'),
  endDate: timestamp('endDate'),
  description: text("description"),
  image: text("image"),

});

export const students = pgTable("student", {
  id: serial("id").primaryKey(),
  userId: serial('userId'),
  name: text('name'),
  avatar: text('avatar'),
  cohortId: serial('cohortId'),
  courseId: serial('courseId')

});

export const courses = pgTable("course", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
})

export const lessons = pgTable("lesson", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  courseId: serial("courseId")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  order: integer("order").notNull(),


})


export const memberships = pgTable("membership", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  groupId: serial("groupId")
    .notNull()
    .references(() => groups.id, { onDelete: "cascade" }),
  groupRole: groupRoleEnum("groupRole").default("member"),
}, (table) => ({
  userIdGroupIdIdx: index("memberships_user_id_group_id_idx").on(table.userId, table.groupId),
}));

export const invites = pgTable("invites", {
  id: serial("id").primaryKey(),

  token: text("token")
    .notNull()
    .default(sql`gen_random_uuid()`)
    .unique(),
  tokenExpiresAt: timestamp("tokenExpiresAt", { mode: "date" }),
  groupId: serial("groupId")
    .notNull()
    .references(() => groups.id, { onDelete: "cascade" }),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  groupId: serial("groupId")
    .notNull()
    .references(() => groups.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageId: text("imageId"),
  startsOn: timestamp("startsOn", { mode: "date" }).notNull(),
});

export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  groupId: serial("groupId")
    .notNull()
    .references(() => groups.id, { onDelete: "cascade" }),
  postId: serial("postId"),
  isRead: boolean("isRead").notNull().default(false),
  type: text("type").notNull(),
  message: text("message").notNull(),
  createdOn: timestamp("createdOn", { mode: "date" }).notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  groupId: serial("groupId")
    .notNull()
    .references(() => groups.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  message: text("message").notNull(),
  createdOn: timestamp("createdOn", { mode: "date" }).notNull(),
});

export const reply = pgTable("replies", {
  id: serial("id").primaryKey(),
  userId: serial("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  postId: serial("postId")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  groupId: serial("groupId")
    .notNull()
    .references(() => groups.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdOn: timestamp("createdOn", { mode: "date" }).notNull(),
}, (table) => ({
  postIdIdx: index("replies_post_id_idx").on(table.postId),
}));

/**
 * CODAC
 *
 */




/**
 * RELATIONSHIPS
 *
 * Here you can define drizzle relationships between table which helps improve the type safety
 * in your code.
 */

export const groupRelations = relations(groups, ({ many }) => ({
  memberships: many(memberships),
}));

export const membershipRelations = relations(memberships, ({ one }) => ({
  user: one(users, { fields: [memberships.userId], references: [users.id] }),
  profile: one(profiles, {
    fields: [memberships.userId],
    references: [profiles.userId],
  }),
  group: one(groups, {
    fields: [memberships.groupId],
    references: [groups.id],
  }),
}));

export const postsRelationships = relations(posts, ({ one }) => ({
  user: one(users, { fields: [posts.userId], references: [users.id] }),
  group: one(groups, { fields: [posts.groupId], references: [groups.id] }),
}));

export const followingRelationship = relations(following, ({ one }) => ({
  foreignProfile: one(profiles, {
    fields: [following.foreignUserId],
    references: [profiles.userId],
  }),
  userProfile: one(profiles, {
    fields: [following.userId],
    references: [profiles.userId],
  }),
}));

export const courseLessonsRelations = relations(lessons, ({ one }) => ({
  course: one(courses, { fields: [lessons.courseId], references: [courses.id] }),
}))


/**
 * TYPES
 *
 * You can create and export types from your schema to use in your application.
 * This is useful when you need to know the shape of the data you are working with
 * in a component or function.
 */

export type Role = typeof roleEnum.enumValues[number];
export type GroupRole = typeof groupRoleEnum.enumValues[number];
export type Subscription = typeof subscriptions.$inferSelect;
export type Group = typeof groups.$inferSelect;
export type NewGroup = typeof groups.$inferInsert;
export type Membership = typeof memberships.$inferSelect;

export type Event = typeof events.$inferSelect;
export type NewEvent = typeof events.$inferInsert;

export type User = typeof users.$inferSelect;
export type Profile = typeof profiles.$inferSelect;

export type Cohort = typeof cohorts.$inferSelect;
export type Student = typeof students.$inferSelect;


export type Notification = typeof notifications.$inferSelect;

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

export type Reply = typeof reply.$inferSelect;
export type NewReply = typeof reply.$inferInsert;

export type Following = typeof following.$inferSelect;

export type GroupId = Group["id"];
