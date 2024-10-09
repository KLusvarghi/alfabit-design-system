import React from 'react';
import Box from '../Box/Box';
import Typography from '../Typography/Typography';

export type TextBlockProps = {
  children: React.ReactNode;
  title: string;
  type?: 'primary' | 'secondary' | 'dark';
} & React.HTMLAttributes<HTMLDivElement>;

const TextBlock = ({
  children,
  title,
  type,
  className,
  ...rest
}: TextBlockProps) => {
  const textClass = type === 'primary' ? 'text-white' : 'text-gray-primary';

  return (
    <Box className={`flex flex-col p-5 gap-2`} rounded type={type} {...rest}>
      <div className={className}>
        <Typography className={`font-bold ${textClass}`} size="xl">
          {title}
        </Typography>
        <Typography className={textClass}>{children}</Typography>
      </div>
    </Box>
  );
};

export default TextBlock;
