import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

import { aboutPage } from "../../constants";

const { team } = aboutPage;

const Modal = ({ memberId, handleToggleModal, isOpen = true }) => {
  const [visible, setVisible] = useState(isOpen);
  const member = team.find((m) => m.id === memberId);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      // Delay unmount for transition
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex justify-center items-center min-h-screen w-full transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`max-w-4xl w-full mx-4 sm:mx-auto p-8 flex flex-col md:flex-row justify-center items-center gap-8 bg-white/50 backdrop-blur-3xl relative transition-all duration-300 ease-out transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <X onClick={handleToggleModal} className="absolute right-2 top-2 cursor-pointer" />
        <div className="w-full md:w-1/2 ">
          <img className="w-full" src={member.image} alt="profile-image" />
          <div className="bg-prussian-blue text-white rounded-br-2xl rounded-bl-2xl p-4">
            <h3 className="font-semibold">{member.name}</h3>
            <span className="text-sm">{member.role}</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-50 md:h-108 font-inter pt-8 overflow-auto">
          {member.profileFull}
        </div>
      </div>
    </div>
  );
};

export default Modal;
