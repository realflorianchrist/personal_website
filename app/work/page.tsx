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
                <ul className={'flex flex-col lg:flex-row gap-x-5 gap-y-14'}>
                    {i18n.ProjectData.map((project: Project) => (
                        <li key={project.id} className={'flex-1'}>
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