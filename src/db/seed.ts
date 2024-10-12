import "dotenv/config";

import { database, pg } from "./index";
import { accounts, groups, profiles, students, cohorts } from "@/db/schema";
import characters from "./seedsample/characters.json";
import organizations from "./seedsample/organizations.json";
async function main() {
  // for (let i = 0; i < organizations.length; i++) {
  //   const group = await database
  //     .insert(groups)
  //     .values({
  //       name: organizations[i].name,
  //       description: "Cohort",
  //       isCohort: true,
  //       type: "cohort",
  //       userId: 1
  //     })
  //     .onConflictDoNothing()
  //     .returning();
  //   const cohort = await database
  //     .insert(cohorts)
  //     .values({
  //       name: organizations[i].name,
  //       image: organizations[i].img,
  //       groupId: group[0].id

  //     }).onConflictDoNothing()
  //     .returning();

  // }
  for (let i = 0; i < characters.length; i++) {
    await database
      .insert(students)
      .values({
        name: characters[i].name,
        avatar: characters[i].img,
      })
      .onConflictDoNothing()
      .returning();
  }



  await pg.end();
}

main();
