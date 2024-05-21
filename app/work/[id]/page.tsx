import {ProjectData} from "@/public/data/project-data";

export default function Work({params}: { params: { id: string } }) {
    const project = ProjectData.find(proj => proj.id === Number(params.id));

    return (
        <main>
            <h1>{project?.title}</h1>
        </main>
    );
}