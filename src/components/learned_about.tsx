import dynamic from "next/dynamic";

const Card = dynamic(() => import("./card"));


export default function LearnedAbout() {
    const data: {
        headText: string,
        des: string,
        imgFileName: string
    }[] = [
            {
                headText: 'Flutter',
                des: "Flutter is Google's portable UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.",
                imgFileName: 'flutter.jpg'
            },
            {
                headText: 'Next.js',
                des: "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.",
                imgFileName: 'nextjs.png'
            },
            {
                headText: 'SEO',
                des: " Search engine optimization: the process of making your site better for search engines. Also the job title of a person who does this for a living: We just hired a new SEO to improve our presence on the web.",
                imgFileName: 'seo.png'
            },
            {
                headText: 'Tailwind',
                des: "Tailwind is a CSS framework that provides us with single-purpose utility classes which are opinionated for the most part, and which help us design our web pages from right inside our markup or js jsx",
                imgFileName: 'tailwindcss.png'
            }
        ];

    return <div className=" mx-auto">
        <div className="container mx-auto">
            <div className="xl:mx-0 lg:mx-0 mt-10 mx-auto text-xl tracking-wider font-semibold text-slate-700 bg-slate-100 w-fit py-1 px-3 rounded-full">Learned About</div>
        </div>
        <div className="my-10 flex justify-center w-full">
            <div className=" grid md:grid-cols-2 sm:grid-cols-2 gap-8 xl:grid-cols-4 lg:grid-cols-4">
                {
                    data.map(x => <Card key={x.imgFileName} {...x} />)
                }
            </div>
        </div>
    </div>
}