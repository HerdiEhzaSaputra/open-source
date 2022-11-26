import { DaerahOtonomi, Provinsi } from "@/utils/types.ts";

export default function ProvinceList({ provinsi, otonomi }: { provinsi: Provinsi, otonomi: DaerahOtonomi }) {
    return (
        <div className="container">
            {otonomi && otonomi.map((otonomiData) => (
                <div key={otonomiData.id}>
                    <div className="sticky top-0 bg-white p-3 rounded-xl shadow-xl flex items-center justify-between mt-4">
                        <div className="flex space-x-6 items-center">
                            <div className="shadow rounded-lg h-24 w-24">
                                <img 
                                    src={`/${otonomiData.pulau}`}
                                    alt={`Pulau ${otonomiData.name}`}
                                    className="w-auto h-24 rounded-lg"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-base">{otonomiData.name}</p>
                                <p className="font-semibold text-sm text-gray-400">Autorize device for transfer</p>
                            </div>              
                        </div>
                    </div>
                    <ul className="grid grid-cols-2 md:grid-cols-5 px-2 md:px-0 gap-4">
                        {provinsi.map((provinsiData) => {
                            if (otonomiData.id == provinsiData.daerah_otonomi) {
                                return (
                                    <li key={provinsiData.id} className="bg-white rounded-xl p-4 shadow-xl mt-4">
                                        <a href={`wilayah/provinsi/${provinsiData.id}`}>
                                            <div className="flex mb-6 m-auto justify-center items-center h-[120px] w-[120px]">
                                                <img 
                                                    src={`/${provinsiData.logo_provinsi}`}
                                                    height={120} width={120}
                                                    alt={`Logo Provinsi ${provinsiData.nama_provinsi}`}
                                                    className="flex w-full h-full"
                                                />
                                            </div>
                                            <p className="font-semibold text-base mt-1 text-left">{provinsiData.nama_provinsi}</p>
                                            <p className="font-semibold text-sm text-gray-400">{provinsiData.ibu_kota}</p>
                                            <div className="flex space-x-2 text-gray-400 items-center mt-2">
                                                <p className="font-semibold text-xs text-gray-400"><span>Gubernur:</span> {provinsiData.gubernur}</p>
                                            </div>
                                        </a>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
}

