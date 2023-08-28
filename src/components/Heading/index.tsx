import * as S from "./styles"

export type HeadingProps = {
  children: React.ReactNode
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'huge'
  ellipsis?: boolean
}

const Heading = ({
  children,
  ellipsis,
  size = 'small',
  ...props
}: HeadingProps) => (
  <S.Wrapper size={size} ellipsis={ellipsis} {...props}>
    {children}
  </S.Wrapper>
)

export default Heading