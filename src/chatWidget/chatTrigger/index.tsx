import { MessageSquare, X } from 'lucide-react';
export default function ChatTrigger(
  {
    style,
    open,
    setOpen,
    triggerRef,
  }: {
    style?: React.CSSProperties;
    open: boolean;
    setOpen: Function;
    triggerRef: React.RefObject<HTMLButtonElement> | null;
  },
  triggerImages?: {
    open: { [key: string]: string };
    close: { [key: string]: string };
  }
) {
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
      {triggerImages?.close ? (
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
      {triggerImages?.open ? (
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
