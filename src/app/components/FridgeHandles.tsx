export default function FridgeHandles() {
  return (
    <>
      {/* Fridge Handles */}
      <div
        className="fridge-handle top absolute w-[35px] h-[8px] right-[8px] top-[30%] cursor-pointer z-[10] rounded-[5px]"
        style={{
          clipPath: "polygon(0 25%, 100% 10%, 100% 90%, 0 75%)",
          background:
            "linear-gradient(to right, #F0F2F4, #F0F2F4 80%, #dcddde 80%)",
          boxShadow: "inset -1px 0px 4px 0px #777777",
        }}
      />
      <div
        className="fridge-handle bottom absolute w-[35px] h-[8px] right-[8px] top-[40%] cursor-pointer z-[10] rounded-[5px]"
        style={{
          clipPath: "polygon(0 25%, 100% 10%, 100% 90%, 0 75%)",
          background:
            "linear-gradient(to right, #F0F2F4, #F0F2F4 80%, #dcddde 80%)",
          boxShadow: "inset -1px 0px 4px 0px #777777",
        }}
      />
    </>
  );
}
