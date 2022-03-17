export default function Airline(props) {
  return (
    <div>
      <div className="tile-info">
        <div className="logo">
          <img
            src={"https://www.kayak.com" + props.logoURL}
            alt="airline logo"
          />
        </div>
        <div className="airline-title">
          <h6>{props.name}</h6>
        </div>
        {props.moreDetails && (
          <div>
            <p>{props.alliance}</p>
            <p>{props.phone}</p>
            <a href={props.site} target="_blank" rel="noopener noreferrer">
              {props.site}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
