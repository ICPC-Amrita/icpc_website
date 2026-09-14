'use client'
import { useState } from "react";

export default function TopThreeCard({ rank, name, questId, total, image }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center pb-4 transition-transform duration-300 hover:-translate-y-2">
      <div className="w-44 h-44 rounded-2xl overflow-hidden mx-auto bg-muted">
        {image && !imgError ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-1" />
        )}
      </div>
      <p className="mt-4 mb-1 text-xl w-52 text-center truncate text-foreground">{name}</p>
      <p className="mb-2 text-xs font-light w-52 text-center text-muted-foreground truncate">{questId}</p>
      <div className="px-4 py-1 text-primary">
        Rank {rank}
        {total ? <span className="text-muted-foreground"> · {total} pts</span> : null}
      </div>
    </div>
  );
}
