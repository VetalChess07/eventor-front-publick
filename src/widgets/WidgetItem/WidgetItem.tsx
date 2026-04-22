import { Stack } from '@mui/material';
import { ReactNode } from 'react';

import IconArrow from '@/shared/assets/icons/arrow.svg?react';
import { Link } from 'react-router-dom';

interface WidgetItemProps {
  icon: string;
  text: ReactNode;
  alt: string;
  link: string;
}

export const WidgetItem = ({ icon, alt, text, link }: WidgetItemProps) => {
  return (
    <Link
      to={link}
      style={{
        border: '1px solid #BDCCFF1A',
        backdropFilter: 'blur(10px)',
        background: '#C0CEFF12',
        padding: '20px',
        borderRadius: '16px',
        gap: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          width: '100%',
          maxWidth: '42px',
          height: '42px',
          objectFit: 'contain',
        }}
        src={icon}
        alt={alt}
      />
      {text}
      <IconArrow
        style={{
          width: '100%',
          maxWidth: '15px',
          height: '15px',
          objectFit: 'contain',
        }}
      />
    </Link>
  );
};
