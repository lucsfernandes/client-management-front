import { DefaultTheme, css, styled } from "styled-components"
import media from "styled-media-query"

type WrapperProps = {
  ellipsis?: boolean
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'huge'
}

const wrapperModifiers = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: 2rem;

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
  `,
  ellipsis: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `
}

export const Wrapper = styled.h2<WrapperProps>`
${({ size, ellipsis, theme }) => css`
  color: ${theme.colors.neutral};
  font-weight: ${theme.font.bold};
  ${ellipsis && wrapperModifiers.ellipsis}
  ${!!size && wrapperModifiers[size](theme)}

  ${media.greaterThan('medium')`
    font-weight: ${theme.font.heavy};
  `}
`}
`
