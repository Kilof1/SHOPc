import * as React from "react";
import ContactShortcut from "./ContactShortcut/ContactShortcut";
import shortcuts from "./assets/Shortcuts";

import "./ContactShortcuts.scss";

const ContactShortcuts: React.FC = () => {
  return (
    <div className="contactShortcuts">
      {shortcuts.map((s, i) => (
        <ContactShortcut {...s} key={i} />
      ))}
    </div>
  );
};

export default ContactShortcuts;
