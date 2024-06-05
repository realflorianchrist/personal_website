'use client'
import {useLanguageContext} from "@/app/providers/language-provider";
import {Project} from "@/app/models/Project";

export default function Work({params}: Readonly<{ params: { id: string } }>) {
    const {i18n} = useLanguageContext();
    const project = i18n.ProjectData.find((proj: Project)  => proj.id === Number(params.id));

    return (
        <main>
            <h1>{project?.title}</h1>
        </main>
    );
}