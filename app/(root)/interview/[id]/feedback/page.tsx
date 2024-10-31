import React from 'react'
import {getCurrentUser} from "@/lib/actions/auth.action";
import {getFeedbackByInterviewId, getInterviewById} from "@/lib/actions/general.action";
import {redirect} from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";

const Page = async ({params}: RouteParams) => {
    const {id} = await params;
    const user = await getCurrentUser();

    const interview = await getInterviewById(id)
    if (interview) redirect('/')

    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user?.id,
    })

    return (
        <section className="section-feedback">
            <div className="flex flex-row justify-center">
                <h1 className="text-4xl font-semibold">
                    <span className="capitalize">{interview.role}</span>
                </h1>
            </div>

            <div className="flex flex-row justify-center">
                <div className="flex flex-row gap-5">

                    <div className="flex flex-row gap-2 items-center">
                        <Image src="/star.svg" alt="star" width={22} height={22}/>
                        <p>
                            Overall Impression: {" "}
                            <span className="text-primary-200 font-bold">
                              {feedback?.totalScore}
                          </span>
                            /100
                        </p>
                    </div>

                    {/*Date*/}
                    <div className="flex flex-row gap-2">
                        <Image src="/calendar.svg" alt="calendar" width={22} height={22}/>
                        <p>
                            {feedback?.createdAt ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A") : "N/A"}
                        </p>
                    </div>
                </div>
            </div>

            <hr/>

            <p>{feedback?.finalAssessment}</p>

            {/*Interview Breakdown*/}
            <div className="flex flex-col gap-4">
                <h2>Breakdown of the interview: </h2>
                {feedback?.categoryScores?.map((category, index) => (
                    <div key={index}>
                        <p className="font-bold">
                            {index + 1}. {category.name} ({category.score}/100)
                        </p>
                        <p>{category.comment}</p>
                    </div>
                ))}
            </div>


        </section>
    )
}
export default Page
