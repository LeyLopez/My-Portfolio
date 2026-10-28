import { useState } from 'react';
import { Camera } from 'lucide-react';

interface ProfilePhotoProps {
  alt: string;
}

export function ProfilePhoto({ alt }: ProfilePhotoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full max-w-[15rem] overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-2xl shadow-black/20 sm:max-w-[17rem]">
      {!hasError ? (
        <img
          alt={alt}
          className="h-full w-full object-cover"
          height="640"
          loading="eager"
          onError={() => setHasError(true)}
          src="/assets/Leidis%20Lopez%20Foto.jpg"
          width="512"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 bg-accent/10 p-8 text-center text-accent" role="img" aria-label={alt}>
          <Camera aria-hidden="true" size={48} strokeWidth={1.5} />
          <span className="text-sm font-semibold">{alt}</span>
        </div>
      )}
    </div>
  );
}
