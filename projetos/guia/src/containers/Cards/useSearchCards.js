import useFetchData from "../../hooks/useFetchData";

export default function useSearchCards(searchTerm) {
  const { data, loading, error } = useFetchData(
    `https://api.scryfall.com/cards/search?unique=art&q=name:${searchTerm}`
  );

  let cards = data;

  if (data) {
    cards = data?.status === 404 ? [] : data.data;
  }

  return { cards, loading, error };
}
