"use server"

import {auth, db} from "@/firebase/admin";
import {cookies} from "next/headers";

export async function signUp(params: SignUpParams) {
    const {uid, name, email} = params;

    try {
        const userRecord = await db.collection('users').doc(uid).get();

        if (userRecord.exists) {
            return {
                success: false,
                message: "Email already exists. Please sign in instead"
            }
        }

        await db.collection('users').doc(uid).set({
            name, email
        })

    } catch (e) {
        console.error('Error creating a user', e);

        if (error.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: "Email already in use"
            }
        }

        return {
            success: false,
            message: "Failed to create an account"
        }
    }
}

export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies();

    const sessionsCookie = await auth.createSessionCookie(idToken, {
        expiresIn: 7 * 24 * 60 * 60 * 1000,
    })

    cookieStore.set('session', sessionsCookie, {
        maxAge: 7 * 24 * 60 * 60,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
    })
}

export async function signIn(params: SignInParams) {
    const {email, idToken} = params;

    try {
        const userRecord = await auth.getUserByEmail(email);

        if (!userRecord) {
            return {
                success: false,
                message: 'User does not exist. Create an account instead'
            }
        }

        await setSessionCookie(idToken)

    } catch (e) {
        console.log(e)

        return {
            suucess: false,
            message: 'Failed to log into account'
        }
    }
}