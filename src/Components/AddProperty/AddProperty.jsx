import React, { useEffect, useState } from "react";
import "./AddProperty.css";
import { base_url } from "../../data";
import { useNavigate } from "react-router-dom";

const AddProperty = ({setMenu}) => {
  const navigate = useNavigate();

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [imageUrls, setImageUrls] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");

  const [uploadState, setUploadState] = useState(false);
  const [uploadState2, setUploadState2] = useState(false);

  const [formData, setFormData] = useState({
    projectTitle: "",
    propertyType: "",
    propertyPrice: "0",
    propertyImage: [],
    propertyVideo: "",
    aboutProperty: "",
    location: "",
    googleMapLocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (selectedImages.length > 0) {
      uploadImages();
    }
  }, [selectedImages]);

  useEffect(() => {
    if (selectedVideo) {
      uploadVideo();
    }
  }, [selectedVideo]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      propertyImage: imageUrls,
    }));
  }, [imageUrls]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      propertyVideo: videoUrl,
    }));
  }, [videoUrl]);

  const handleImageChange = (event) => {
    setSelectedImages(Array.from(event.target.files));
    setUploadState(true);
  };

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.files[0]);
    setUploadState2(true);
  };

  const uploadImages = async () => {
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch(`${base_url}/image-upload/multiple`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setImageUrls(data.imageUrls);
        setUploadState(false);
      } else {
        console.error("Error uploading images:", response.statusText);
        setUploadState(false);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setUploadState(false);
    }
  };

  const uploadVideo = async () => {
    const formData = new FormData();
    formData.append("video", selectedVideo);

    try {
      const response = await fetch(`${base_url}/image-upload/video`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setVideoUrl(data.videoUrl);
        setUploadState2(false);
      } else {
        console.error("Error uploading video:", response.statusText);
        setUploadState2(false);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      setUploadState2(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${base_url}/property`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Property Not Added");
      }
      console.log("formData After Upload", formData);
      alert("Property Added");
      setMenu('properties');
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="add-property">
      <form onSubmit={handleSubmit}>
        <div className="box">
          <label>Project Title:</label>
          <input
            type="text"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="box">
          <label>Property Type:</label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          >
            <option value="">Select Property Type</option>
            <option value="residential">RESIDENTIAL</option>
            <option value="commercial">COMMERCIAL</option>
            <option value="ongoing">ONGOING</option>
          </select>
        </div>

        <div className="box">
          <label>Property Price: (in Rupees Leave Empty if there is no Price)</label>
          <input
            type="text"
            name="propertyPrice"
            value={formData.propertyPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="box">
          <label>Property Images: (Select Multiple Images)</label>
          <input
            type="file"
            name="propertyImage"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="box">
          <label>Property Video:</label>
          <input
            type="file"
            name="propertyVideo"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </div>

        <div className="box">
          <label>About Property:</label>
          <textarea
            name="aboutProperty"
            value={formData.aboutProperty}
            onChange={handleChange}
            required
          />
        </div>

        <div className="box">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="box">
          <label>Google Map Location:</label>
          <input
            type="text"
            name="googleMapLocation"
            value={formData.googleMapLocation}
            onChange={handleChange}
          />
        </div>

        {uploadState || uploadState2 ? (
          <button disabled>Uploading Images and Videos...</button>
        ) : (
          <button type="submit">Add Property</button>
        )}
      </form>
    </div>
  );
};

export default AddProperty;
