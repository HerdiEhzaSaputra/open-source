import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";

export default function Home() {
    return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>
            <div className="">
                <h2>Sumatra</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Aceh.svg")} alt="Logo Provinsi Aceh" height={120} width={120} />
                        <h3>Aceh</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_North_Sumatra.svg")} alt="Logo Provinsi Sumatra Utara" height={120} width={120} />
                        <h3>Sumatra Utara</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_West_Sumatra.svg")} alt="Logo Provinsi Sumatra Barat" height={120} width={120} />
                        <h3>Sumatra Barat</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Riau.svg")} alt="Logo Provinsi Riau" height={120} width={120} />
                        <h3>Riau</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Riau_Islands.svg")} alt="Logo Provinsi Kepulauan Riau" height={120} width={120} />
                        <h3>Kepulauan Riau</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Jambi.svg")} alt="Logo Provinsi Jambi" height={120} width={120} />
                        <h3>Jambi</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Bengkulu.svg")} alt="Logo Provinsi Bengkulu" height={120} width={120} />
                        <h3>Bengkulu</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_South_Sumatra.svg")} alt="Logo Provinsi Sumatra Selatan" height={120} width={120} />
                        <h3>Sumatra Selatan</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Bangka_Belitung_Islands.svg")} alt="Logo Provinsi Kepualauan Bangka Belitung" height={120} width={120} />
                        <h3>Kepulauan Bangka Belitung</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Lampung.svg")} alt="Logo Provinsi Lampung" height={120} width={120} />
                        <h3>Lampung</h3>
                    </li>
                </ul>
            </div>
            
            <div className="">
                <h2>Jawa dan Nusa Tenggara</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Jakarta.svg")} alt="Logo Provinsi Jakarta" height={120} width={120} />
                        <h3>Jakarta</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Banten.svg")} alt="Logo Provinsi Banten" height={120} width={120} />
                        <h3>Banten</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_West_Java.svg")} alt="Logo Provinsi Jawa Barat" height={120} width={120} />
                        <h3>Jawa Barat</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Central_Java.svg")} alt="Logo Provinsi Jawa Tengah" height={120} width={120} />
                        <h3>Jawa Tengah</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Yogyakarta.svg")} alt="Logo Provinsi Yogyakarta" height={120} width={120} />
                        <h3>Yogyakarta</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_East_Java.svg")} alt="Logo Provinsi Jawa Timur" height={120} width={120} />
                        <h3>Jawa Timur</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Bali.svg")} alt="Logo Provinsi Bali" height={120} width={120} />
                        <h3>Bali</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_West_Nusa_Tenggara.svg")} alt="Logo Provinsi Nusa Tenggara Barat" height={120} width={120} />
                        <h3>Nusa Tenggara Barat</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png")} alt="Logo Provinsi Nusa Tenggara Timur" height={120} width={120} />
                        <h3>Nusa Tenggara Timur</h3>
                    </li>
                </ul>
            </div>

            <div className="">
                <h2>Kalimantan</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_West_Kalimantan.svg")} alt="Logo Provinsi Kalimantan Barat" height={120} width={120} />
                        <h3>Kalimantan Barat</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Central_Kalimantan.svg")} alt="Logo Provinsi Kalimantan Tengah" height={120} width={120} />
                        <h3>Kalimantan Tengah</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_South_Kalimantan.svg")} alt="Logo Provinsi Kalimantan Selatan" height={120} width={120} />
                        <h3>Kalimantan Selatan</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_East_Kalimantan.svg")} alt="Logo Provinsi Kalimantan Timur" height={120} width={120} />
                        <h3>Kalimantan Timur</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_North_Kalimantan_(2021_version).svg")} alt="Logo Provinsi Kalimantan Utara" height={120} width={120} />
                        <h3>Kalimantan Utara</h3>
                    </li>
                </ul>
            </div>

            <div className="">
                <h2>Sulawesi</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_North_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Utara" height={120} width={120} />
                        <h3>Sulawesi Utara</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Gorontalo.svg")} alt="Logo Provinsi Gorontalo" height={120} width={120} />
                        <h3>Gorontalo</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Central_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Tengah" height={120} width={120} />
                        <h3>Sulawesi Tengah</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_West_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Barat" height={120} width={120} />
                        <h3>Sulawesi Barat</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_South_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Selatan" height={120} width={120} />
                        <h3>Sulawesi Selatan</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Southeast_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Tenggara" height={120} width={120} />
                        <h3>Sulawesi Tenggara</h3>
                    </li>
                </ul>
            </div>

            <div className="">
                <h2>Maluku</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_North_Maluku.svg")} alt="Logo Provinsi Maluku Utara" height={120} width={120} />
                        <h3>Maluku Utara</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Maluku.svg")} alt="Logo Provinsi Maluku" height={120} width={120} />
                        <h3>Maluku</h3>
                    </li>
                </ul>
            </div>

            <div className="">
                <h2>Papua</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_West_Papua.svg")} alt="Logo Provinsi Papua Barat" height={120} width={120} />
                        <h3>Papua Barat</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={asset("svg/Coat_of_arms_of_Papua_2.svg")} alt="Logo Provinsi Papua" height={120} width={120} />
                        <h3>Papua</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1024" alt="Logo Provinsi Papua Selatan" height={120} width={120} />
                        <h3>Papua Selatan</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1024" alt="Logo Provinsi Papua Tengah" height={120} width={120} />
                        <h3>Papua Tengah</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1024" alt="Logo Provinsi Papua Pengunungan" height={120} width={120} />
                        <h3>Papua Pengunungan</h3>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1024" alt="Logo Provinsi Papua Barat Daya" height={120} width={120} />
                        <h3>Papua Barat Daya</h3>
                    </li>
                </ul>
            </div>
        </>
    );
}
