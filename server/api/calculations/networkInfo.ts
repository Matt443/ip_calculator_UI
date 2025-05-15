import { apiGet } from "~/composables/api.composable";

export default defineEventHandler(async (event) => {
    apiGet({ ip: "10.0.0.1", mask: "24" });
    return { message: `User Id:` };
});
