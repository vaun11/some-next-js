export default function ChangeRoute() {
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex flex-col w-64 justify-center items-center gap-4">
                <div className="flex flex-row justify-center align-center w-32">
                    <div className="flex text-center italic font-bold">Change, and everything is change</div>
                </div>
                <div className="flex flex-row justify-center align-center">
                    <div className="flex text-center">To the degree you go with the stream, you see you are still, you are flowing with it.</div>
                </div>

                <div className="flex flex-row justify-center align-center">
                    <div className="flex text-center">But to the degree you resist the stream, you see the current is rushing past you and fighting you.</div>
                </div>

                <div className="flex flex-col gap-4 italic w-32 justify-center align-center text-center">
                    <div className="">So swim with it.</div>
                    <div className="">Go with it.</div>
                    <div className="">And you are there...</div>
                    <div className="font-bold">You are at rest.</div>
                </div>


                <div className="flex flex-row justify-center align-center">
                    <div className="flex text-center">- Alan Watts</div>
                </div>

                <div className="flex flex-row">
                    <a
                    href="/change/deeper"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target=""
                    rel="noopener noreferrer"
                    >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Go deeper{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        A word on the present.
                    </p>
                    </a>
                </div>
            </div>
        </div>
    )
}