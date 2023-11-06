import {
  Title,
  Text,
  Wrapper,
  ItalicTitle,
  SvgArrow,
  UserPicture,
  WrapperMain,
  WrapperPicture,
  SvgQuestion,
  DivQuestion,
  DivUsers,
  SvgUsers,
  DivCheck,
  SvgCheck,
  DivCheckCard,
  TextCheck,
  NumberCheck,
  TextDiv,
  SubmitButton,
} from "./Home.styled";
import icon from "../../images/symbol-defs.svg";
import { useNavigate } from "react-router-dom";

import welcome1x from "../../images/welcome1x.jpg";
import welcome2x from "../../images/welcome2x.jpg";
import welcome1xWebp from "../../images/welcome1xwebp.webp";
import welcome2xWebp from "../../images/welcome2xwebp.webp";

function Home() {
  const navigate = useNavigate();
  return (
    <WrapperMain>
      <Wrapper>
        <Title>
          The road to the <ItalicTitle>depths</ItalicTitle> of the human soul
        </Title>
        <Text>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </Text>
        <SubmitButton type="submit" onClick={() => navigate("/psychologists")}>
          Get started
          <SvgArrow>
            <use href={icon + "#icon-arrow"}></use>
          </SvgArrow>
        </SubmitButton>
      </Wrapper>
      <WrapperPicture>
        <UserPicture>
          <source
            srcSet={welcome2xWebp}
            type="image/webp"
            media="(min-resolution: 2dppx)"
          />
          <source srcSet={welcome1xWebp} type="image/webp" />
          <source srcSet={welcome2x} media="(min-resolution: 2dppx)" />
          <source srcSet={welcome1x} />
          <img src={welcome1x} alt="User" />
        </UserPicture>
        <DivQuestion>
          <SvgQuestion>
            <use href={icon + "#icon-question"}></use>
          </SvgQuestion>
        </DivQuestion>
        <DivUsers>
          <SvgUsers>
            <use href={icon + "#icon-users"}></use>
          </SvgUsers>
        </DivUsers>
        <DivCheckCard>
          <DivCheck>
            <SvgCheck>
              <use href={icon + "#icon-check"}></use>
            </SvgCheck>
          </DivCheck>
          <TextDiv>
            <TextCheck>Experienced psychologists</TextCheck>
            <NumberCheck>15,000</NumberCheck>
          </TextDiv>
        </DivCheckCard>
      </WrapperPicture>
    </WrapperMain>
  );
}
export default Home;
