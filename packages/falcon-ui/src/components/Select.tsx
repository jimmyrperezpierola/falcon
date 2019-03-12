import { themed } from '../theme';

export const Select = themed({
  tag: 'select',

  defaultTheme: {
    select: {
      py: 'xs',
      px: 'sm',
      border: 'regular',
      borderRadius: 'medium',
      borderColor: 'secondaryDark',

      css: ({ theme }) => ({
        display: 'block',
        fontFamily: 'inherit',
        lineHeight: 'inherit',
        color: 'inherit',
        width: '100%',
        outline: 'none',
        position: 'relative',
        ':focus': {
          outline: 'none',
          borderColor: theme.colors.secondary,
          background: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi11cCI+PHBvbHlsaW5lIHBvaW50cz0iMTggMTUgMTIgOSA2IDE1Ij48L3BvbHlsaW5lPjwvc3ZnPg==) 99% 50% no-repeat;`
        },
        background: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1kb3duIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=) 99% 50% no-repeat;`,
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        appearance: 'none',
        '::-ms-expand': {
          display: 'none'
        }
      })
    }
  }
});

export const Option = themed({
  tag: 'option',

  defaultTheme: {
    option: {
      fontSize: 'sm',
      css: {
        fontFamily: 'inherit'
      }
    }
  }
});
