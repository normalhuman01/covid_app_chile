//global SEO config
const title = 'Estado y progreso vacunación COVID-19 Chile 2021'
const description = 'Consulta el estado y progreso de la vacunación del COVID-19 de forma diaria según datos del gobierno'

const SEO = {
    title,
    description,
    canonical: 'https://covid-vacuna-chile.vercel.app',
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://covid-vacuna-chile.vercel.app',
        title,
        description,
        images: [
            {
                url: 'https://covid-vacuna-chile.vercel.app/yo-me-vacuno.png',
                alt: title,
                width: 1200,
                height: 627
            }
        ]
    },
    twitter: {
        handle: '@fe_ossandon',
        site: '@fe_ossandon',
        cardType: 'summary_large_image'
    }
}

export default SEO