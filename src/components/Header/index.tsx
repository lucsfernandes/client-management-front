import { useRouter } from "next/router"
import { useState } from "react"
import * as S from "./styles"
import { Bell, FileText, LogOut, Menu } from "@styled-icons/feather"

type HeaderProps = {
  name: string
}

const Header = (props: HeaderProps) => { 
  const { name } = props
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  const goToUser = () => {
    router.push('/user')
  }

  return (
    <S.Header>
      <S.Dropdown>
        {showMenu && <S.Overlay onClick={() => setShowMenu(false)} />}
        <S.UserMenu aria-label="Open user menu">
          <span>Olá, {name}</span>
          <S.UserMenuBtn onClick={() => setShowMenu((state) => !state)}>
            <Menu style={{ cursor: 'pointer' }} size={24} color="#fff" />
          </S.UserMenuBtn>
        </S.UserMenu>
        <S.DropdownContent active={showMenu}>
          <S.Item onClick={() => goToUser()}>
            <FileText size={24} color="#fff" />
            <span>Dados Cadastrais</span>
            <S.MenuItemNotification>
              <Bell fill="white" />
            </S.MenuItemNotification>
          </S.Item>
          <S.Item onClick={() => goToUser()}>
            <LogOut size={24} color="#fff" />
            <span>Sair</span>
          </S.Item>
        </S.DropdownContent>
      </S.Dropdown>
    </S.Header>
  )

}

export default Header