import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FiClock } from "react-icons/fi";

const ComingSoonModal = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* Overlay (dark background) */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        
        {/* Modal Panel with Smooth Animation */}
        <DialogPanel className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center animate-fadeInScale">
          
          {/* Icon + Title */}
          <div className="flex flex-col items-center space-y-3">
            <FiClock className="text-ferris-prim text-5xl" />
            <DialogTitle className="text-2xl font-bold text-gray-800">
              Coming Soon!
            </DialogTitle>
            <p className="text-gray-600">
              This feature is currently under development. Stay tuned for updates!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition hover:scale-105"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ComingSoonModal;
