import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import close from '../../assets/icons/close.svg';
import diagram from '../../assets/img/diagram.png';
import Panzoom, { PanzoomObject } from '@panzoom/panzoom';
import {
  ModalBackdrop,
  ModalContainer,
  ModalButtonClose,
  ModalHeader,
  ModalText,
  ZoomableContainer
} from './styles';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Tokenomic: React.FC<ModalProps> = observer(({ isOpen, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const panzoomInstanceRef = useRef<PanzoomObject | null>(null);

  useEffect(() => {
    if (isOpen && contentRef.current && !panzoomInstanceRef.current) {
      const imgElement = contentRef.current.querySelector('img');
      if (imgElement && imgElement.complete) {
        initializePanzoom();
      } else if (imgElement) {
        imgElement.onload = initializePanzoom;
      }
    }

    function initializePanzoom() {
      if (contentRef.current) {
        panzoomInstanceRef.current = Panzoom(contentRef.current as HTMLElement, {
          maxScale: 4,
          minScale: 1,
          contain: 'outside'
        });
        contentRef.current.addEventListener('wheel', panzoomInstanceRef.current.zoomWithWheel);
        panzoomInstanceRef.current.zoom(1.0, { animate: false });
      }
    }

    return () => {
      if (panzoomInstanceRef.current) {
        panzoomInstanceRef.current.destroy();
        panzoomInstanceRef.current = null;
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalButtonClose onClick={onClose}>
          <img src={close} alt="Close modal" />
        </ModalButtonClose>
        <ModalHeader>Tokenomic</ModalHeader>
        <ModalText>Preset Limit Orders or DCA in advance to acquire tokens at launch. New tokens are volatile, set a maximum price limit when trading them.</ModalText>
        <ZoomableContainer>
          <div ref={contentRef}>
            <img src={diagram} alt="Diagram" />
          </div>
        </ZoomableContainer>
      </ModalContainer>
    </ModalBackdrop>
  );
});
