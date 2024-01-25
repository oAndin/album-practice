/* eslint-disable react/prop-types */
const Photo = ({ data, setSelectedPhoto }) => {
  return (
    <div className="photo" onClick={() => setSelectedPhoto(data)}>
      <img src={data.urls.small} alt={data.alt_description} />
    </div>
  )
}

export default Photo