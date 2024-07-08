import { SignUp } from '@clerk/nextjs'

function signUp() {
    return (
        <div className={`w-full h-screen flex justify-center items-center`}>
            <SignUp />
        </div>
    )
}

export default signUp