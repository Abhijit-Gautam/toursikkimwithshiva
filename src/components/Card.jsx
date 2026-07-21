import { MapPin, Calendar, Clock } from 'lucide-react';
import './Card.css';

const Card = ({ image, title, location, description, highlight, bestSeason, minimumStay }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        {highlight && <div className="card-badge">{highlight}</div>}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {location && (
          <div className="card-location">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        )}
        <p className="card-description">{description}</p>

        {(bestSeason || minimumStay) && (
          <div className="card-meta">
            {bestSeason && (
              <div className="card-meta-item">
                <Calendar size={15} />
                <span><strong>Best Season:</strong> {bestSeason}</span>
              </div>
            )}
            {minimumStay && (
              <div className="card-meta-item">
                <Clock size={15} />
                <span><strong>Suggested Stay:</strong> {minimumStay}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
