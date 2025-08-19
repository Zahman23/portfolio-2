import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import React, { Fragment } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-99" onClose={onClose}>
        <div className="fixed inset-0 bg-black/50">
          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex min-h-full items-center justify-center text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle bg-background shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg">
                  <div
                    className={`pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute`}
                    style={{
                      backgroundImage: `radial-gradient(circle at 0px 0px, rgba(29,78,216,0.15), transparent 600px)`,
                    }}
                  ></div>
                  <div className="relative flex w-full items-center overflow-hidden bg-bg-command px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <div className="absolute right-4 top-4">
                      <button
                        className="rounded-full flex items-center justify-center bg-bg-command shadow-md p-2 hover:scale-110 transition cursor-pointer"
                        onClick={onClose}
                      >
                        <X size={15} />
                      </button>
                    </div>
                    {children}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
