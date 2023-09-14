import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Cover from "./cover";
import { playFromQueue } from "./playerSlice";

export default function Playlist() {
  const dispatch = useAppDispatch();

  const queue = useAppSelector((state) => state.player.queue);

  return (
    <div>
      {queue.map((t, i) => {
        return (
          <div
            key={i}
            className="flex items-center py-1 gap-x-2"
            onClick={() => dispatch(playFromQueue({ idx: i }))}
          >
            <div className="cover">
              <Cover cover={t.cover} />
            </div>
            <div className="">
              <div className="font-bold text-normal">
                <span className="block">{t.name}</span>
              </div>
              <div className="text-sm">
                <span>
                  {typeof t.album === "string" ? t.album : t.album.url}
                </span>
                <span> &ndash; </span>
                <span>{t.artist}</span>
              </div>
            </div>
            <span>{t.duration}</span>
          </div>
        );
      })}
    </div>
  );
}
