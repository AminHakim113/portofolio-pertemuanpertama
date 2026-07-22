type ProfileCardProps = {
  judul: string;
};

export default function ProfileCard({ judul }: ProfileCardProps) {
  return (
    <div className="profile-card">
      <div className="profile-image-wrapper">
        <img src="/profile/kamin.jpg" alt="Foto profil Kamin" />
      </div>

      <div className="profile-card-content">
        <p className="eyebrow">PROFIL</p>

        <h3>{judul}</h3>

        <p>
          Seorang kreator yang memiliki ketertarikan pada teknologi, desain,
          dan pengembangan berbagai proyek digital.
        </p>
      </div>
    </div>
  );
}