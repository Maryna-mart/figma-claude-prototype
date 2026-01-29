import { useState } from 'react';
import { Checkbox } from './Checkbox';

export function FilterSidebar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    sizes: [],
    availability: [],
    colors: [],
  });

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const availability = ['In Stock', 'Out of Stock'];
  const colors = ['Black', 'White', 'Navy', 'Red', 'Blue', 'Green'];

  const handleSizeChange = (size) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    const newFilters = { ...filters, sizes: newSizes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAvailabilityChange = (avail) => {
    const newAvailability = filters.availability.includes(avail)
      ? filters.availability.filter(a => a !== avail)
      : [...filters.availability, avail];
    const newFilters = { ...filters, availability: newAvailability };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleColorChange = (color) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    const newFilters = { ...filters, colors: newColors };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <aside className="bg-white rounded-lg border border-light-gray p-6 h-fit sticky top-24">
      <h2 className="text-lg font-bold text-black mb-6">Filters</h2>

      {/* Size Filter */}
      <div className="mb-8 pb-8 border-b border-light-gray">
        <h3 className="font-semibold text-black mb-4">Size</h3>
        <div className="space-y-3">
          {sizes.map((size) => (
            <Checkbox
              key={size}
              label={size}
              checked={filters.sizes.includes(size)}
              onChange={() => handleSizeChange(size)}
            />
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="mb-8 pb-8 border-b border-light-gray">
        <h3 className="font-semibold text-black mb-4">Availability</h3>
        <div className="space-y-3">
          {availability.map((avail) => (
            <Checkbox
              key={avail}
              label={avail}
              checked={filters.availability.includes(avail)}
              onChange={() => handleAvailabilityChange(avail)}
            />
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="font-semibold text-black mb-4">Color</h3>
        <div className="space-y-3">
          {colors.map((color) => (
            <Checkbox
              key={color}
              label={color}
              checked={filters.colors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
