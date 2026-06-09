import { getEmailDirectory } from "./userService.js";

export async function dashboard() {
  try {
    console.log("Dashboard is running...");
    const emailDirectory = await getEmailDirectory();
    console.log("All Records are successfully fetched", emailDirectory);
  } catch (err) {
    console.log(err);
  }
}
dashboard()