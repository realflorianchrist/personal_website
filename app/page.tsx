'use client'
import Image from "next/image";
import {useLanguageContext} from "@/app/providers/language-provider";

export default function Home() {
    const {i18n} = useLanguageContext();

    return (
        <main>
            <div id={'introduction'}
                 className={"pb-14 mb-20 flex flex-col items-center justify-center"}>
                <div id={'profile-picture'}
                     className={"animate dur600 slideInBottom lg:mt-[12%] lg:mb-[7%] mt-32 mb-14 flex items-center justify-center w-32 h-32 rounded-full overflow-hidden border border-accent-color"}>
                    <Image
                        src={'/images/passfoto.png'}
                        alt={'profile-picture'}
                        layout={'fill'}
                        objectFit={'contain'}
                    />
                </div>
                <h1 className={'animate slideInBottom mb-[15%] lg:mb-[8%]'}>{i18n.Home.welcome}</h1>
                <p className={'animate dur1400 slideInBottom md:w-1/2 text-center leading-6 md:leading-8 text-[15px] md:text-base'}>
                    {i18n.Home.introduction}
                </p>
            </div>
        </main>
    );
}