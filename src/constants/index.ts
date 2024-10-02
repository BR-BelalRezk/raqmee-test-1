export const transition = {
  duration: 0.75,
  type: "tween",
  ease: [0.76, 0, 0.24, 1],
} as const;

export const filter = [
  {
    label: "All",
    action: "all",
  },
  {
    label: "Men",
    action: "men",
  },
  {
    label: "Women",
    action: "women",
  },
  {
    label: "Kids",
    action: "kids",
  },
];
export const sort = [
  { label: "A-Z", action: "name-asc" },
  { label: "Z-A", action: "name-desc" },
  { label: "Price: Low to High", action: "price-low-high" },
  { label: "Price: Hight to Low", action: "price-high-low" },
];
