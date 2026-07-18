import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image-wrapper">
        <Image
          src="/profile/kamin.jpg"
          alt="Foto profil Kamin"
          fill
          className="profile-image"
        />
      </div>

      <div className="profile-card-info">
        <span>Halo, saya</span>
        <h3>Kamin</h3>
        <p>Developer & Creative Thinker</p>
      </div>
    </div>
  );
}