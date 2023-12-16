function AccomodationCard(props) {
  const { id, title, description, location_id, departement, price } = props;

  return (
    <div key={id} className="relative">
      <div className="container aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
        <img
          src={`http://localhost:3000/public/getImage/${id}`}
          alt={title}
          className="relative h-full w-full object-cover object-center lg:h-full lg:w-full "
        />
        <div className="overlay z-10">
          <p className="text">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm rounded-md text-gray-700">
            <a>
              <span aria-hidden="true" className="absolute inset-0" />
              {departement}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{title}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price} €</p>
      </div>
    </div>
  );
}

export default AccomodationCard;
