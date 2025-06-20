/**
 *
 * @param {{
 * className: string,
 * variant: 'active' | 'unactive',
 * onClick: Function
 * children: ReactElement
 * }} props
 * @returns
 */

export function UIButton({ className, variant, onClick, children }) {
  const variantOfButton = {
    active: "bg-[#CF3337] text-white",
    unactive: "border bg-none border-[#514F4D] text-[#514F4D]",
  }[variant];
  return (
    <button
    onClick={onClick}
      className={`px-8 py-6 min-w-[280px] h-[69px] gap-4 text-[18px] flex items-center justify-center text-nowrap box-border ${variantOfButton} ${className}`}
    >
      {children}
    </button>
  );
}
