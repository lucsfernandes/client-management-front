import { useRouter } from "next/router"
import { config, useTransition } from "react-spring"
import * as S from "./styles"
import Image from "next/image"
import MediaMatch from "../MediaMatch"
import { Home, X } from "@styled-icons/feather"

export type SidebarProps = {
  visible?: boolean
  onClose: () => void
}

const Sidebar = ({ visible = true, onClose }: SidebarProps) => {
  const router = useRouter()

  const transition = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      ...config.gentle,
      duration: 200
    }
  })

  return (
    <>
      <S.Wrapper
        visible={visible}
        aria-hidden={!visible}
        aria-label="Sidebar menu"
      >
        <S.Header>
          <S.Logo>
            <Image
              src="/vercel.svg"
              alt="Next logo"
              quality={100}
              draggable={false}
              width={74}
              height={21}
            />
          </S.Logo>
          <MediaMatch lessThan="medium">
            <S.CloseButton>
              <X size={24} color="#FFF" onClick={onClose} />
            </S.CloseButton>
          </MediaMatch>
        </S.Header>
        <S.Body>
          <S.List>
            <S.ListItem>
              <S.MenuLinkItem
                href="/"
                id="home-menu-item"
                active={router.asPath === '/'}
                title="Dashboard"
                icon={<Home size={24} color="#FFF" />}
              >
                Dashboard
              </S.MenuLinkItem>
            </S.ListItem>
          </S.List>
        </S.Body>
      </S.Wrapper>
    </>
  )
}

export default Sidebar