import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		xs: '320px',
  		sm: '480px',
  		md: '768px',
  		lg: '1050px',
  		xl: '1280px',
  		'2xl': '1440px',
  		mxl: {
  			max: '1390px'
  		},
  		mlg: {
  			max: '1049px'
  		},
  		mmlg: {
  			max: '976px'
  		},
  		mmd: {
  			max: '768px'
  		},
  		msm: {
  			max: '639px'
  		},
  		mxs: {
  			max: '480px'
  		},
  		mxxs: {
  			max: '400px'
  		},
  		mxxss: {
  			max: '375px'
  		},
  		mxxssw: {
  			max: '355px'
  		},
  		mxxxs: {
  			max: '320px'
  		},
  		'ms-height': {
  			raw: '(max-height: 700px)'
  		},
  		'mxl-height': {
  			raw: '(max-height: 850px)'
  		}
  	},
  	fontFamily: {
  		satoshi: [
  			'var(--font-satoshi)',
                ...fontFamily.sans
            ]
  	},
  	extend: {
  		backgroundImage: {},
  		fontSize: {
  			'h-xxl': [
  				'3rem',
  				{
  					lineHeight: '48px',
  					fontWeight: 700
  				}
  			],
  			'h-xl': [
  				'2rem',
  				{
  					lineHeight: '40px',
  					fontWeight: 700
  				}
  			],
  			'h-l': [
  				'1.5rem',
  				{
  					lineHeight: '24px',
  					fontWeight: 700
  				}
  			],
  			'h-m': [
  				'1.125rem',
  				{
  					lineHeight: '24px',
  					fontWeight: 700
  				}
  			],
  			'h-s': [
  				'1rem',
  				{
  					lineHeight: '24px',
  					fontWeight: 700
  				}
  			],
  			'h-xs': [
  				'.75rem',
  				{
  					lineHeight: '15.96px',
  					fontWeight: 700
  				}
  			],
  			'p-xxl': [
  				'1.5rem',
  				{
  					lineHeight: '32px',
  					fontWeight: 400
  				}
  			],
  			'p-xl': [
  				'1.1875rem',
  				{
  					lineHeight: '28px',
  					fontWeight: 400
  				}
  			],
  			'p-l': [
  				'1rem',
  				{
  					lineHeight: '16px',
  					fontWeight: 400
  				}
  			],
  			'p-m': [
  				'0.875rem',
  				{
  					lineHeight: '20.02px',
  					fontWeight: 400
  				}
  			],
  			'p-s': [
  				'0.75rem',
  				{
  					lineHeight: '15.96px',
  					fontWeight: 400
  				}
  			],
  			'c-xxl': [
  				'1.5rem',
  				{
  					lineHeight: '24px',
  					fontWeight: 700
  				}
  			],
  			'c-xl': [
  				'1.1875rem',
  				{
  					lineHeight: '19px',
  					fontWeight: 700
  				}
  			],
  			'c-l': [
  				'1rem',
  				{
  					lineHeight: '24px',
  					fontWeight: 700
  				}
  			],
  			'c-m': [
  				'0.875rem',
  				{
  					lineHeight: '15.96px',
  					fontWeight: 400
  				}
  			],
  			'c-s': [
  				'0.75rem',
  				{
  					lineHeight: '12px',
  					fontWeight: 400
  				}
  			]
  		},
  		colors: {
  			'cod-gray': {
  				'50': '#f6f6f6',
  				'100': '#e7e7e7',
  				'200': '#d1d1d1',
  				'300': '#b0b0b0',
  				'400': '#888888',
  				'500': '#6d6d6d',
  				'600': '#5d5d5d',
  				'700': '#4f4f4f',
  				'800': '#454545',
  				'900': '#3d3d3d',
  				'950': '#121212'
  			},
  			black: {
  				'50': '#f6f6f6',
  				'100': '#e7e7e7',
  				'200': '#d1d1d1',
  				'300': '#b0b0b0',
  				'400': '#888888',
  				'500': '#6d6d6d',
  				'600': '#5d5d5d',
  				'700': '#4f4f4f',
  				'800': '#454545',
  				'900': '#3d3d3d',
  				'950': '#0000008f'
  			},
  			midnight: {
  				'50': '#e9f9ff',
  				'100': '#cef2ff',
  				'200': '#a7eaff',
  				'300': '#6be1ff',
  				'400': '#26cbff',
  				'500': '#00a5ff',
  				'600': '#007bff',
  				'700': '#0060ff',
  				'800': '#0052e6',
  				'900': '#004bb3',
  				'950': '#001735'
  			},
  			'tahiti-gold': {
  				'50': '#fef7ec',
  				'100': '#fbeaca',
  				'200': '#f6d391',
  				'300': '#f1b758',
  				'400': '#ee9d31',
  				'500': '#e78020',
  				'600': '#cc5b13',
  				'700': '#a93e14',
  				'800': '#8a3116',
  				'900': '#712a16',
  				'950': '#411307'
  			},
  			fiord: {
  				'50': '#f6f7f9',
  				'100': '#eceff2',
  				'200': '#d5dbe2',
  				'300': '#b0bbc9',
  				'400': '#8696aa',
  				'500': '#677990',
  				'600': '#526277',
  				'700': '#475467',
  				'800': '#3a4452',
  				'900': '#343b46',
  				'950': '#22272f'
  			},
  			'storm-gray': {
  				'50': '#f6f7f9',
  				'100': '#edeef1',
  				'200': '#d7dae0',
  				'300': '#b3b9c6',
  				'400': '#8a94a6',
  				'500': '#667085',
  				'600': '#565e73',
  				'700': '#464c5e',
  				'800': '#3d424f',
  				'900': '#363a44',
  				'950': '#24262d'
  			},
			'green-haze': {
			'50': '#eefbf4',
			'100': '#d7f4e4',
			'200': '#b2e8cd',
			'300': '#80d5af',
			'400': '#4bbc8e',
			'500': '#29a174',
			'600': '#1a815d',
			'700': '#15674c',
			'800': '#13523d',
			'900': '#114334',
			'950': '#08261e',
		},
				'gray': {
			'50': '#f6f6f6',
			'100': '#e7e7e7',
			'200': '#d1d1d1',
			'300': '#b0b0b0',
			'400': '#808080',
			'500': '#6d6d6d',
			'600': '#5d5d5d',
			'700': '#4f4f4f',
			'800': '#454545',
			'900': '#3d3d3d',
			'950': '#262626',
		},
			

  			'text-default': 'var(--color-text-default)',
  			'text-light': 'var(--color-text-light)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		boxShadow: {
  			auth: '0 0 1px 0 #091E424F, 0 8px 12px 0 #091E424F'
  		},
  		dropShadow: {
  			'image-drop-shadow': '-43px 46px 60px 0px #091E424F'
  		},
  		animation: {
  			move: 'move 2s linear infinite',
  			bxSpin: 'bxSpin 0.5s linear infinite',
  			shadow: 'shadow 0.5s linear infinite'
  		},
  		keyframes: {
  			move: {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(calc(5 / 2 * 100%))'
  				}
  			},
  			bxSpin: {
  				'17%': {
  					borderBottomRightRadius: '3px'
  				},
  				'25%': {
  					transform: 'translateY(9px) rotate(22.5deg)'
  				},
  				'50%': {
  					transform: 'translateY(18px) scale(1, .9) rotate(45deg)',
  					borderBottomRightRadius: '40px'
  				},
  				'75%': {
  					transform: 'translateY(9px) rotate(67.5deg)'
  				},
  				'100%': {
  					transform: 'translateY(0) rotate(90deg)'
  				}
  			},
  			shadow: {
  				'0%, 100%': {
  					transform: 'scale(1, 1)'
  				},
  				'50%': {
  					transform: 'scale(1.2, 1)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    // eslint-disable-next-line
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".tab-box-shadow": {
          "box-shadow": "0px 1px px 0px #EAECF0",
        },
        ".page-tab-box-shadow": {
          "box-shadow": "0px 2px 6px 0px #c1c7d066",
        },
        ".dropdown-menu-box-shadow": {
          "box-shadow": "0px 0px 1px 0px #091e424f, 0px 3px 5px 0px #091e4233",
        },
        ".sticky-column-shadow": {
          "box-shadow": "0px -1px 0px 0px #DDDDDD",
        },
        ".hideScrollBar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".hideScrollBar::-webkit-scrollbar": {
          display: "none", // Hide scrollbar in Webkit browsers
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
      require("tailwindcss-animate")
],
};
export default config;
