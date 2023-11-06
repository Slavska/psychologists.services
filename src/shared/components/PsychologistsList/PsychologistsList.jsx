import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { data } from "../../../../config";
import {
  LoadMoreButton,
  Wrapper,
  WrapperCard,
} from "./PsychologistsList.styled";

import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateFavoritePsychologists } from "../../../redux/auth/authSlice";
import { selectFavorites } from "../../../redux/auth/authSelectors";
import Card from "../Card/Card";
import Filtered from "../Filtered/Filtered";

function PsychologistsList() {
  const [psychologists, setPsychologists] = useState([]);
  const [psychologistsKey, setPsychologistsKey] = useState([]);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [sortOption, setSortOption] = useState("default");
  const [sortOptionLabel, setSortOptionLabel] = useState("Show all");
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const favoritePsychologists = useSelector(selectFavorites);

  useEffect(() => {
    const psychologistsRef = ref(data, "psychologists");

    onValue(psychologistsRef, (snapshot) => {
      if (snapshot.exists()) {
        const psychologistsData = snapshot.val();
        setPsychologists(Object.values(psychologistsData));
        setPsychologistsKey(Object.keys(psychologistsData));
      }
    });
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(updateFavoritePsychologists(favoritePsychologists));
    }
  }, [isLoggedIn, favoritePsychologists]);

  const loadMoreCards = () => {
    setCardsToShow(cardsToShow + 3);
  };

  const comparePsychologists = (a, b) => {
    if (sortOption === "A-Z") {
      return a.psychologist.name.localeCompare(b.psychologist.name);
    } else if (sortOption === "price-low-to-high") {
      return a.psychologist.price_per_hour - b.psychologist.price_per_hour;
    } else if (sortOption === "price-high-to-low") {
      return b.psychologist.price_per_hour - a.psychologist.price_per_hour;
    } else if (sortOption === "popularity-high-to-low") {
      return b.psychologist.rating - a.psychologist.rating;
    } else if (sortOption === "popularity-low-to-high") {
      return a.psychologist.rating - b.psychologist.rating;
    } else if (sortOption === "Z-A") {
      return b.psychologist.name.localeCompare(a.psychologist.name);
    } else {
      return 0;
    }
  };
  const sortedPsychologists = psychologists
    .map((psychologist, index) => ({
      psychologist,
      psychologistsKey: psychologistsKey[index],
      index,
    }))
    .sort(comparePsychologists);

  function handleSortChange(option) {
    setSortOption(option.value);
    setSortOptionLabel(option.label);
  }

  return (
    <Wrapper>
      <Filtered
        handleSortChange={handleSortChange}
        sortOptionLabel={sortOptionLabel}
        sortOption={sortOption}
      />
      <ul>
        {sortedPsychologists
          .slice(0, cardsToShow)
          .map((psychologist, index) => (
            <WrapperCard key={psychologist.psychologistsKey}>
              <Card psychologist={psychologist} index={index} />
            </WrapperCard>
          ))}
      </ul>
      {cardsToShow < sortedPsychologists.length && (
        <LoadMoreButton onClick={loadMoreCards}>Load More</LoadMoreButton>
      )}
    </Wrapper>
  );
}

export default PsychologistsList;
