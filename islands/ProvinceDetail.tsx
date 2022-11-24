import { Provinsi } from "@/utils/types.ts";
import IconPaperclip from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/paperclip.tsx"

export default function ProvinceDetail({ provinsi }: { provinsi: Provinsi }) {
    const format = (number: { toString: () => string; }) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
    
    return (
        <div>
            <div class="w-full items-center justify-between gap-4">
                {provinsi.map((data) => (
                    <div className="p-6">
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="flex justify-between px-4 py-5 sm:px-6">
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Provinsi {data.nama_provinsi}</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Ibukota {data.ibu_kota}</p>
                                </div>
                                <div>
                                    <img src={`/${data.logo_provinsi}`} alt="Logo Provinsi Sumatra Barat" height={80} width={80} />
                                </div>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Kode Wilayah</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.kode_wilayah}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Nama Provinsi</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.nama_provinsi}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Singakatan ISO</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.singkatan_iso}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Singakatan Umum</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.singkatan_umum}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Populasi</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{format(data.populasi)} jiwa, th. 2021</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Wilayah Geografis</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.wilayah_geografis}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Dasar Hukum Pembentukan</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                                {data.dasar_hukum_pembentukan &&
                                                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                        <div className="flex w-0 flex-1 items-center">
                                                            <IconPaperclip className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                            <span className="ml-2 w-0 flex-1 truncate">{data.dasar_hukum_pembentukan}</span>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Download
                                                            </a>
                                                        </div>
                                                    </li>
                                                }
                                                {data.dasar_hukum_pembentukan0 &&
                                                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                        <div className="flex w-0 flex-1 items-center">
                                                            <IconPaperclip className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                            <span className="ml-2 w-0 flex-1 truncate">{data.dasar_hukum_pembentukan0}</span>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Download
                                                            </a>
                                                        </div>
                                                    </li>
                                                }
                                                {data.dasar_hukum_pembentukan1 &&
                                                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                        <div className="flex w-0 flex-1 items-center">
                                                            <IconPaperclip className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                            <span className="ml-2 w-0 flex-1 truncate">{data.dasar_hukum_pembentukan1}</span>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Download
                                                            </a>
                                                        </div>
                                                    </li>
                                                }
                                                {data.dasar_hukum_pembentukan2 &&
                                                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                        <div className="flex w-0 flex-1 items-center">
                                                            <IconPaperclip className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                            
                                                            <span className="ml-2 w-0 flex-1 truncate">{data.dasar_hukum_pembentukan2}</span>
                                                        </div>
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Download
                                                            </a>
                                                        </div>
                                                    </li>
                                                }
                                            </ul>
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Gubernur</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.gubernur}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Hari Jadi</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.hari_jadi}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Ibu Kota</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.ibu_kota}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">IPM</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{format(data.ipm)} BPS, th. 2020</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Kepadatan Penduduk</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{format(data.kepadatan_penduduk)} jiwa/km²</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Luas Wilayah</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{format(data.luas)} km²</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">APBD Provinsi</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                                                <dt className="text-sm font-medium text-gray-500">Belanja Daerah</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">IDR {format(data.apbd_belanja_daerah)} miliar rupiah, th. 2022</dd>
                                            </div>
                                            <div className="mt-1 sm:grid sm:grid-cols-3 sm:gap-4">
                                                <dt className="text-sm font-medium text-gray-500">Pendapatan Daerah</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">IDR {format(data.apbd_pendapatan_daerah)} miliar rupiah, th. 2022</dd>
                                            </div>
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">PDRB PerKapita</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">IDR {format(data.pdrb_perkapita)}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">PDRB Total</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">IDR {format(data.pdrb_total)}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}