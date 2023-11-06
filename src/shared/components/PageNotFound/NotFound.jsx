import { NotFoundWrapper } from "./NotFound.styled.jsx";

import { Header } from "../Header/Header";
import { ItalicTitle, Title } from "../Home/Home.styled.jsx";

function NotFound() {
  return (
    <>
      <Header />
      <NotFoundWrapper>
        <Title>
          <Title>
            Page <ItalicTitle>Not</ItalicTitle> Found
          </Title>
        </Title>
        <Title>Page you are looking for not found</Title>
      </NotFoundWrapper>
    </>
  );
}
export default NotFound;
