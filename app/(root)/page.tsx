import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className='card-cta'>
                <div className='flex flex-col gap-6 max-w-lg'>
                    <h2>Get interview ready with AI Powered Practice</h2>
                    <p className='text-lg'>
                        Practise on real interview questions and get instant feedback
                    </p>

                    <Button asChild className='btn-primary max-sm:w-full'>
                        <Link href="/interview">
                            Start an Interview
                        </Link>
                    </Button>
                </div>

                <Image src="/public/robot.png" alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>

            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your interviews</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id}/>
                    ))}
                </div>

                {/*<p>You haven't taken any interviews</p>*/}
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Taken an interview</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id}/>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Page
