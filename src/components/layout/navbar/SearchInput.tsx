interface Props {
  value: string;
  onChange: (v: string) => void;
}

const SearchInput = ({ value, onChange }: Props) => (
<div className="w-full hidden lg:flex justify-center lg:justify-end lg:pr-20 2xl:pr-[35rem] p-2">
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Search..."
    className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 w-full max-w-xs transition-all duration-300 dark:bg-neutral-6 dark:text-white"
  />
</div>
);

export default SearchInput;