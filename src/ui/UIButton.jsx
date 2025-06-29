/**
 *
 * @param {{
 * className: string,
 * variant: 'active' | 'unactive' | 'keyboardMain' | 'keyboardEvent',
 * onClick: Function
 * children: ReactElement
 * }} props
 * @returns
 */

export function UIButton({ type="button", className, variant, size, padding, onClick, children }) {
  // стили применяются в зависимости от указанного варианта
  const variantOfButton = {
    active: "bg-[#CF3337] text-white",
    unactive: "border bg-none border-[#514F4D] text-[#514F4D]",
    keyboardMain: "bg-white",
    keyboardEvent: "bg-[#EBEBEB] rounded-lg"
  }[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${padding ? `p-${padding}` : "px-8 py-6"} ${size?.width ? `w-${size.width}` : "min-w-[280px]"} ${size?.height ? `h-${size.height}` : "h-[69px]"} gap-4 text-[18px] flex items-center justify-center text-nowrap box-border tracking-[2px] ${variantOfButton} ${className}`}
    >
      {children}
    </button>
  );
}
