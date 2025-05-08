export enum CategoryProducts {
  TOP_PICKS = 'TOP_PICKS',
  WATCHES = 'WATCHES',
  EARBUDS = 'EARBUDS',
  WIRELESS = 'WIRELESS',
  WIRED = 'WIRED',
}

export enum CategoryTitles {
  TOP_PICKS = 'Top Picks',
  WATCHES = 'Watches',
  EARBUDS = 'Earbuds',
  WIRELESS = 'Wireless',
  WIRED = 'Wired',
}
export const CategoryProductsTitles: Record<CategoryProducts, CategoryTitles> = {
  [CategoryProducts.TOP_PICKS]: CategoryTitles.TOP_PICKS,
  [CategoryProducts.WATCHES]: CategoryTitles.WATCHES,
  [CategoryProducts.EARBUDS]: CategoryTitles.EARBUDS,
  [CategoryProducts.WIRELESS]: CategoryTitles.WIRELESS,
  [CategoryProducts.WIRED]: CategoryTitles.WIRED,}

export const CATEGORY_IMAGES: Record<CategoryProducts, string> = {
  [CategoryProducts.TOP_PICKS]: './img/category_1.png',
  [CategoryProducts.WATCHES]: './img/category_2.png',
  [CategoryProducts.EARBUDS]: './img/category_3.png',
  [CategoryProducts.WIRELESS]: './img/category_4.png',
  [CategoryProducts.WIRED]: './img/category_5.png',
};
