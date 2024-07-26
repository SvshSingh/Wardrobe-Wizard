import React, { useEffect, useState } from "react";
import {
  getImages,
  storeFavImages,
  saveFavoriteOutfit,
  removeFavoriteOutfit,
} from "../../utils/indexDB";
import "./Recommendations.scss";
import { getJson } from "../../utils/getJson";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

const SimilarProducts = () => {
  return (
    <>
      <h2 className="outfit-heading">Complete the look</h2>
      <div className="container">
      <div
          className="product-box"
          onClick={() => window.location.href="http://www.myntra.com/Jewellery-Set/Saraf%2BRS%2BJewellery/Saraf-RS-Jewellery-Rose-Gold-Plated-White-AD-Studded-Jewellery-Set/17550846/buy&opi=95576897&sa=U&ved=0ahUKEwjkqebCxaaHAxWIXWwGHeIBCyYQsDwIvgE&usg=AOvVaw3CEQvaU3DJas71ZdoVWOwe"}
        >
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnaMwcjr49F7DzCx-WP5uBqh25QMwrEoqfF254luOC7DUpIGDQ52gRYQO9yfj9MVA2GepSntCr_2laOM44YicTekUHWJ1MLhYYnLr5t5M&usqp=CAE" alt="Product 1" width="180" height="180" />
          <div className="details">
            <div className="rating">4.4</div>
            <div className="name">Saraf RS Jewellery</div>
            <div className="description">Rose Gold-Plated White AD-Studded Jewellery Set</div>
            <div className="price">
              Rs. 1134 <span className="old-price">Rs. 6300</span>
              <span className="discount">(82% OFF)</span>
            </div>
          </div>
        </div>

        <div
          className="product-box"
          onClick={() => window.location.href="https://www.myntra.com/jewellery-set/zeneme/zeneme-gold-plated-american-diamond-studded-jewellery-set/16114444/buy"}
        >
          <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0aNftrkkzJIxm6wV2_nzsT4IyYQMpKIwZXlxdjuu97uYYySfBTVk_1Fd7OHz8F_D5po3uMlBh-i5YDgwtlT6MzC0k7HfB_yQF6tONE36O&usqp=CAE" alt="Product 2" />
          <div className="details">
            <div className="rating">3.7</div>
            <div className="name">ZENEME</div>
            <div className="description">Gold Plated American Diamond Studded Jewellery Set</div>
            <div className="price">
              Rs. 379 <span className="old-price">Rs. 1999</span>
              <span className="discount">(81% OFF)</span>
            </div>
          </div>
        </div>

        <div
          className="product-box"
          onClick={() => window.location.href="https://www.myntra.com/earrings/jewels+galaxy/jewels-galaxy-multicoloured-set-of-30-contemporary-studs-earrings/19436428/buy"}
        >
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfD4LF5vDM7jdxcZX5lFAROzMAub0ho3zmUHVt8ARIItY_07yTXEwuvF83zCjj_doc0fbw3Cm5KUyyYyuh3kz_6oegBKWZ96XS1kr0UNRzf7dTcAOXaxPfFg&usqp=CAE" alt="Product 3" />
          <div className="details">
            <div className="rating">4.4</div>
            <div className="name">Jewels Galaxy</div>
            <div className="description">Multicoloured Set Of 30 Contemporary Studs Earrings</div>
            <div className="price">
              Rs. 548 <span className="old-price">Rs. 1829</span>
              <span className="discount">(70% OFF)</span>
            </div>
          </div>
        </div>

        <div
          className="product-box"
          onClick={() => window.location.href="https://www.myntra.com/ring/jewels+galaxy/jewels-galaxy-set-of-6-gold-plated-contemporary-stackable-finger-rings/21120062/buy"}
        >
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqIiEYrEf_aZ9_XpMpVcqhLGmb1yRD_trQhCjpGt8DuXj2CJI-hCoco93i98AAyI2bwdRShUfMoeKpKqtBWCXOnIvBwF41DpZUeix4RyQ&usqp=CAE" alt="Product 4" />
          <div className="details">
            <div className="rating">4.2</div>
            <div className="name">Jewels Galaxy</div>
            <div className="description">Set Of 6 Gold-Plated Contemporary Stackable Finger Rings</div>
            <div className="price">
              Rs. 377 <span className="old-price">Rs. 1259</span>
              <span className="discount">(70% OFF)</span>
            </div>
          </div>
        </div>

        <div
          className="product-box"
          onClick={() => window.location.href="https://www.myntra.com/earrings/ami/ami-set-of-25-contemporary-studs-earrings/21474586/buy"}
        >
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSwfeBvvWAlsV9Ii5HC4zHpGWUJFXCPyv3CZ9fRyNn-VQgRrmt0eGKczTb9oDQ1Sc2HB9Wklz29Tqb-M_hAJ-ZE2i1Jl2w0FVBGCKbV9LBaVaufJFJevc3ygg&usqp=CAE" alt="Product 5" />
          <div className="details">
            <div className="rating">4.4</div>
            <div className="name">AMI</div>
            <div className="description">Set of 25 Contemporary Studs Earrings</div>
            <div className="price">
              Rs. 416 <span className="old-price">Rs. 2450</span>
              <span className="discount">(83% OFF)</span>
            </div>
          </div>
        </div>
        {/* Repeat for other products */}
      </div>
    </>
  );
};

