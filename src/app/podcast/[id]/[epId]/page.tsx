const Page = async ({ params }: { params: {id: string; epId: string;} }) => {
    if (!params.id || !params.epId) return null;

    return (
        <div>
            <h1>Podcast {params.id}</h1>
        </div>
    );
}

export default Page;