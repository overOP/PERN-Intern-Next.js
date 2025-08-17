interface Props {
  value: string;
  onChange: (v: string) => void;
}

const MobileSearchBar = ({ value, onChange }: Props) => (
<div className="lg:hidden py-3 px-6 border-t dark:border-gray-700">
  <input
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Search..."
    className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-neutral-6 dark:text-white"
    autoFocus
  />
</div>
);

export default MobileSearchBar;