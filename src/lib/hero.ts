import { images } from "../assets";

export type Hero = {
    home: { image: string },
    content: {
        id: string,
        title: string | { text: string, span: string },
        paragraphs: string | string[]
        image: string
    }[],
    icon: { title: string, image: string, form?: { input: string, button: string } }[]
}

const heros: { [key:string]: Hero } = {
    en: {
        home: { image: images.EnBanner },
        content: [
            {
                id: 'Prescribing',
                title: 'Medication Abortion <span style="color: var(--Prescribing)">Prescribing</span> Resources',
                paragraphs: [ 'If you are a <span style="color: var(--Highlight); font-weight: 700;">physician, a nurse practitioner or a midwife</span> who is currently prescribing or plans to prescribe Mifegymiso, please scroll down for information about the <i>medication, abortion counselling, clinical processes, virtual care, billing codes and inclusivity toolkits.</i>',
                    'If you are a <span style="color: var(--Highlight); font-weight: 700;">midwife, a nurse or a medical officer</span> who is looking for information on prescribing Mifegymiso to support your team, you are also in the right place.' ],
                image: images.PrescribingIcon
            },
            {
                id: 'Dispensing',
                title: 'Medication Abortion <span style="color: var(--Dispensing)">Dispensing</span> Resources',
                paragraphs: 'If you are a <span style="color: var(--Highlight); font-weight: 700;">pharmacist or any other clinician</span> who is currently dispensing or plans to dispense Mifegymiso, please scroll down for information about the <i>medication, administration instructions, missed doses, side-effect management, insurance and inclusivity toolkits.</i>',
                image: images.DispensingIcon
            },
            {
                id: 'Supporting',
                title: 'Medication Abortion <span style="color: var(--Supporting)">Supporting</span> Resources',
                paragraphs: 'If you are a <span style="color: var(--Highlight); font-weight: 700;">community worker, a social worker or a counsellor, or if you are supporting your colleagues and friends</span> in taking medication abortion, please scroll down for information about <i>the medication, the consideration of different options and the process of medication abortion.</i>',
                image: images.SupportingIcon
            },
            {
                id: 'About',
                title: 'About Us',
                paragraphs: 'Scroll down to learn more about <span style="color: var(--Highlight); font-weight: 700;">Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA)</span>, our collaborating partners and the process we undertook to develop this website.',
                image: images.AboutIcon
            }
        ],
        icon: [
            { title: 'Frequently Asked Questions', image: images.FaqIcon },
            { title: 'Search the CAPS Platform', form: { input:'Type here...', button: 'Search' }, image: images.SearchIcon }
        ]
    },
    fr: {
        home: { image: images.FrBanner },
        content: [
            {
                id: 'Prescrire',
                title: 'Ressources pour <span style="color: var(--Prescribing)">prescrire</span> l\'avortement par médicaments',
                paragraphs: [ 'Si vous êtes <span style="color: var(--Highlight); font-weight: 700;">médecins, infirmières praticiennes spécialisées et sages-femmes</span> et que vous prescrivez actuellement ou envisagez de prescrire le Mifé-Miso, veuillez faire défiler vers le bas pour obtenir des informations sur <i> les médicaments, les conseils en matière d\'avortement, les processus cliniques, les soins virtuels, les codes de facturation et les boîtes à outils d\'inclusivité.</i>',
                    'Si vous êtes <span style="color: var(--Highlight); font-weight: 700;">sages-femmes, infirmières autorisées et médecins</span> et que vous recherchez des informations sur la prescription du Mifé-Miso pour soutenir votre équipe, vous êtes également au bon endroit.' ],
                image: images.PrescribingIcon
            },
            {
                id: 'Dispenser',
                title: 'Ressources pour <span style="color: var(--Dispensing)">dispenser</span> l\'avortement par médicaments',
                paragraphs: 'Si vous êtes <span style="color: var(--Highlight); font-weight: 700;">pharmaciens ou tout autre clinicien qui dispense actuellement ou prévoyez de distribuer du Mifegymiso</span> veuillez faire défiler vers le bas pour obtenir des informations sur <i>les médicaments, les instructions d\'administration, les doses oubliées, la gestion des effets secondaires, l\'assurance et les boîtes à outils d\'inclusivité.</i>',
                image: images.DispensingIcon
            },
            {
                id: 'Soutenir',
                title: 'Ressources pour <span style="color: var(--Supporting)">soutenir</span> l’avortement par médicaments',
                paragraphs: 'Si vous êtes des <span style="color: var(--Highlight); font-weight: 700;">travailleurs communautaires, des travailleurs sociaux ou des conseillers, ou si vous aidez vos collègues et amis</span> à recourir à l\'avortement par médicaments, veuillez faire défiler vers le bas pour obtenir des informations sur les médicaments, l\'examen des différentes options et le processus d\'avortement par médicaments.</i>',
                image: images.SupportingIcon
            },
            {
                id: 'À propos',
                title: 'À propos de nous',
                paragraphs: 'Faites défiler vers le bas pour en savoir plus sur <span style="color: var(--Highlight); font-weight: 700;">Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA)</span>, nos partenaires collaborateurs, et le processus que nous avons entrepris pour développer ce site web.',
                image: images.AboutIcon
            }
        ],
        icon: [
            { title: 'Questions fréquentes', image: images.FaqIcon },
            { title: 'Rechercher sur la plateforme CPCA', form: { input:'Écrivez ici...', button: 'Rechercher' }, image: images.SearchIcon }
        ]
    }
}

export function getHero(lang: string): Hero {
    return heros[lang]
}