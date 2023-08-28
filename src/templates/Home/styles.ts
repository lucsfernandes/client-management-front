import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    height: 100%;
  `}
`

export const Actions = styled.div`
  text-align: end;
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    justify-content: space-between;
    padding: ${theme.spacings.medium} ${theme.spacings.small} 0 ${theme.spacings.xsmall};
  `}
`