import Link from "next/link";
interface BtnProps {
    link: string
    text: string
    openBlank?: boolean
}

export default function Button(props: BtnProps) {
    const newWindo = props.openBlank && {
        rel: "noopener noreferrer",
        target: "_blank"
    }
    return <Link {...newWindo} href={props.link} className="bg-slate-100 hover:bg-slate-200 py-2 px-1 rounded-md">
        <span className="text-slate-800/90 tracking-wider font-semibold">{props.text}</span>
    </Link>
}