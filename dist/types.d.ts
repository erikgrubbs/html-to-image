export interface Options {
    width?: number;
    height?: number;
    backgroundColor?: string;
    canvasWidth?: number;
    canvasHeight?: number;
    style?: Partial<CSSStyleDeclaration>;
    filter?: (domNode: HTMLElement) => boolean;
    quality?: number;
    cacheBust?: boolean;
    includeQueryParams?: boolean;
    imagePlaceholder?: string;
    pixelRatio?: number;
    skipFonts?: boolean;
    preferredFontFormat?: 'woff' | 'woff2' | 'truetype' | 'opentype' | 'embedded-opentype' | 'svg' | string;
    fontEmbedCSS?: string;
    skipAutoScale?: boolean;
    type?: string;
    fetchRequestInit?: RequestInit;
    filterCustomCSSProperties?: boolean;
}
