/**
 * The shed sizes the storefront sells, with base prices (₪, before add-ons).
 * Label is "<width>x<depth>" in meters; widthCm/depthCm feed the dimensions
 * block. Roof is a single-slope 230→220cm across all sizes.
 *
 * floorPrice is the optional pine-deck floor ("במת דק מעץ אורן מלא"), which
 * scales with the footprint — NOT a flat add-on. Values mirror hamechola.co.il
 * exactly where they publish them (2x2 1,650; 3x2 2,500; 3x3 3,780; 3x4 4,850)
 * and interpolate the two footprints hamechola doesn't price online at the same
 * ~415 ₪/m² (3x2.5 7.5m²; 4x2 8m²).
 */
export type ShedSize = {
  label: string;
  widthCm: number;
  depthCm: number;
  price: number;
  floorPrice: number;
};

export const SIZES: ShedSize[] = [
  { label: "2x2", widthCm: 200, depthCm: 200, price: 4150, floorPrice: 1650 },
  { label: "3x2", widthCm: 300, depthCm: 200, price: 5050, floorPrice: 2500 },
  { label: "3x2.5", widthCm: 300, depthCm: 250, price: 5650, floorPrice: 3150 },
  { label: "3x3", widthCm: 300, depthCm: 300, price: 5950, floorPrice: 3780 },
  { label: "4x2", widthCm: 400, depthCm: 200, price: 5950, floorPrice: 3350 },
  { label: "3x4", widthCm: 300, depthCm: 400, price: 6650, floorPrice: 4850 },
];

export const ROOF = { high: 230, low: 220 };

export const productTitle = (sizeLabel: string) =>
  `מחסן גינה פאנל מבודד ${sizeLabel} מטר`;
