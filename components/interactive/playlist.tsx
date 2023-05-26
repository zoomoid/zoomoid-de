import { useAppSelector } from "@/app/hooks"
import Cover from "./cover"

export default function Playlist() {
  const queue = useAppSelector((state) => state.player.queue)

  return (
    <div>
      {
        queue.map((t, i) => {
          return <div key={i} className="py-1 flex gap-x-2 items-center">
            <div className="cover">
              <Cover cover={t.cover} />
            </div>
            <div className="">
              <div className="text-normal font-bold">
                <span className="block">{t.name}</span>
              </div>
              <div className="text-sm">
                <span>{typeof t.album === "string" ? t.album : t.album.url}</span>
                <span>{" "}&ndash;{" "}</span>
                <span>{t.artist}</span>
              </div>

            </div>
            <span>{t.duration}</span>
          </div>
        })
      }
    </div>
  )
}