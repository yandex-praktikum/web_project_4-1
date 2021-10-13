const profileName = document.querySelector('.profile__title');
const profileFood = document.querySelector('.profile__subtitle');
const openEditProfileButton = document.querySelector('.profile__edit-button');
const closeBtn = document.querySelector('.popup__close')

const profilePopup = document.querySelector('.popup_type_profile');
const popupInputName = profilePopup.querySelector('.popup__input_type_name');
const popupInputFood = profilePopup.querySelector('.popup__input_type_des');
const popupSaveProfileButton = profilePopup.querySelector('.popup__button');


function openPopup(popup) {
    popup.classList.add('popup__is-opened');

}

function closePopup(popup) {
    popup.classList.remove('popup__is-opened');
}


profilePopup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__img-closeBtn')) {
        closePopup(profilePopup);
    }
});

openEditProfileButton.addEventListener('click', () => {
    popupInputName.value = profileName.textContent;
    popupInputFood.value = profileFood.textContent;
    openPopup(profilePopup);

});

popupSaveProfileButton.addEventListener('click', (event) => {
    event.preventDefault();
    profileName.textContent = popupInputName.value;
    profileFood.textContent = popupInputFood.value;
    closePopup(profilePopup);
});