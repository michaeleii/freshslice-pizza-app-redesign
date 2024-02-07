import { cn } from "@/lib/utils";

export default function MainWrapper({ children, className }: MainWrapperProps) {
  return (
    <main
      className={cn(
        "mx-auto mb-20 w-full max-w-xl flex-1 bg-white p-5",
        className,
      )}
    >
      {children}
    </main>
  );
}

type MainWrapperProps = {
  children: React.ReactNode;
  className?: string;
};
