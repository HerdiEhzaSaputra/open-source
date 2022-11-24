export interface Money {
    amount: number;
    currencyCode: string;
}

export interface Image {
    url: string;
    width: number;
    height: number;
    altText: string;
}

export interface List<T> {
    nodes: T[];
}

export interface ProductPriceRange {
    minVariantPrice: Money;
    maxVariantPrice: Money;
}

export interface Provinsi {
    map(arg0: (data: any) => import("https://esm.sh/v95/preact@10.11.0/src/jsx").JSXInternal.Element): import("https://esm.sh/v95/preact@10.11.0/src/index").ComponentChildren;
    // featuredImage: Image | null;
    // images?: List<Image>;
    // variants: List<ProductVariant>;
    // priceRange: ProductPriceRange;
    // productType: string;
    // id: string;
    // handle: string;
    // title: string;
    // description: string;
    // descriptionHtml: string;
    // productType: string;
    // featuredImage: Image | null;
    // images?: List<Image>;
    // variants: List<ProductVariant>;
    // priceRange: ProductPriceRange;

    images?: List<Image>;
    variants: List<ProductVariant>;

    nama_provinsi: string;
    slug_provinsi: string;
    singkatan_iso: string;
    singkatan_umum: string;
    logo_provinsi: Image;
    wilayah_geografis: string;
    dasar_hukum_pembentukan: string;
    dasar_hukum_pembentukan0: string | null;
    dasar_hukum_pembentukan1: string | null;
    dasar_hukum_pembentukan2: string | null;
    gubernur: string;
    hari_jadi: Date | null;
    ibu_kota: string;
    ipm: string;
    kepadatan_penduduk: string;
    kode_wilayah: string;
    luas: number;
    apbd_belanja_daerah: Money;
    apbd_pendapatan_daerah: Money;
    pdrb_perkapita: Money;
    pdrb_total: Money;
    populasi: number;
}

export interface ProductVariant {
    id: string;
    priceV2: Money;
    title: string;
    availableForSale: boolean;
}
