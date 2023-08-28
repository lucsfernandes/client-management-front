import { useRouter } from "next/router"
import { ReactNode, useState } from "react"
import * as S from "./styles"
import { Bell, FileText, LogOut, Menu, User } from "@styled-icons/feather"
import MediaMatch from "../MediaMatch"
import Sidebar from "../Sidebar"
import Header from "../Header"

export type BaseProps = {
  children: ReactNode
}

const Base = ({ children }: BaseProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  const goToUser = () => {
    router.push('/user')
  }

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.Topbar>
          <S.SidebarMenu id="user-menu-dropdown">
            <S.OpenMenuButton aria-label="Open sidebar">
              <Menu
                size={24}
                color="#FFF"
                onClick={() => setSidebarOpen(true)}
              />
            </S.OpenMenuButton>
          </S.SidebarMenu>
          <S.Dropdown>
            {showMenu && <S.Overlay onClick={() => setShowMenu(false)} />}
            <User
              style={{ cursor: 'pointer' }}
              size={24}
              color="#FFF"
              onClick={() => setShowMenu((state) => !state)}
            />
            <S.DropdownContent active={showMenu}>
              <S.UserName>Olá, Fulano de tal</S.UserName>
              <S.Divider />
              <S.Item
                onClick={() => goToUser()}
                id="user-information-menu-item"
              >
                <FileText size={24} color="#fff" />
                <span>Dados Cadastrais</span>
                <S.MenuItemNotification>
                  <Bell fill="white" />
                </S.MenuItemNotification>
              </S.Item>
              <S.Item onClick={() => goToUser()} id="sign-out-menu-item">
                <LogOut size={24} color="#fff" />
                <span>Sair</span>
              </S.Item>
            </S.DropdownContent>
          </S.Dropdown>
        </S.Topbar>
      </MediaMatch>
      <Sidebar visible={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div>
        <S.HeaderWrapper>
          <Header name='League Projects' />
        </S.HeaderWrapper>
        <S.Content>{children}</S.Content>
      </div>
    </S.Wrapper>
  )
}

export default Base