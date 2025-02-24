export default function Flyout({ isOpen, onClose, children }) {
  // add a transparent div that covers the whole screen
  // and a div that contains the children
  // can use animation for the panel, while the overlay is static

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 ${isOpen ? "bg-black/30 opacity-100" : "pointer-events-none opacity-0"}`}
      ></div>

      {/* panel */}
      <div className="fixed right-0 top-0 flex h-full w-1/4 min-w-[350px] items-center justify-center bg-gray-50/40 p-8">
        {children}
      </div>
    </>
  );
}
