"use client";

type ProjectCardProps = {
  title: string;
  description: string;
  category: string;
  likes: number;
  userLiked: boolean;
  isMostPopular: boolean;
  onLike: () => void;
};

export default function ProjectCard({
  title,
  description,
  category,
  likes,
  userLiked,
  isMostPopular,
  onLike,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-category">{category}</span>

        {likes >= 1 && (
          <div
            className={`popular-label ${
              isMostPopular ? "most-popular-label" : ""
            }`}
          >
            <span className="popular-label-icon">
              {isMostPopular ? "★" : "•"}
            </span>

            <span>
              {isMostPopular ? "Proyek Terpopuler" : "Proyek Populer"}
            </span>
          </div>
        )}
      </div>

      <div className="project-card-content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="project-card-bottom">
        <span className="like-count">
          {likes} {likes === 1 ? "Like" : "Likes"}
        </span>

        <button
          type="button"
          onClick={onLike}
          className={`like-button ${userLiked ? "liked" : ""}`}
        >
          {userLiked ? "Batal Suka" : "Suka"}
        </button>
      </div>
    </article>
  );
}