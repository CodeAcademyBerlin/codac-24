import { getCommunity } from "@/data-access/lms";

export async function getCommunityUseCase() {
    const community = await getCommunity();
    return community;
}
