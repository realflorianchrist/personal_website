import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className='profile-picture'>
                <Image
                    src={'/images/passfoto.png'}
                    alt={'profile-picture'}
                    width={100}
                    height={100}>
                </Image>
            </div>
            <h1 className={'pb-8'}>Hi, I'm Florian,</h1>
            <p className={'w-1/2 text-center leading-8'}>
                a passionate individual with a diverse background spanning computer sciences,
                design, and experiences as an draftsman specialising in civil engineering. I thrive
                on exploring the intersection of technology and creativity, crafting compelling digital
                experiences that resonate with users. With a foundation in computer sciences and civil engineering
                I bring a unique perspective to my design process, leveraging technology to push creative boundaries.
            </p>
        </main>
    );
}