const Recommendations = ({ response, style }) => {
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const initialStatus = {};
    getJson(response).forEach((outfit) => {
      initialStatus[outfit.outfit_id] = false;
    });
    setFavoriteStatus(initialStatus);
  }, [response]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storedImages = await getImages();
        setImages(storedImages || []);
      } catch (error) {
        console.log("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const toggleHeart = async (favOutfit) => {
    const currentStatus = favoriteStatus[favOutfit.outfit_id];
    const newStatus = {
      ...favoriteStatus,
      [favOutfit.outfit_id]: !currentStatus,
    };
    setFavoriteStatus(newStatus);
    if (!currentStatus) {
      try {
        const imagefiles = favOutfit.clothes.map((imageID) =>
          getImageFile(imageID)
        );
        await storeFavImages(imagefiles);
        await saveFavoriteOutfit(favOutfit);
        setError("");
      } catch (error) {
        setError("Failed to save your favorite outfit");
      }
    } else {
      try {
        await removeFavoriteOutfit(favOutfit.outfit_id);
        setError("");
      } catch (error) {
        setError("Failed to remove your favorite outfit, please try again");
      }
    }
  };

  const navigate = useNavigate();
  const outfits = getJson(response);

  const getImageSrc = (imageId) => {
    const image = images.find((img) => img.id === imageId);
    if (image && image.blob instanceof Blob) {
      return URL.createObjectURL(image.blob);
    }
    return "";
  };

  const getImageFile = (imageId) => {
    const image = images.find((img) => img.id === imageId);
    return image || null;
  };

  if (images.length === 0 || !response || response.length === 0) {
    return <div className="outfit__loading">Loading...</div>;
  } else if (!outfits || outfits.length === 0) {
    return (
      <div className="recommendations">
        <h1 className="outfit__heading">Oops, our AI Advisor just sloped away</h1>
        <p className="outfit__error-text">{response}</p>
        <button className="primary__btn" onClick={() => navigate(-1)}>Try Again</button>
      </div>
    );
  } else {
    return (
      <div className="recommendations">
        <h1 className="outfit-heading">Here are some outfit ideas to look {style.toLowerCase()}:</h1>
        <div className="error">{error.length > 0 && error}</div>
        <div className="outfit-gallery">
          {outfits.map((outfit) => (
            <div key={outfit.outfit_id} className="outfit-card">
              <div className="outfit-card__header">
                <h2 className="outfit-card__text outfit-card__heading">Outfit {outfit.outfit_id}</h2>
                <div onClick={() => toggleHeart(outfit)}>
                  <FontAwesomeIcon
                    className="icon"
                    icon={favoriteStatus[outfit.outfit_id] ? fasHeart : farHeart}
                    style={{ color: favoriteStatus[outfit.outfit_id] ? "pink" : "#5c667e" }}
                  />
                </div>
              </div>
              <div className="outfit-card__images">
                {outfit.clothes.map((id) => (
                  <img
                    className="outfit-card__image"
                    key={id}
                    src={getImageSrc(id)}
                    alt={id}
                  />
                ))}
              </div>
              <p className="outfit-card__text">Score: {outfit.score}</p>
              <p className="outfit-card__text">{outfit.considerations}</p>
            </div>
          ))}
        </div>
        <div></div>
        <SimilarProducts />
        <button className="primary__btn" onClick={() => navigate(-1)}>Try New Looks</button>
      </div>
    );
  }
};

export default Recommendations;
