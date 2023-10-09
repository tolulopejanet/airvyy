import React from 'react';

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
      popupImageUrl: '',
      images: [
        { id: 1, src: 'path_to_image_1', alt: 'Description 1' },
        { id: 2, src: 'path_to_image_2', alt: 'Description 2' },
        // Add more images here
      ]
    };
  }

  showPopup = (imageUrl) => {
    this.setState({ popupVisible: true, popupImageUrl: imageUrl });
  };

  closePopup = () => {
    this.setState({ popupVisible: false });
  };

  render() {
    return (
      <div className="roww">
        {this.state.images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => this.showPopup(image.src)}
          />
        ))}
        {this.state.popupVisible && (
          <div className="popup-image">
            <img src={this.state.popupImageUrl} alt="Popup Image" />
            <span onClick={this.closePopup}>Close</span>
          </div>
        )}
      </div>
    );
  }
}

export default PopUp;
