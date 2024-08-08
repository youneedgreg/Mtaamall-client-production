return (
  <div className="shop-card" onClick={() => navigate(`../properties/${card.id}`)}>
    <div className="shop-card-header">
      <h2>{truncate(card.title, { length: 15 })}</h2>
      <p className="shop-card-category">{truncate(card.category, { length: 90 })}</p>
    </div>
    <div className="shop-card-images">
      {card.images && card.images.length > 0 && (
        <>
          <img src={card.images[currentImageIndex]} alt="property" />
          {card.images.length > 1 && (
            <>
              <button className="prev" onClick={handlePrevImage}>&#10094;</button>
              <button className="next" onClick={handleNextImage}>&#10095;</button>
            </>
          )}
        </>
      )}
    </div>
    <div className="shop-card-details">
      <div className="shop-card-info">
        <p>{truncate(card.city, { length: 90 })}, {truncate(card.country, { length: 90 })}</p>
        <p>About <span>{truncate(card.sdescription, { length: 90 })}</span></p>
      </div>
      <div className="shop-card-meta">
        <Heart id={card?.id} />
        <button className="shop-card-social">Social media</button>
        <button className="shop-card-message">Message</button>
        <button className="shop-card-call">Call Us</button>
      </div>
    </div>
  </div>
);
