import { Head } from "$fresh/runtime.ts";
import { graphql } from "@/utils/gql.ts";
import { DaerahOtonomi, Provinsi } from "@/utils/types.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import ProvinceListPage from "@/islands/ProvinceList.tsx";

const q = `query ProvinceIndex{
    daerah_otonomi {
        id
        name
        pulau
    }
    provinsi {
        id
        daerah_otonomi
        nama_provinsi
        slug_provinsi
        logo_provinsi
        ibu_kota
        gubernur
    }
}`;

interface Query {
    provinsi: Provinsi | null;
    daerah_otonomi: DaerahOtonomi | null;
}

export const handler: Handlers<Query> = {
    async GET(_req, ctx) {
        const data = await graphql<Query>(q);
        // console.log(data)
        if (!data.provinsi) {
            return new Response("Province not found", { status: 404 });
        }
        if (!data.daerah_otonomi) {
            return new Response("Daerah Otonomi not found", { status: 404 });
        }
        return ctx.render(data);
    },
};

export default function WilayahPage(ctx: PageProps<Query>) {
    const { data } = ctx;

    return (
        <>
            <Head>
                <title>Fresh App</title>
            </Head>

            <div className="flex items-center w-full justify-center">
                <ProvinceListPage provinsi={data.provinsi!} otonomi={data.daerah_otonomi!} />
            </div>

        </>
    );
}
