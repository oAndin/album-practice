/* eslint-disable react/prop-types */
const SelectedPhoto = ({ photo, setSelectedPhoto }) => {
  return (
    <div className="selected-photo-backdrop" onClick={() => setSelectedPhoto(null)}>
      <div className="selected-photo-container">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </div>
  )
}

export default SelectedPhoto;