import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page({ error }: ErrorPageProps) {

    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                <section className="text-center mx-6 lg:w-2/3">
                    <img className="m-auto w-24 lg:w-48" src="https://github.com/pharmawala/pharmawala.com/raw/main/logo.png" />
                    <h1 className="mt-2 mb-1 text-2xl lg:text-3xl">We'll be back soon!</h1>
                    <div>
                        <p>
                            Sorry for the inconvenience. We&rsquo;re performing some maintenance
                            at the moment. You can always follow us on
                            <a className="text-blue-700 font-semibold hover:underline hover:decoration-wavy" href="https://twitter.com/_pharmawala">Twitter</a> for more updates.
                        </p>
                    </div>

                    <div class="flex justify-center mt-8">
                        <a href="/" class="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                            <div class="flex justify-center space-x-4">
                                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png" alt="chat logo" loading="lazy" width="128" height="128" class="w-6 h-6"/>
                                    <span class="hidden font-medium md:block dark:text-white">Back to Home Page</span>
                            </div>
                        </a>
                    </div>

                </section>
            </div>
        </>
        // <p>500 internal error: {(error as Error).message}</p>);
    )
}