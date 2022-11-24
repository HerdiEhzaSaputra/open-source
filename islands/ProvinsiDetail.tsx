import { Provinsi } from "@/utils/types.ts";
import IconPaperclip from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/paperclip.tsx"
import { asset } from "$fresh/runtime.ts";

export default function ProvinsiDetails({ provinsi }: { provinsi: Provinsi }) {
    console.log(Deno.hostname());
    return (
        <div>
            <div class="w-full items-center justify-between gap-4">
                {provinsi.map((data) => (
                    <div className="p-6">
                        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                            <div className="flex px-4 py-5 sm:px-6">
                                <div>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Applicant Information</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{data.nama_provinsi}</p>
                                </div>
                                <div>
                                    {/* <img src={`http://localhost:8000/${data.logo_provinsi}`} alt="Logo Provinsi Sumatra Barat" height={120} width={120} /> */}
                                    <img src={asset(data.logo_provinsi)} alt="Logo Provinsi Sumatra Barat" height={120} width={120} />
                                </div>
                            </div>
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">kode_wilayah</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.kode_wilayah}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Nama Provinsi</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.nama_provinsi}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">singkatan_iso</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.singkatan_iso}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">singkatan_umum</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.singkatan_umum}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">populasi</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.populasi}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">wilayah_geografis</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.wilayah_geografis}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">dasar_hukum_pembentukan</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
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
                                            </ul>
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">gubernur</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.gubernur}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">hari_jadi</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.hari_jadi}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">ibu_kota</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.ibu_kota}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">ipm</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.ipm}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">kepadatan_penduduk</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.kepadatan_penduduk}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">logo_provinsi</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.logo_provinsi}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">luas</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.luas}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">apbd_belanja_daerah</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.apbd_belanja_daerah}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">apbd_pendapatan_daerah</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.apbd_pendapatan_daerah}</dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">pdrb_perkapita</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.pdrb_perkapita}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">pdrb_total</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.pdrb_total}</dd>
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