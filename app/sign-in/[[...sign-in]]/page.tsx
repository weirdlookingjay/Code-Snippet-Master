import { SignIn } from '@clerk/nextjs'

function signIn() {
    return (
        <div className={`w-full h-screen flex justify-center items-center`}>
            <SignIn />
        </div>
    )
}

export default signIn