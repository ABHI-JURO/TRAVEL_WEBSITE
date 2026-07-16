import Image from 'next/image'

const Guide = () => {
    return (
        <section className='flexCenter flex-col'>
            <div className='border-2 border-red-500 padding-container max-container w-full pb-24'>
                <Image src="/camp.svg" alt="camp" width={51} height={51} />
                <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
                    we are here for you
                </p>
                <div className='flex flex-wrap justify-between gap-6 lg:gap-10'>
                    <h2 className='bold-50 lg:bold-64 xl:max-w-[390px]'>Guide You Towards Your Destination With Ease</h2>
                    <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
                        Only with the hilink application you will no longer get lost again, because we already support offline maps where there is no internet connection in the mountain and forest. Invite your friends and relatives to have fun in the wildreness through the valley and reach the top of the mountain.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Guide