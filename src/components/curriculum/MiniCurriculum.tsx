import Image from "next/image"
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export default function MiniCurriculum() {
	const t = useTranslations('curriculum')
	const { resolvedTheme } = useTheme()
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-4 justify-center items-center">
            
            <div 
                className="relative min-h-64 aspect-square rounded-full overflow-hidden mx-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative w-full h-full transition-all duration-1200 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    {/* First image */}
                    <Image 
                        src="/images/curriculum.jpg"
                        alt={t('profile_picture')} 
                        fill
                        className={`object-cover absolute inset-0 transition-opacity duration-900 ${
                            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                        }`}
                    />
                    
                    {/* Second image */}
                    <Image 
                        src="/images/curriculum2.jpg"
                        alt={t('profile_picture')} 
                        fill
                        className={`object-cover absolute inset-0 transition-opacity duration-800 ${
                            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                    />
                </div>
            </div>
            <div className={`relative rounded-2xl p-4 transition-shadow md:w-10/12 lg:w-11/12 
                ${resolvedTheme === 'dark' ? 'bg-black/30 border border-zinc-800 shadow-lg hover:shadow-xl shadow-zinc-800' : 'bg-white dark:bg-zinc-900/50 border border-zinc-200 shadow-lg hover:shadow-xl'}`}>
                <div className="flex flex-col gap-3 self-center py-4">
                    <div className="flex flex-col gap-3 self-center">
                        <span className={`
                            text-2xl font-bold text-transparent bg-clip-text text-left md:text-center
                            ${resolvedTheme === 'dark' ? 'gradient-dark' : 'gradient-light'}
                        `}>
                            Pedro Gomes
                        </span>
                        <span>{t('titles')}</span>
                    </div>
                    <p className="text-sm text-left pl-2 md:pl-5 lg:pl-10">{t('introduction')}</p>
                </div>
            </div>
		</div>
	)
}