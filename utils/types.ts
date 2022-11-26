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

export interface DasarHukum {
    map(arg0: (otonomiL: any) => import("https://esm.sh/v95/preact@10.11.0/src/jsx").JSXInternal.Element): import("https://esm.sh/v95/preact@10.11.0/src/index").ComponentChildren;
    dh_id: string;
    provinsi_id: string;
    file_id: string;
    file_name: string;
}

export interface DaerahOtonomi {
    map(arg0: (otonomiL: any) => import("https://esm.sh/v95/preact@10.11.0/src/jsx").JSXInternal.Element): import("https://esm.sh/v95/preact@10.11.0/src/index").ComponentChildren;
    id: string;
    name: string;
}
export interface Provinsi {
    map(arg0: (data: any) => import("https://esm.sh/v95/preact@10.11.0/src/jsx").JSXInternal.Element): import("https://esm.sh/v95/preact@10.11.0/src/index").ComponentChildren;

    id: string;
    daerah_otonomi: string;
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
