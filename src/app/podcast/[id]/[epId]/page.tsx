import { PODCASTS } from "@/constants";

const Page = async ({ params }: { params: {id: string; epId: string;} }) => {
    if (!params.id || !params.epId) return null;
    const podId = params.id;
    const epId = PODCASTS[podId].episodes.length - (parseInt(params.epId.replace("Ep", "")));

    return (
        <div>
            <h1>Episode {epId} from pod {podId}</h1>
        </div>
    );
}

export default Page;