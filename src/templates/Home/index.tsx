import Box from "@/components/Box";
import * as S from "./styles"
import Heading from "@/components/Heading";
import Base from "@/components/Base";

const Home = () => {
  return (
    <Base>
      <Box>
        <S.Header>
          <Heading size="large">Clientes cadastrados</Heading>
        </S.Header>
      </Box>
    </Base>
  )
}

export default Home