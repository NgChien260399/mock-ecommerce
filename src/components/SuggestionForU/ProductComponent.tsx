import CardComponent from "../HotDealComponent/CardComponent";
import { cardData } from "./CardData";

const SuggestionForUProductComponent = () => {
  
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"space-between"
      }}
    >
      {cardData.map((item, index) => (
        <div key={index}>
          <CardComponent 
            url={item.url}
            content={item.content}
            giaTien={item.giaTien}
            giaGoc={item.giaGoc}
            />
        </div>
      ))}
    </div>
  );
}

// export default SuggestionForUProductComponent;