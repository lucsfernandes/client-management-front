import { css, styled } from "styled-components"
import media from "styled-media-query"

type DropdownContentProps = {
  active: boolean
}

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 260px 1fr;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - 2rem - 53px);
    width: 100%;
    padding: ${theme.spacings.medium};
    overflow-y: auto;
  `}
`

export const UserMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  justify-content: flex-start;
  color: #FFF;
`

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const Topbar = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall};
  `}
`

export const HeaderWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const OpenMenuButton = styled.button`
  ${({ theme }) => css`
    outline: none;
    border: none;
    background-color: transparent;

    &:focus-visible {
      outline: 2px solid ${theme.colors.white};
    }
  `}
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  color: transparent;
  width: 100vw;
  height: 100vh;
  z-index: 80;
`

export const DropdownContent = styled.div<DropdownContentProps>`
  ${({ theme, active }) => css`
    display: none;
    position: absolute;
    z-index: 100;
    right: 0;
    border-radius: 10px;
    border-top: 10px;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: ${theme.colors.neutral};
    color: ${theme.colors.white};

    ${active &&
    css`
      display: block;
    `}
  `}
`

export const Item = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 10px 12px;
  gap: 10px;
  flex-direction: row;

  &:last-child {
    padding-bottom: 17px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`

export const MenuItemNotification = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 22px;
    height: 22px;
    background-color: ${theme.colors.primary};
    padding: 3px;
    border-radius: 50%;
  `}
`

export const UserName = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 17px 12px;
  gap: 10px;
  flex-direction: row;
`

export const Divider = styled.div`
  border-top: 1px solid #bbb;
  width: 80%;
  margin: 0 auto;
  border-radius: 10px;
`

