import { X } from "lucide-react";
import { aboutPage } from "../../constants";

const { team } = aboutPage;

const Modal = ({ memberId, handleToggleModal }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const member = team.find((m) => m.id === memberId);

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center min-h-screen w-full transition-opacity duration-300`}
    >
      <div
        className={`max-w-4xl w-full mx-4 sm:mx-auto p-8 flex flex-col md:flex-row justify-center items-center gap-8 bg-white/50 backdrop-blur-3xl relative transition-all duration-300 ease-out transform`}
      >
        <X
          onClick={handleToggleModal}
          className="absolute right-2 top-2 cursor-pointer"
        />
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
