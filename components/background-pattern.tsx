export function BackgroundPattern({
  className,
  variant = "default",
}: { className?: string; variant?: "default" | "geometric" | "waves" }) {
  const patterns = {
    default: "bg-[radial-gradient(#d8ccae_1px,transparent_1px)] [background-size:16px_16px]",
    geometric:
      "bg-[linear-gradient(45deg,transparent_25%,rgba(216,204,174,.05)_25%,rgba(216,204,174,.05)_50%,transparent_50%,transparent_75%,rgba(216,204,174,.05)_75%)] [background-size:20px_20px]",
    waves:
      "bg-[radial-gradient(circle_at_50%_50%,rgba(216,204,174,0.1)_0%,transparent_50%)] [background-size:30px_30px]",
  }

  return (
    <div className={`absolute inset-0 -z-10 h-full w-full ${className}`} aria-hidden="true">
      <div
        className={`absolute h-full w-full bg-custom-offWhite ${patterns[variant]} [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]`}
      ></div>
    </div>
  )
}
