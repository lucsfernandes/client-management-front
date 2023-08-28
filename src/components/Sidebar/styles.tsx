import { FileText } from '@styled-icons/feather';
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { animated } from 'react-spring'
import Link, { LinkProps } from 'next/link'
import { Accordion } from 'react-bootstrap'
import React from 'react';

type WrapperProps = {
  visible: boolean
}

const wrapperModifiers = {
  visible: () => css`
    left: 0;
  `
}

export const Wrapper = styled.aside<WrapperProps>`
  ${({ theme, visible }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 260px;
    background-color: ${theme.colors.neutral};
    position: fixed;
    top: 0;
    left: -100%;
    z-index: ${theme.layers.modal};
    transition: left ${theme.transition.effect.easeIn}
      ${theme.transition.duration.normal};

    ${visible && wrapperModifiers.visible()};

    ${media.greaterThan('medium')`
      position: static;
      left: 0;
    `}
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      justify-content: center;
    `}
  `}
`

export const Logo = styled.div`
  line-height: 0;
`

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    padding-top: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
  `}
`

export const Content = styled.div``

export const List = styled.ul`
  padding: 0;
  list-style: none;
`

export const ListItem = styled.li``

type MenuItemProps = {
  active?: boolean
}

const menuItemStyle = {
  base: (theme: DefaultTheme) => css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    line-height: 1;
    padding: ${theme.spacings.xxxsmall} 0.75rem ${theme.spacings.xxxsmall}
      1.25rem;
    transition: background-color ${theme.transition.effect.easeIn}
      ${theme.transition.duration.normal};

    &:hover,
    &:focus-visible {
      background-color: rgba(255, 255, 255, 0.08);
    }
  `,
  link: () => css`
    font-weight: normal;
    &:link {
      text-decoration: none;
    }
    &:active {
      text-decoration: none;
    }
  `,
  modifiers: {
    active: () => css`
      background-color: rgba(255, 255, 255, 0.08);
    `
  }
}

export const MenuItem = styled.button<MenuItemProps>`
  ${({ theme, active }) => css`
    ${menuItemStyle.base(theme)}
    ${active && menuItemStyle.modifiers.active()};
  `}
`

export const MenuLink = styled.a<MenuItemProps>`
  ${({ theme, active }) => css`
    ${menuItemStyle.base(theme)}
    ${menuItemStyle.link()}
  ${active && menuItemStyle.modifiers.active()};
  `}
`

type MenuLinkItemProps = {
  href: string
  active?: boolean
  title: string
  icon?: React.ReactNode
  children?: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const MenuLinkItem: React.FC<MenuLinkItemProps> = ({
  href,
  children,
  active,
  title,
  icon = <FileText size={24} color="#FFF" />,
  ...props
}) => {
  return (
    <Link as={href} href={href} passHref>
      <MenuLink active={active} {...props}>
        <IconWrapper>{icon}</IconWrapper>
        <MenuItemTitle>
          <MenuItemLabel>{title}</MenuItemLabel>
          {children ? (
            <MenuItemNotification>{children}</MenuItemNotification>
          ) : null}
        </MenuItemTitle>
      </MenuLink>
    </Link>
  )
}

export const IconWrapper = styled.div``

export const MenuItemLabel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const MenuItemTitle = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
  overflow: hidden;
`

export const MenuItemNotification = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.xsmall};
    width: 22px;
    height: 22px;
    background-color: ${theme.colors.primary};
    padding: 3px;
    border-radius: 50%;
  `}
`

export const Background = styled(animated.div)`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    background: rgba(0, 0, 0, 0.5);
    z-index: ${theme.layers.overlay};
  `}
`

export const CloseButton = styled.button`
  ${({ theme }) => css`
    outline: none;
    border: none;
    background-color: transparent;

    &:focus-visible {
      outline: 2px solid ${theme.colors.white};
    }
  `}
`

export const StyledAccordion = styled(Accordion)`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral};
    border: none;

    svg {
      color: white;
      stroke-width: 1px;
    }
  `}
`

export const StyledAccordionItem = styled(Accordion.Item)`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral};
    border: none;
  `}
`

export const StyledAccordionBody = styled(Accordion.Body)`
  padding: 0;
`

interface StyledAccordionToggleProps {
  isActive: boolean
}

export const StyledAccordionToggle = styled.button<StyledAccordionToggleProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${theme.spacings.xxxsmall} 0;
    background-color: ${theme.colors.neutral};
    color: white;
    font-weight: normal;
    border: none;

    padding: ${theme.spacings.xxxsmall} 0.75rem ${theme.spacings.xxxsmall}
      1.25rem;
    transition: background-color ${theme.transition.effect.easeIn}
      ${theme.transition.duration.normal};

    &:hover,
    &:focus-visible {
      background-color: rgba(255, 255, 255, 0.08);
    }

    span {
      display: inline-flex;
      gap: 1rem;
    }

    & > svg {
      transition: transform ${theme.transition.duration.normal};
      transform: ${isActive ? 'rotate(-180deg)' : ''};
      width: 24px;
      height: 24px;
    }
  `}
`
