import { ReactNode } from "react"
import * as S from "./styles"

export type BoxProps = {
  children: ReactNode
}

const Box = ({ children }: BoxProps) => <S.Wrapper>{children}</S.Wrapper>

export default Box