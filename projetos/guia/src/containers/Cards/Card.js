export default function Card({ children, card, ...props }) {
  return (
    <div {...props}>
      <img
        alt={card.name}
        src={
          !card.image_uris
            ? card.card_faces[0].image_uris.small
            : card.image_uris.small
        }
      />
      {children}
    </div>
  );
}
