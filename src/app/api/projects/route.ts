import {NextResponse} from 'next/server'

const Data=[
    { 

        id: 1,
        route: 'https://mrc-cka4.onrender.com/',
        img: '/img/mrc-project.png',
        title: 'MRC Arandas Motocicletas y Servicios Carlos',
        description: 'Our application is designed to streamline the management of motorcycle workshops and parts stores, providing tools to register customers, manage service orders, and track repairs efficiently. It includes features for inventory control, cost calculation, and generating financial reports. Additionally, it allows scheduling maintenance appointments and assigning tasks to mechanics, ensuring a well-organized and customer-friendly experience.Perfect for businesses looking to enhance productivity, optimize inventory, and offer better service to their clients.',
        technologies: [
           
             'Node.js',
             'ejs',
             'Boostrap',
             'Stripe',
             'MySQL',
             'SweetAlert',
             'Express.js',
             'Express-fileUpload'
           
        ],
        github: 'https://github.com/aalvizo2/mrc'
    },
    {
        id: 2,
        route: 'https://aalvizo2.github.io/financiamos_react/',
        img: '/img/presta-facil.png',
        title: 'Presta Fácil Loan Software',
        description: 'Our application is designed to streamline loan management, allowing users to efficiently register, track, and calculate payments. With an intuitive interface, users can manage clients, record loans, calculate interest, and monitor payments and cash flow. Additionally, it includes tools to track expenses, visualize income, and generate financial reports, ensuring precise control over profitability.Ideal for businesses and individuals looking to optimize loan administration in a clear and organized way.',
        technologies: [
            'Node.js',
            'React.js',
            'Ant Design',
            'Boostrap',
            'MySQL',
            'Express.js',
            'Express-fileUpload',
            'MongoDB',
            'DayJs',
            
        ],
        github: 'https://github.com/aalvizo2/financiamos_react'
    }
]
export async function GET() {
    return NextResponse.json({Data: Data})
}

