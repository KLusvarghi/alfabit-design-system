import Image from 'next/image';
import React from 'react';

export type AvatarImageProps = {
  src: string;
  altDescription: string | ''; //caso não passe nada sera essa string vazia
};

const AvatarImage = ({src, altDescription}: AvatarImageProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={altDescription}
        className="rounded-full"
        width={100}
        height={100}
      />
    </div>
  );
};

export default AvatarImage;
