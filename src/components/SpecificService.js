import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function SpecificService({ specific_service, handleBooking }) {
  return (
    <div className="price-wrapper">
      <div className="price-title">
        <h5>{specific_service.name}</h5>

        {specific_service.description && <p>{specific_service.description}</p>}
      </div>
      <div className="price-cost-time">
        <p>
          <AiOutlineDollarCircle /> {specific_service.price}
        </p>
        <p>
          <BiTimeFive /> {specific_service.time}
        </p>
      </div>

      <div className="button-wrapper">
        <button
          onClick={() =>
            handleBooking({
              id: specific_service.id,
              name: specific_service.name,
              price: specific_service.price,
              status: true,
            })
          }
          className="price-button"
        >
          Book
        </button>
      </div>
    </div>
  );
}
