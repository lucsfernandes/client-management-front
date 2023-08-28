import styled, { css } from 'styled-components'

type DropdownContentProps = {
  active: boolean
}

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.primary};
    height: 53px;
  `}
`

export const UserMenu = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: row;
    justify-content: flex-start;
    color: ${theme.colors.white};
    padding-right: 12px;
  `}
`

export const UserMenuBtn = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 100%;
  padding: 6px;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

  &:first-child {
    padding-top: 17px;
  }

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
