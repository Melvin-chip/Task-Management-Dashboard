import React from 'react';

import { Avatar } from '@mantine/core';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  size: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ alt = 'Logo', size, src }) => (
  <Avatar src={src} size={size} alt={alt} />
);

export default Logo;
