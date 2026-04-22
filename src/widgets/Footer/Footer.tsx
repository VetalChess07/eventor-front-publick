import { Box, Link as MuiLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { memo } from 'react';

export const Footer = memo(() => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: '20px',
        gap: '12px',
        mt: { xs: '84px', sm: '64px' },
        backgroundColor: 'transparent',
        '@media (max-width:780px)': {
          gap: '25px',
          padding: '22px 39px',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          color: 'var(--color-text-footer)',
        }}
      >
        <Typography variant="body1" sx={{ color: 'var(--color-text-footer)' }}>
          © 2026 eventor
        </Typography>
        <Typography component="span" sx={{ color: 'var(--color-text-footer)' }}>
          ∙
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--color-text-footer)' }}>
          Все права защищены
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          color: 'var(--color-text-footer)',
        }}
      >
        <MuiLink
          component={Link}
          to="https://donatov.net/privacy"
          sx={{
            color: 'var(--color-text-footer)',
            fontSize: '0.875rem',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              color: '#4875b9',
            },
          }}
        >
          Политика конфиденциальности
        </MuiLink>
        <MuiLink
          component={Link}
          to="https://donatov.net/eula"
          sx={{
            color: 'var(--color-text-footer)',
            fontSize: '0.875rem',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              color: '#4875b9',
            },
          }}
        >
          Обработка персональных данных
        </MuiLink>
      </Box>
    </Box>
  );
});
