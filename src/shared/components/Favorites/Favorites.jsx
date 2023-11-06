import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usersRef, data } from "../../../../config";
import { ref, onValue, child } from "firebase/database";
import {
  LoadMoreButton,
  Wrapper,
  WrapperCard,
  WrapperFavorites,
} from "../PsychologistsList/PsychologistsList.styled";
import Card from "../Card/Card";
import { ItalicTitle, Title } from "../Home/Home.styled";

function FavoritesList() {
  const userId = useSelector((state) => state.auth.user.uid);
  const [favoritePsychologists, setFavoritePsychologists] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [psychologists, setPsychologistsData] = useState([]);
  const [psychologistsDataKey, setPsychologistsDataKey] = useState([]);

  useEffect(() => {
    const psychologistsRef = ref(data, "psychologists");

    onValue(psychologistsRef, (snapshot) => {
      if (snapshot.exists()) {
        const psychologistsData = snapshot.val();
        setPsychologistsData(Object.values(psychologistsData));
        setPsychologistsDataKey(Object.keys(psychologistsData));
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      const userRef = child(usersRef, userId);
      const favoritePsychologistsRef = child(userRef, "favoritePsychologists");

      onValue(favoritePsychologistsRef, (snapshot) => {
        const data = snapshot.val() || [];
        setFavoritePsychologists(data);
      });
    }
  }, [userId]);

  const commonPsychologists = psychologists.map((psychologist, index) => ({
    psychologist: psychologist,
    psychologistsKey: psychologistsDataKey[index],
    index,
  }));

  const favoritePsychologistsArray = favoritePsychologists.map((key) => {
    return commonPsychologists.find(
      (psychologist) => psychologist.psychologistsKey === key
    );
  });

  const loadMoreCards = () => {
    setCardsToShow(cardsToShow + 3);
  };
  return (
    <Wrapper>
      {favoritePsychologistsArray.length > 0 ? (
        <ul>
          {favoritePsychologistsArray
            .slice(0, cardsToShow)
            .map((psychologist, index) => (
              <WrapperCard key={index}>
                <Card psychologist={psychologist} index={index} />
              </WrapperCard>
            ))}
        </ul>
      ) : (
        <WrapperFavorites>
          <Title>
            Add your <ItalicTitle>favorites</ItalicTitle> psychologists
          </Title>
        </WrapperFavorites>
      )}
      {cardsToShow < favoritePsychologistsArray.length && (
        <LoadMoreButton onClick={loadMoreCards}>Load More</LoadMoreButton>
      )}
    </Wrapper>
  );
}

export default FavoritesList;
