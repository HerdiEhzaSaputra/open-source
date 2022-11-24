import { DaerahOtonomi, Provinsi } from "@/utils/types.ts";
import { mapValues } from "https://deno.land/std@0.165.0/collections/map_values.ts";

export default function ProvinceList({ provinsi, otonomi }: { provinsi: Provinsi, otonomi: DaerahOtonomi }) {
    
    return (
        <div className="">
                <>
                    {otonomi.map((otonomiL) => (
                        <>
                            <h2>{otonomiL.name}</h2>
                            <ul className="grid grid-cols-5 items-center text-center">
                                {provinsi.map((data) => (
                                    <li className="flex flex-col items-center">
                                        <a href={`/wilayah/provinsi/${data.slug_provinsi}`}>
                                            <img src={`/${data.logo_provinsi}`} alt={`Logo Provinsi ${data.nama_provinsi}`} height={120} width={120} />
                                            <h3>{data.nama_provinsi}</h3>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ))}
                </>
        </div>
    );
}