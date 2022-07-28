import React from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoading}){
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });

    e.target.reset()
  } 

  return (
    <PopupWithForm
          isOpen={isOpen}
          onClose={onClose}
          title="Обновить аватар"
          name="avatar"
          buttonName="Сохранить"
          onSubmit={handleSubmit}
          isLoading={isLoading}
        >
          <>
            <div className="popup__fieldset">
              <input
                type="url"
                className="popup__input popup__input_type_url"
                name="url"
                id="url"
                placeholder="Ссылка на изображение"
                ref={avatarRef}
                required
              />
              <span className="popup__input-error url-input-error"></span>
            </div>
          </>
        </PopupWithForm>
  )
}

export default EditAvatarPopup