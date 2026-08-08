import { MapPin, Calendar, Clock } from 'lucide-react';
import './Card.css';

const getImagePath = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const Card = ({ image, title, location, description, highlight, bestSeason, minimumStay }) => {
  const imageUrl = getImagePath(image);
  return (
    <div className="card">
      <div className="card-image-wrapper">
        {imageUrl ? <img src={imageUrl} alt={title} className="card-image" /> : null}
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
