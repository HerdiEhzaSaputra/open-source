import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";

export default function Home() {
    return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>


            {/* <div class="py-20">
            <div class="xl:container mx-auto px-6 md:px-12">
                <div class="mb-16 md:w-2/3 lg:w-1/2">
                <h2 class="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Tailus blocks leadership
                </h2>
                <p class="text-gray-600 dark:text-gray-300">
                    Tailus prides itself not only on award-winning technology, but also on the talent of its
                    people of some of the brightest minds and most experienced executives in business.
                </p>
                </div>
                <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                
                <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                    <img
                    class="mx-auto h-[26rem] w-full object-cover object-top ransition duration-500 group-hover:scale-105 group-hover-0"
                    src="images/woman.jpg"
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                    />
                    <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                    <div>
                        <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                        <span class="block text-sm text-gray-500">CEO-Founder</span>
                    </div>
                    <p class="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
                    </div>
                    
                </div>
                <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                    <img
                    class="mx-auto h-[26rem] w-full object-cover object-top transition duration-500 group-hover:scale-105 group-hover-0"
                    src="images/man.jpg"
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                    />
                    <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                    <div>
                        <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                        <span class="block text-sm text-gray-500">CEO-Founder</span>
                    </div>
                    <p class="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
                    </div>
                    
                </div>
                <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                    <img
                    class="mx-auto h-[26rem] w-full object-cover object-top ransition duration-500 group-hover:scale-105 group-hover-0"
                    src="images/woman1.jpg"
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                    />
                    <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                    <div>
                        <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                        <span class="block text-sm text-gray-500">CEO-Founder</span>
                    </div>
                    <p class="mt-8 text-gray-300 dark:text-gray-600">Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?</p>
                    </div>
                    
                </div>
                </div>
            </div>
            </div> */}


            <div className="">
                <h2>Sumatra</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/aceh">
                            <img src={asset("svg/Coat_of_arms_of_Aceh.svg")} alt="Logo Provinsi Aceh" height={120} width={120} />
                            <h3>Aceh</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/sumatra_utara">
                            <img src={asset("svg/Coat_of_arms_of_North_Sumatra.svg")} alt="Logo Provinsi Sumatra Utara" height={120} width={120} />
                            <h3>Sumatra Utara</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/sumatra_barat">
                            <img src={asset("svg/Coat_of_arms_of_West_Sumatra.svg")} alt="Logo Provinsi Sumatra Barat" height={120} width={120} />
                            <h3>Sumatra Barat</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/riau">
                            <img src={asset("svg/Coat_of_arms_of_Riau.svg")} alt="Logo Provinsi Riau" height={120} width={120} />
                            <h3>Riau</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/jambi">
                            <img src={asset("svg/Coat_of_arms_of_Riau_Islands.svg")} alt="Logo Provinsi Kepulauan Riau" height={120} width={120} />
                            <h3>Kepulauan Riau</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/sumatra_selatan">
                            <img src={asset("svg/Coat_of_arms_of_Jambi.svg")} alt="Logo Provinsi Jambi" height={120} width={120} />
                            <h3>Jambi</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/bengkulu">
                            <img src={asset("svg/Coat_of_arms_of_Bengkulu.svg")} alt="Logo Provinsi Bengkulu" height={120} width={120} />
                            <h3>Bengkulu</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/lampung">
                            <img src={asset("svg/Coat_of_arms_of_South_Sumatra.svg")} alt="Logo Provinsi Sumatra Selatan" height={120} width={120} />
                            <h3>Sumatra Selatan</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/kepulauan_bangka_belitung">
                            <img src={asset("svg/Coat_of_arms_of_Bangka_Belitung_Islands.svg")} alt="Logo Provinsi Kepualauan Bangka Belitung" height={120} width={120} />
                            <h3>Kepulauan Bangka Belitung</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/kepulauan_riau">
                            <img src={asset("svg/Coat_of_arms_of_Lampung.svg")} alt="Logo Provinsi Lampung" height={120} width={120} />
                            <h3>Lampung</h3>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="">
                <h2>Jawa dan Nusa Tenggara</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/daerah_khusus_ibukota_jakarta">
                            <img src={asset("svg/Coat_of_arms_of_Jakarta.svg")} alt="Logo Provinsi Jakarta" height={120} width={120} />
                            <h3>Jakarta</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/jawa_barat">
                            <img src={asset("svg/Coat_of_arms_of_Banten.svg")} alt="Logo Provinsi Banten" height={120} width={120} />
                            <h3>Banten</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/jawa_tengah">
                            <img src={asset("svg/Coat_of_arms_of_West_Java.svg")} alt="Logo Provinsi Jawa Barat" height={120} width={120} />
                            <h3>Jawa Barat</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/daerah_istimewa_yogyakarta">
                            <img src={asset("svg/Coat_of_arms_of_Central_Java.svg")} alt="Logo Provinsi Jawa Tengah" height={120} width={120} />
                            <h3>Jawa Tengah</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/jawa_timur">
                            <img src={asset("svg/Coat_of_arms_of_Yogyakarta.svg")} alt="Logo Provinsi Yogyakarta" height={120} width={120} />
                            <h3>Yogyakarta</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/banten">
                            <img src={asset("svg/Coat_of_arms_of_East_Java.svg")} alt="Logo Provinsi Jawa Timur" height={120} width={120} />
                            <h3>Jawa Timur</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/bali">
                            <img src={asset("svg/Coat_of_arms_of_Bali.svg")} alt="Logo Provinsi Bali" height={120} width={120} />
                            <h3>Bali</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/nusa_tenggara_barat">
                            <img src={asset("svg/Coat_of_arms_of_West_Nusa_Tenggara.svg")} alt="Logo Provinsi Nusa Tenggara Barat" height={120} width={120} />
                            <h3>Nusa Tenggara Barat</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/nusa_tenggara_timur">
                            <img src={asset("svg/Coat_of_Arms_of_East_Nusa_Tenggara_NEW.png")} alt="Logo Provinsi Nusa Tenggara Timur" height={120} width={120} />
                            <h3>Nusa Tenggara Timur</h3>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="">
                <h2>Kalimantan</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/kalimantan_barat">
                            <img src={asset("svg/Coat_of_arms_of_West_Kalimantan.svg")} alt="Logo Provinsi Kalimantan Barat" height={120} width={120} />
                            <h3>Kalimantan Barat</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/kalimantan_tengah">
                            <img src={asset("svg/Coat_of_arms_of_Central_Kalimantan.svg")} alt="Logo Provinsi Kalimantan Tengah" height={120} width={120} />
                            <h3>Kalimantan Tengah</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/kalimantan_selatan">
                            <img src={asset("svg/Coat_of_arms_of_South_Kalimantan.svg")} alt="Logo Provinsi Kalimantan Selatan" height={120} width={120} />
                            <h3>Kalimantan Selatan</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/kalimantan_timur">
                            <img src={asset("svg/Coat_of_arms_of_East_Kalimantan.svg")} alt="Logo Provinsi Kalimantan Timur" height={120} width={120} />
                            <h3>Kalimantan Timur</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/kalimantan_utara">
                            <img src={asset("svg/Coat_of_arms_of_North_Kalimantan_(2021_version).svg")} alt="Logo Provinsi Kalimantan Utara" height={120} width={120} />
                            <h3>Kalimantan Utara</h3>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="">
                <h2>Sulawesi</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/sulawesi_utara">
                            <img src={asset("svg/Coat_of_arms_of_North_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Utara" height={120} width={120} />
                            <h3>Sulawesi Utara</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/sulawesi_tengah">
                            <img src={asset("svg/Coat_of_arms_of_Gorontalo.svg")} alt="Logo Provinsi Gorontalo" height={120} width={120} />
                            <h3>Gorontalo</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/sulawesi_selatan">
                            <img src={asset("svg/Coat_of_arms_of_Central_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Tengah" height={120} width={120} />
                            <h3>Sulawesi Tengah</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/sulawesi_tenggara">
                            <img src={asset("svg/Coat_of_arms_of_West_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Barat" height={120} width={120} />
                            <h3>Sulawesi Barat</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/gorontalo">
                            <img src={asset("svg/Coat_of_arms_of_South_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Selatan" height={120} width={120} />
                            <h3>Sulawesi Selatan</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/sulawesi_barat">
                            <img src={asset("svg/Coat_of_arms_of_Southeast_Sulawesi.svg")} alt="Logo Provinsi Sulawesi Tenggara" height={120} width={120} />
                            <h3>Sulawesi Tenggara</h3>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="">
                <h2>Maluku</h2>
                {/* <div class="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                        <img 
                            src={asset("svg/Coat_of_arms_of_North_Maluku.svg")}
                            className="mx-auto h-[26rem] w-full object-contain object-top transition duration-500 group-hover:scale-[50%] group-hover:-translate-y-12"
                            alt="Logo Provinsi Maluku Utara"
                            height={120}
                            width={120}
                            loading="lazy"
                        />
                        <div class="absolute bottom-0 inset-x-0 mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                        <div>
                            <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Maluku Utara</h4>
                            <span class="block text-sm text-gray-500">Ibukota Sofifi</span>
                        </div>
                        <p class="text-xs mt-12 text-gray-300 dark:text-gray-600">
                            Berdiri pada : 12 Oktober 1999
                            Gubernur : Abdul Ghani Kasuba
                        </p>
                        </div>
                    </div>
                    <div class="group relative rounded-3xl  space-y-6 overflow-hidden">
                        <img 
                            src={asset("svg/Coat_of_arms_of_Maluku.svg")}
                            className="mx-auto h-[26rem] w-full object-contain object-top transition duration-500 group-hover:scale-[50%] group-hover:-translate-y-12"
                            alt="Logo Provinsi Maluku Utara"
                            height={120}
                            width={120}
                            loading="lazy"
                        />
                        <div class="absolute bottom-0 inset-x-0 mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                        <div>
                            <h4 class="text-xl font-semibold dark:text-gray-700 text-white">Maluku</h4>
                            <span class="block text-sm text-gray-500">Ibukota Ambon</span>
                        </div>
                        <p class="text-xs mt-12 text-gray-300 dark:text-gray-600">
                            Berdiri pada : 19 Agustus 1945
                            Gubernur : Murad Ismail
                        </p>
                        </div>
                    </div>
                </div> */}
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/maluku">
                            <img src={asset("svg/Coat_of_arms_of_North_Maluku.svg")} alt="Logo Provinsi Maluku Utara" height={120} width={120} />
                            <h3>Maluku Utara</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/maluku_utara">
                            <img src={asset("svg/Coat_of_arms_of_Maluku.svg")} alt="Logo Provinsi Maluku" height={120} width={120} />
                            <h3>Maluku</h3>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="">
                <h2>Papua</h2>
                <ul className="grid grid-cols-5 items-center text-center">
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/papua">
                            <img src={asset("svg/Coat_of_arms_of_West_Papua.svg")} alt="Logo Provinsi Papua Barat" height={120} width={120} />
                            <h3>Papua Barat</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/papua_barat">
                            <img src={asset("svg/Coat_of_arms_of_Papua_2.svg")} alt="Logo Provinsi Papua" height={120} width={120} />
                            <h3>Papua</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/papua_selatan">
                            <img src="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1024" alt="Logo Provinsi Papua Selatan" height={120} width={120} />
                            <h3>Papua Selatan</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/papua_tengah">
                            <img src="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1024" alt="Logo Provinsi Papua Tengah" height={120} width={120} />
                            <h3>Papua Tengah</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/papua_pegunungan">
                            <img src="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1024" alt="Logo Provinsi Papua Pengunungan" height={120} width={120} />
                            <h3>Papua Pengunungan</h3>
                        </a>
                    </li>
                    <li className="flex flex-col items-center">
                        <a href="/wilayah/provinsi/papua_barat_daya">
                            <img src="https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1024" alt="Logo Provinsi Papua Barat Daya" height={120} width={120} />
                            <h3>Papua Barat Daya</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
