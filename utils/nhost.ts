import { NhostClient } from 'nhost'

const NHOST_SUBDOMAIN = Deno.env.get("NHOST_SUBDOMAIN");
const NHOST_REGION = Deno.env.get("NHOST_REGION");

if (NHOST_SUBDOMAIN === undefined || NHOST_REGION === undefined) {
    throw new Error(
        "env `NHOST_SUBDOMAIN` and `NHOST_REGION` must be set",
    );
}

export const nhost = new NhostClient({
    subdomain: `${NHOST_SUBDOMAIN}`,
    region: `${NHOST_REGION}`
})