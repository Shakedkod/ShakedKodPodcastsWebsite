const Page = async ({ params }: { params: {id: string} }) => {
    if (!params.id) return null;

    return (
        <div>
            <h1>Podcast {params.id}</h1>
        </div>
    );
}

export default Page;