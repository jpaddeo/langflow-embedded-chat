import { MessageSquare, X } from 'lucide-react';

interface ChatTriggerProps {
  style?: React.CSSProperties;
  open: boolean;
  setOpen: Function;
  triggerRef: React.RefObject<HTMLButtonElement> | null;
  triggerImages?: {
    open: { [key: string]: string }  | undefined;
    close: { [key: string]: string } | undefined;
  };
}
export default function ChatTrigger({
  style,
  open,
  setOpen,
  triggerRef,
  triggerImages,
}: ChatTriggerProps) {
  return (
    <button
      ref={triggerRef}
      style={style}
      onClick={() => {
        setOpen(!open);
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      className='cl-trigger'
    > 
      {open && triggerImages?.close ? (
        <img
          src={triggerImages.close.url}
          alt={triggerImages.close.alt}
          width={triggerImages.close.width}
          height={triggerImages.close.height}
        />
      ) : (
        <X
          className={
            'cl-trigger-icon ' + (open ? 'cl-scale-100' : 'cl-scale-0')
          }
        />
      )}
      {!open && triggerImages?.open ? (
        <img
          src={triggerImages.open.url}
          alt={triggerImages.open.alt}
          width={triggerImages.open.width}
          height={triggerImages.open.height}
        />
      ) : (
        <MessageSquare
          className={
            'cl-trigger-icon ' + (open ? 'cl-scale-0' : 'cl-scale-100')
          }
        />
      )}
    </button>
  );
}
