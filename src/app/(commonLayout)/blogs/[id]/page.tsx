// import { useParams } from 'next/navigation';
// const { id } = useParams();

export default async function BlogPage({
    params,
}: {
    params: { id: string };
}) {

const {id} = await params;

    return (
        <div>
            <h2>This is the blogs page {id}</h2>
        </div>
    );
}
