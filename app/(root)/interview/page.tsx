import Agent from "@/components/Agent";
import {getCurrentUser, getInterviewsUserById} from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    const userInterviews = await getInterviewsUserById(user?.id!);

    const hasPastInterviews = userInterviews?.length > 0;

    return (
        <>
            <h3>Interview Generation</h3>

            <Agent userName={user?.name} userId={user?.id} type="generate"/>
        </>
    )
}
export default Page
