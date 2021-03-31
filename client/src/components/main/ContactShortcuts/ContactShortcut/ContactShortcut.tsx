import * as React from "react";
import "./ContactShortcut.scss";

interface ContactShortcutProps {
  title: string;
  description: string;
  imgSrc: string;
}

const ContactShortcut: React.FC<ContactShortcutProps> = (
  props: ContactShortcutProps
) => {
  return (
    <div className="contactShortcut">
      <div className="contactShortcut__imgContainer">
        <img
          className="contactShortcut__imgContainer__img"
          src={props.imgSrc}
          alt=""
        />
      </div>
      <div className="contactShortcut__textContainer">
        <h4 className="contactShortcut__textContainer__title">{props.title}</h4>
        <p className="contactShortcut__textContainer__desc">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ContactShortcut;
