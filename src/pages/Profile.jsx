import React from "react"; // Importing React
import PhotoAlbum from "react-photo-album"; // Importing photoalbum



function Profile() { // Profile component.
  const photos = [ // Array of objects that hold file paths for the images I wish to display in the profile section.
    { src: "/images/madelen1.jpg" },
    { src: "/images/pic5.png" },
    { src: "/images/teddy2.png" },
    { src: "/images/pic1.png" },
  ];

  return (
    <section> { /*Wraps around */ }
      <h2 className="profile-title">Profile</h2> {/*Profile title */}
      <p className="profile-container"> { /*Information I wish to display*/}
      Hi, I'm Madelen! Welcome to my CV website. I'm currently studying Front-End Development, and I'll be graduating in the spring of 2026. I’m passionate about web development, and I’ve recently discovered how much I enjoy creating websites. Outside of coding, I love hiking and spending time with my sister's dog (I'm sure you can guess which one!). I'm a big animal lover and hope to have a dog of my own someday.

      Feel free to explore my CV, and don’t hesitate to get in touch with me through my contact form!
         </p>

         <section className="profile-pictures">
         {photos.map((photo, index) => ( // Maps over the photos array and generates an image element for each photo in the array.
          <img key={index} src={photo.src} alt={`Profile pic ${index + 1}`} className="profile-photo" />
        ))}
         </section>
    </section>
  );
}

export default Profile; // Exports Profile component so it can be used elsewhere.