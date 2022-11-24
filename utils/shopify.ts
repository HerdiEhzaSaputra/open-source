const HASURA_URL = Deno.env.get("HASURA_URL");
const HASURA_ACCESS_TOKEN = Deno.env.get("HASURA_ACCESS_TOKEN");

if (HASURA_URL === undefined || HASURA_ACCESS_TOKEN === undefined) {
    throw new Error(
        "env `HASURA_URL` and `HASURA_ACCESS_TOKEN` must be set",
    );
}

export async function graphql<T>(
    query: string,
    variables: Record<string, unknown> = {},
): Promise<T> {
    const resp = await fetch(`https://${HASURA_URL}.nhost.run/v1/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret": HASURA_ACCESS_TOKEN!,
        },
        body: JSON.stringify({ query, variables }),
    });
    if (!resp.ok) {
        const body = await resp.text();
        throw new Error(`${resp.status} ${body}`);
    }
    const json = await resp.json();
    if (json.errors) {
        throw new Error(json.errors.map((e: Error) => e.message).join("\n"));
    }
    return json.data as T;
}
