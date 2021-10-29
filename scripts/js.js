// Wrappers
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const addPhotoModal = document.querySelector('.popup_type_add-photo');
const imageModal = document.querySelector('.popup_type_image');
const form = document.querySelector('.form');


//Buttons and other DOM elements
const editButton = document.querySelector('.button_edit');
const editProfileCloseButton = editProfileModal.querySelector('.button_close');
const addButton = document.querySelector('.button_add');
const addPhotoCloseButton = addPhotoModal.querySelector('.button_close');
const imageCloseButton = imageModal.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__about-me');
const profileName = document.querySelector('.profile__name');
const list = document.querySelector('.elements__list');

//Form data
const inputName = editProfileModal.querySelector('.form__input_name');
const inputTitle = editProfileModal.querySelector('.form__input_about');
const photoTitle = addPhotoModal.querySelector('.form__input_photo-title');
const photoUrl = addPhotoModal.querySelector('.form__input_photo-url');


function togglePopup(modal) {
    modal.classList.toggle('popup_opened');
}

function escAndClick(pop) {
    // Popups close with click outside box
    pop.addEventListener('click', (evt) => {
      if (evt.target.classList.contains("popup")) {
        pop.classList.remove("popup_opened");
  
      }
    });
  
    window.addEventListener("keyup", (evt) => {
      if (evt.key === "Escape") {
        pop.classList.remove("popup_opened");
      }
    });
  };

function formSubmitHandler(event) { 
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileTitle.textContent = inputTitle.value;
    togglePopup(editProfileModal);
}

form.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', () => {
    togglePopup(editProfileModal);
    escAndClick(editProfileModal)
});
editProfileCloseButton.addEventListener('click', () => {
    togglePopup(editProfileModal);
    escAndClick(editProfileModal)
});

addButton.addEventListener('click', () => {
    togglePopup(addPhotoModal);
    escAndClick(addPhotoModal)
});
addPhotoCloseButton.addEventListener('click', () => {
    togglePopup(addPhotoModal);
    escAndClick(addPhotoModal)
});

imageCloseButton.addEventListener('click', () => {
    togglePopup(imageModal);
    escAndClick(imageModal)
});





const initialCards = [
    {
        name: "Yosemite Valley", 
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanois National Park",
        link: "https://code.s3.yandex.net/web-code/vanois.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

const cardTemplate = document.querySelector('#element_card').content.querySelector('.elements__item');

const createCard = (data) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitle = cardElement.querySelector('.elements__title');
    const cardImage = cardElement.querySelector('.elements__image');
    const cardLikeButton = cardElement.querySelector('.button_like');
    const cardRemoveButton = cardElement.querySelector('.button_delete');
    const figureImage = imageModal.querySelector('.figure__image');
    const figureCaption = imageModal.querySelector('.figure__caption');

    cardTitle.textContent = data.name;
    cardImage.style.backgroundImage = `url(${data.link})`;

    cardLikeButton.addEventListener('click', () => {
        cardLikeButton.classList.toggle('button_like-active');
    });

    cardRemoveButton.addEventListener('click', () => {
        cardImage.parentNode.remove();
    }); 

    cardImage.addEventListener('click', () => {
        togglePopup(imageModal);
        figureImage.src = `${data.link}`;
        figureCaption.textContent = data.name;
    })
    return cardElement;
}


const renderCard = (data) => {
    list.prepend(createCard(data));
}

initialCards.forEach(renderCard);

function photoSubmitHandler(event) {
    event.preventDefault();
    const newCard = {
        name: photoTitle.value,
        link: photoUrl.value
    };
    renderCard(newCard);
    togglePopup(addPhotoModal);
}

addPhotoModal.addEventListener('submit', photoSubmitHandler);

