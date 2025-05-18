type Props = {
  label: string;
  //onClick: () => void;
};

export default function AuthenticationButton({ label }: Props) {
  return (
    <button
      //onClick={onClick}
      className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:opacity-50 border border-gray-300 rounded-2xl px-4 py-2 hover:bg-gray-800 hover:text-white"
    >
      {label}
    </button>
  );
}
