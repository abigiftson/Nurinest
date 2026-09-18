
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              mango: '#FFA726',
              mangoDeep: '#F57C00',
              papaya: '#FF6B4A',
              avocado: '#4E8752',
              leafLight: '#A3C982',
              cream: '#FFFDF7',
              sand: '#FBF6EE',
              walnut: '#2C1810',
              earthLight: '#5C4033',
              berry: '#E64A19',
            }
          },
          fontFamily: {
            display: ['Fredoka', 'sans-serif'],
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          keyframes: {
            floatSlow: {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-14px) rotate(3deg)' }
            },
            floatReverse: {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(12px) rotate(-4deg)' }
            },
            wiggle: {
              '0%, 100%': { transform: 'rotate(-3deg)' },
              '50%': { transform: 'rotate(3deg)' }
            }
          },
          animation: {
            'float': 'floatSlow 6s ease-in-out infinite',
            'float-rev': 'floatReverse 7s ease-in-out infinite',
            'wiggle': 'wiggle 2s ease-in-out infinite'
          },
          boxShadow: {
            'soft': '0 12px 35px -8px rgba(44, 24, 16, 0.08)',
            'warm': '0 20px 45px -12px rgba(255, 107, 74, 0.22)',
            'pouch': '0 25px 50px -15px rgba(78, 135, 82, 0.25)',
          }
        }
      }
    }