import { Components, Theme } from '@mui/material';

import ArrowIcon from '@/shared/assets/icons/Arrow-select.svg?react';

export const componentsConfig: Components<Omit<Theme, 'components'>> = {
  MuiTypography: {
    styleOverrides: {
      root: {
        color: '#fff',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: 'Inter-Bold',
        padding: '13.5px 20px',
        fontSize: '1.25rem',
        fontWeight: 600,
        textTransform: 'none',
        lineHeight: '100%',
        borderRadius: '10px',
        background:
          'linear-gradient(to bottom, rgba(90, 161, 239, 1), rgba(72, 117, 185, 1))',
        backgroundSize: '100% 200%',
        backgroundPosition: 'top',
        color: 'var(--light-btn-color)',
        border: 'none',
        outline: 'none',
        transition: 'all .5s',
        marginTop: '0',
        boxShadow: `0px 12px 36px rgba(51, 84, 134, 0.4)`,
        '&:active': {
          transform: 'scale(1.2)',
        },
        '&:hover': {
          outline: 'none',
          backgroundPosition: 'bottom',
          border: 'none',
          transform: 'scale(1.03)',
        },
        '&:focus-visible': {
          outline: 'none',
          border: 'none',
        },
        '&:focus': {
          outline: 'none',
          border: 'none',
        },
        '&.Mui-disabled': {
          background: '#3D414E4D',
          color: '#696E80',
          boxShadow: 'none',
          fontFamily: 'Inter-SemiBold',
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        color: 'var(--primary-color)',
        transition: 'all .5s',
        fontSize: '1.25rem',
        '&:hover': {
          color: 'var(--danger-color)',
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        fontWeight: 400,
        padding: '12px 14px',
        borderRadius: '16px',
        border: '1px solid #BDCCFF1A',
        backdropFilter: 'blur(10px)',
        background: '#C0CEFF12',
        outline: 'none',

        '&:hover': {
          border: '1px solid transparent',
          outline: 'none',
        },

        '&.Mui-focused': {
          border: '1px solid transparent',
          boxShadow: 'none',
          outline: 'none',
        },
      },
      select: {
        padding: '0',
        border: 'none',
        outline: 'none',
        background: 'transparent',
      },

      icon: {
        width: '20px',
        height: '20px',
        color: '#DBE2E9',
        right: '14px',
      },
    },
    defaultProps: {
      IconComponent: ArrowIcon,
    },
  },

  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 60,
        height: 28,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
      },
      switchBase: {
        padding: 2,
        transition: 'all .3s ease',
        background:
          'linear-gradient(to bottom, rgba(90, 161, 239, 1), rgba(72, 117, 185, 1))',
        '&.Mui-checked': {
          transform: 'translateX(30px)',
          color: '#fff',
          '& + .MuiSwitch-track': {
            background:
              'linear-gradient(to bottom, rgba(90, 161, 239, 1), rgba(72, 117, 185, 1))',
            opacity: 1,
            border: 0,
          },
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.3,
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          background:
            'linear-gradient(to bottom, rgba(90, 161, 239, 1), rgba(72, 117, 185, 1))',
        },
      },
      thumb: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      track: {
        borderRadius: 34 / 2,
        backgroundColor: 'var(--dark-gray)',
        opacity: 1,
        transition: 'background-color 0.3s',
        background: 'var(--primary-text-color)',
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: '16px',
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
        padding: '4px',
        border: '1px solid #BDCCFF1A',
        marginTop: '4px',
      },
      list: {
        padding: '0',

        '& .MuiMenuItem-root': {
          fontSize: '1rem',
          margin: '2px 0',
          borderRadius: '12px',
          transition: 'background 0.2s ease',
          '&:hover': {
            backgroundColor: '#C0CEFF12',
          },
          '&.Mui-selected': {
            backgroundColor: '#C0CEFF12',
          },
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        transition: 'all .5s',
        fontWeight: 400,
        outline: 'none',
        border: 'none',
        padding: '0',

        '& .MuiOutlinedInput-root': {
          backgroundColor: '#1E1E2A',
          color: '#FFFFFF',
          borderRadius: '10px',
          padding: '0',
          transition: 'all .5s',
          '& .MuiOutlinedInput-input': {
            color: '#FFFFFF',
            border: 'none',
            padding: '13px 13px 13px 0',
            '&::placeholder': {
              color: '#D4E7FF66',
              fontFamily: 'Inter-Regular',
              fontWeight: 400,
              lineHeight: '100%',
              opacity: 1,
              padding: '0',
            },
          },

          '& fieldset': {
            border: '1px solid transparent',
            transition: 'all 0.3s ease',
          },

          '&:hover fieldset': {
            border: '1px solid transparent',
            boxShadow: '0 0 8px rgba(107, 174, 255, 0.6)',
          },

          '&.Mui-focused fieldset': {
            border: '1px solid #6BAEFF',
            boxShadow: '0 0 12px rgba(107, 174, 255, 0.8)',
          },

          '&.Mui-disabled': {
            backgroundColor: '#2C2C3A',
            '& .MuiOutlinedInput-input': {
              color: '#D4E7FF66',
              '&::placeholder': {
                color: '#D4E7FF66',
              },
            },
          },
        },
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      root: {
        border: '1px solid #BDCCFF1A',
        borderRadius: '16px',
        padding: '12px',
        backdropFilter: 'blur(40px)',
        width: 'fit-content',
        height: '100%',

        '& .MuiTabs-list': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        },
        '& .MuiTabs-indicator': {
          backgroundColor: 'transparent',
          height: '0',
        },
      },
      flexContainer: {
        justifyContent: 'space-between',
        width: '100%',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        color: '#DBE2E999',
        border: '1px solid transparent',
        background: '#D7E0FF0D',
        padding: '12px 14px',
        outline: 'transparent',
        borderRadius: '8px',
        width: '100%',
        '&.Mui-selected': {
          borderRadius: '8px',
          border: '1px solid transparent',
          background:
            'linear-gradient(to bottom, rgba(90, 161, 239, 1), rgba(72, 117, 185, 1))',
          backgroundSize: '100% 200%',
          backgroundPosition: 'top',
          color: '#FFFFFF',
          outline: 'transparent',
          '&:hover': {
            color: '#DBE2E999',
          },
          '&:focus-visible': {
            outline: 'none',
          },
          '&:focus': {
            outline: 'none',
          },
        },
        '&:focus-visible': {
          outline: 'none',
        },
        '&:focus': {
          outline: 'none',
        },
      },
    },
  },

  MuiTable: {
    styleOverrides: {
      root: {
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        background: '#C0CEFF12',
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        background: '#C0CEFF12',
        border: '0',
        backdropFilter: 'blur(40px)',
        '& .MuiTableCell-root': {
          color: '#DCE0ED',
          fontWeight: 600,
          fontSize: '14px !important',
          padding: '14px 16px',
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        color: '#DBE2E999',
        fontSize: '0.95rem',
        padding: '14px 16px',
        height: 'fit-content',
        borderRight: '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        verticalAlign: 'top',
        border: '0',
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      },
      notchedOutline: {
        border: 'none',
      },
    },
  },
};
