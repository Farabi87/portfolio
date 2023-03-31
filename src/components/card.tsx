import Image from "next/image"

interface CardProps {
    imgFileName: string
    headText: string
    des: string
}

export default function Card(props: CardProps) {
    return <div className="hover:shadow-2xl hover:scale-105 hover:ring-blue-400 transition-all duration-200 ease-in-out card w-80 bg-base-100 shadow-xl ring ring-blue-100/50">
        <figure className="relative w-80 h-40">
            <Image loading="lazy" layout="fill" objectFit="cover" alt={props.imgFileName} src={`/images/${props.imgFileName}`} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
                {props.headText}
            </h2>
            <p>{props.des}</p>
        </div>
    </div>
}