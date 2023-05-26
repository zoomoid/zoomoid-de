import Image from "next/image"

type CoverProps = {
  cover?: string,
}

export default function Cover({ cover }: CoverProps) {

  const fallback = (<div className="bg-neutral-300 rounded-md w-12 h-12 flex justify-center items-center">
    <i className="material-icons-sharp">music_note</i>
  </div>)

  return <div>
    {
      cover
        ? <Image src={cover} alt="" className="w-12 h-12" width={48} height={48} />
        : fallback
    }
  </div>
}