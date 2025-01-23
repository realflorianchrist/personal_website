'use client'
import {Project} from "@/app/models/Project";
import ProjectPreview from "@/app/components/ProjectPreview";
import {useLanguageContext} from "@/app/providers/language-provider";

export default function Work() {
    const {i18n} = useLanguageContext();

    return (
        <main>
            <div id={'project-previews'}
                 className={"w-2/3 pt-[100px]"}>
                <h1 className={'animate slideInBottom pb-8'}>Work</h1>
                <ul className={'flex flex-col lg:flex-row gap-5'}>
                    {Object.values(i18n.ProjectData as Record<string, Project>).map((project: Project) => (
                        <li key={project.id}>
                            <ProjectPreview
                                key={project.id}
                                project={project}/>
                        </li>

                    ))}
                </ul>
            </div>
        </main>
    );
}