/* eslint-disable react/prop-types */
import Photo from "../Photo/Photo";

const PhotoList = ({ photos, setSelectedPhoto }) => {
  return (
    <div className="album">
      {photos.map((photo) => (
        <Photo key={photo.id} data={photo} setSelectedPhoto={setSelectedPhoto} />
      ))}
    </div>
  )
}

export default PhotoList;