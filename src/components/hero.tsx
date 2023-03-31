import Image from "next/image";

export default function Hero() {
    const expertis: string[] = [
        'NextJs',
        'Tailwind CSS',
        'Typescript',
        'SEO'
    ]

    const aboutMe = 'I have a vast interest in various IT segments. Recently, I have been exploring different areas such as front-end development, back-end development, app development, and digital marketing to discover my interests.';

    return <div className="w-full mt-20">
        <div className="mx-auto w-fit p-1 ring-1 ring-slate-500/40 rounded-full overflow-hidden">
            <div className="relative w-52 h-52 p-2 rounded-full overflow-hidden">
                <Image loading="lazy" alt="Propic" objectFit="cover" layout="fill" src='/images/propic.jpg' />
            </div>
        </div>
        <div className="text-center text-5xl text-slate-500 tracking-wider mt-5">
            Farabi Ahnaf Akib
        </div>
        <div className="text-center container mx-auto text-slate-500 mt-2 max-w-xl">
            {aboutMe}
        </div>
        <div className="flex space-x-2 justify-center mt-5">
            {expertis.map(
                x => <div key={x} className="font-bold bg-slate-300/70 w-fit p-1 rounded-xl">{x}</div>
            )}
        </div>
    </div>
}