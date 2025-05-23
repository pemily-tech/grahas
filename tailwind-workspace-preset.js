module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        grey: {
          none: 'rgba(0, 0, 0, 0)',
          light: 'rgba(0, 0, 0, 0.2)',
          shade: 'rgba(0, 0, 0, 0.5)',
          bg: '#F0EBE3',
          'dark-shade': '#a3a5a7',
          cream: '#FAF1E5',
        },
        dark: {
          bg: '#222831',
          drawer: '#31363c',
          1: '#444444',
          2: '#222B45',
          3: '#000000',
        },
        green: {
          dark: '#1E8449',
        },
        red: {
          dark: '#922B21',
          1: '#B03A2E',
          2: '#F2D7D5',
        },
      },
      fontSize: {
        8: '8px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        28: '28px',
        32: '32px',
        42: '42px',
        90: '90px',
      },
      lineHeight: {
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        21: '21px',
        24: '24px',
        25: '25px',
        28: '28px',
        30: '30px',
        32: '32px',
      },
      spacing: {
        1: '1px',
        1.5: '1.5px',
        2: '2px',
        2.5: '2.5px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        19: '19px',
        20: '20px',
        21: '21px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        35: '35px',
        36: '36px',
        40: '40px',
        42: '42px',
        44: '44px',
        47: '47px',
        48: '48px',
        50: '50px',
        54: '54px',
        56: '56px',
      },
      transitionDuration: {
        0.3: '0.3s',
        0.5: '0.5s',
        0.6: '0.6s',
        0.7: '0.7s',
        1: '1s',
      },
      transitionTimingFunction: {
        'smooth-header': 'cubic-bezier(0.3, 0, 0.3, 1)',
      },
      animation: {
        headerAnimation:
          'headerAnimate 0.8s cubic-bezier(0.3, 0, 0.3, 1) 0s forwards',
        'drip-expand': 'expand 300ms ease-in forwards',
        'drip-expand-large': 'expand-large 600ms ease-in forwards',
        'slide-up-down': 'slide-move-up-down 4s infinite both',
      },
      keyframes: {
        headerAnimate: {
          '0%': {
            transform: 'translateZ(0) translateY(-100px)',
          },
          '100%': {
            transform: 'translateZ(0) translateY(0px)',
          },
        },
        expand: {
          '0%': {
            opacity: 0,
            transform: 'scale(1)',
          },
          '30%': {
            opacity: 1,
          },
          '80%': {
            opacity: 0.5,
          },
          '100%': {
            transform: 'scale(30)',
            opacity: 0,
          },
        },
        'expand-large': {
          '0%': {
            opacity: 0,
            transform: 'scale(1)',
          },
          '30%': {
            opacity: 1,
          },
          '80%': {
            opacity: 0.5,
          },
          '100%': {
            transform: 'scale(96)',
            opacity: 0,
          },
        },
        'slide-move-up-down': {
          from: {
            transform: 'translateY(-6px)',
          },
          '50%': {
            transform: 'translateY(6px)',
          },
          top: {
            transform: 'translateY(-6px)',
          },
        },
      },
      zIndex: {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
      skew: {
        10: '10deg',
      },
      letterSpacing: {
        0.05: '0.05em',
        0.07: '0.07em',
        '0.10': '0.10em',
      },
      borderWidth: {
        2: '2px',
      },
      borderRadius: {
        4: '4px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
      },
      boxShadow: {
        1: '5px 5px rgba(0, 0, 0, 0.2)',
        2: '6px 14px 16px -12px rgba(0, 0, 0, 0.1)',
        dropdown: '0px 4px 8px rgba(0, 0, 0, 0.08)',
        base: '0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)',
        base2:
          '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
        base3: '16px 10px 40px rgba(15, 23, 42, 0.22)',
        card1: '0 .1875rem .75rem 0 rgba(47,43,61,.14)',
      },
      blur: {
        10: '10px',
      },
      transformOrigin: {
        'top-center': 'top center',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-textshadow'),
    require('@tailwindcss/line-clamp'),
  ],
};
