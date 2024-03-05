"use client";

import { constants } from "@/constants";
import { useApp } from "@/providers/app";
import { useMbWallet } from "@mintbase-js/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ReactEventHandler } from "react";
import InlineSVG from "react-inlinesvg";

export const FooterButton = ({ onClick }: { onClick: ReactEventHandler }) => (
  <button
    className="rounded-full h-24 w-24 bg-primary absolute -top-12 flex items-center justify-center"
    onClick={onClick}
  >
    <div
      className="rounded-full h-20 w-20 gradientButton
  flex items-center justify-center"
    >
      <InlineSVG
        src="/images/photo_camera.svg"
        className="fill-current text-camera h-12"
      />
    </div>
  </button>
);

const Footer = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { isConnected } = useMbWallet();

  const { takePicture, openModal } = useApp();

  const renderFooterButtons = () => {
    const { isClosed } = constants;

    
  };

};

export default Footer;
