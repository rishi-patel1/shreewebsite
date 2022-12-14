import {GiGrowth} from 'react-icons/gi'
import {GiRelationshipBounds} from 'react-icons/gi'
import {MdMoveToInbox} from 'react-icons/md'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {BsBox} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'
import {GrUserWorker} from 'react-icons/gr'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Products",
        path: "/products"
    },
    
    {
        name: "Our Clients",
        path: '/ourClients'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Contact",
        path: '/contact'
    },
    {
        name: "GST Help",
        path: '/gallery'
    }
    
]







export const mainHeader = [
    {
        id:1,
        heading: "Complete Accounting Software",    
        desc: "Usefull for all types of Industries, Accountants, Traders, Wholesalers, Restaurants, Hotels, Agencies, Manufacturing Units, Excisable Units, etc."
    },
    {
        id:2,
        heading: "Barcode Solutions for Supermarkets",
        image: require("./images/barcode.jpg"),
        desc: "Barcode facility for supermarkets and shopping malls"
    },
    {
        id:3,
        heading: "Solutions for Restaurants and Food-Chains",
        image: require("./images/restaurants.jpg"),
        desc: "Facility for KOT & Billing for restuarants and Food Chains"
    },
    {
        id:4,
        heading: "Solutions for Excise Trading Business and Excise Manufacturing",
        image: require("./images/excise.png"),
        desc: "Suitable for Excise, VAT, CST, Service Tax, TDS"
    },
]



export const programs = [
    {
        id: 1,
        icon: <MdMoveToInbox/>,
        title: "Shree Sava",
        info: "Software for Accounting, Invoicing & Stock. \nA generalized accounting software with great flexibility to suit your requirement with utmost simplicity has made Shree Sava a perfect choice for day to day accounting, invoicing & stock management. A very popular product in Saurashtra region which has blend of Traditional & Modern accounting system. It is very much useful among SMB segment of Industries & Trading.",
        path: "/plans"
    },
    {
        id: 2,
        icon: <AiOutlinePlusCircle/>,
        title: "Software Products",
        info: "Shree Sava is available at very reasonable cost. A value for money solution in following options. Please Contact us for free DEMO.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <BsBox/>,
        title: "Hardware Sales and Services",
        info: "Authorised Dealer of Computer Servers, Personal Computers, Laptops, Security Cameras, Peripherals, etc. and services like Annual Maintenance, Networking Solutions, Security Camera Installation, Hardware Solutions, Printer Services, etc.",
        path: "/products"
    }
]








export const values = [
    {
        id: 1,
        icon: <GiGrowth/>,
        title: "Respect and Invest",
        desc: "We believe in respect for the individual and care about investing in each other's growth, both for people at C-Point and for those in our extended community. "
    },
    {
        id: 2,
        icon: <GiRelationshipBounds/>,
        title: "Credibility and Integrity",
        desc: "We conduct ourselves with uncompromising integrity and honesty as individuals, as teams, and as a company. We strive to earn enduring credibility with others, which we believe is essential to long-term personal and business relationships."
    },
    {
        id: 3,
        icon: <GrUserWorker/>,
        title: "Rational Workplace",
        desc: 'We believe in building a rational workplace and in making intelligent decisions. In any given situation, we believe that there is a "right answer" and a best way to do things, and we strive to reach them.'
    },
    {
        id: 4,
        icon: <FaRegHandshake/>,
        title: "Keep Promises",
        desc: "We have a long history of solving complex business challenges. That's why our customers trust us. We work as one team to constantly earn this trust, delivering the best outcome in the simplest way possible."
    }
]




export const header = [
    {
      name: "COMPLETE ACCOUNTING SOFTWARE",
      review: "Useful for all types of Industries, Accountants, Traders, Wholesalers, Restaurants, Hotels, Agencies, Manufacturing Units, Excisable Units, etc."
    },
    {
      name: "BARCODE SOLUTIONS FOR SUPERMARKETS",
      review: "Barcode facilities for Supermarkets & Shopping Malls."
    },
    {
      name: "SOLUTIONS FOR EXCISE TRADING BUSINESS & EXCISE MANUFACTURING",
      review: "Suitable for excise, vat, cst, Service Tax, TDS, GST."
    },
    {
      name: "SOLUTIONS FOR RESTAURANTS & FOODCHAINS",
      review: "Facility of KOT & Billing for Restaurants and FoodChains."
    }
  ]




export const faqs = [

    {
        id: 1,
        question: "How to start my Company Accounts in Shree ?",
        answer: "First of all create new company from company menu. When you will select company from list for first time you will get  list of default sample company, select appropriate type and you will get all default setting."
    },
    {
        id: 2,
        question: "What is the first step to start new year?",
        answer: "Take Final Balance sheet of previous year and create all accounts with closing balance as opening balance. Create all Items with opening stock."
    },
    {
        id: 3,
        question: "How to create user defined Sales Entry ?",
        answer: "This is the most important part of setting required for creating fields for entering required information in sales like Sales Man Name, Transport Name, Discount, VAT, Additional VAT, Excise duty etc. User defined fields can be created from  Main Menu -> Advance Usage -> Layout Setting -> User Field (Sale) . You can open two types of fields  Top and Bottom. Top fields are informative fields like Delivery At, Documents Through, Time of Removal, Sales Man Name etc. You need to give max width required and ???T??? in Top/Bottom. Bottom Fields are fields which affects Invoice Amount like Discount, VAT, Excise etc.  Size of such fields generally 12 and give ???B??? in Top/Bottom. You can select Respective Ledger of Tax account against Account field, this will credit/debit field amount to selected ledger account. After creating required fields press ctrl+w to save."
    },
    {
        id: 4,
        question: "How to take Backup ? How to restore old data?", 
        answer: "You need to take Backup everyday it is very important in the event of data corruption or failure of harddisk. You can take backup in the same harddisk also, however it is advisable to take in pendrive or other harddisk or other computer. Press F10  at Company menu (First menu when you start). Company wise Backup  will ask for selecting company , fin year and path with drive letter (e.g. H:\shreebackup) folder where you want to take backup. Company wise Restore  will ask for path (e.g. H:\shreebackup) from where you want restore. Program will give list of backup of company selecting company , fin year and path with drive letter where you want to take backup."  
    },
    {
        id: 5,
        question: "How to set user defined Invoice Printing ?",
        answer: "Shree Sava has very flexible user defined invoice printing format setting facility.  First you need to set entry by adding fields to enter information in sales entry from Main Menu -> Advance Usage -> Layout Setting -> User Field(Sale). After entry setup Printing Layout can be set from Main Menu -> Advance Usage -> Layout Setting -> User Report -> Create/Alter For invoice printing layout name will start with ???INV??? like INV001, INVPLAIN, INVEXCISE etc."
    },
    {
        id: 6,
        question: "How to print Receipt/Cheque/Invoice instantly after entry ?",
        answer: "Go to Main Menu -> Advance Usage -> Control Center. Under Accounting features Online Voucher Print ?  Press ???Y??? and you will get list of all voucher and tick for immediate print after entry. Press Ctrl + W to save changes."
    },
    {
        id: 7,
        question: "How to setup  GST Paid Rate entry in sales entry?",
        answer: "Go to Main Menu -> Advance Usage -> Control Center. Under Sales Features  GST Paid Rate in Sales Entry ?  Press ???Y??? will setup formula so that amount column will be Qty x Rate  less GST Value and  total bill value will be sum of Qty x Rate of all items. Press Ctrl + W to save changes."
    },
    {
        id: 8,
        question: "Automatic Roundoff in sales and purchase entry ?",
        answer: "Go to Main Menu -> Advance Usage -> Control Center. Under Sales Features Roundoff in Sales Entry,  Press ???Y???.  Under Purchase Features Configure Purchase Features,  Press ???Y??? and then you can give ???Y??? against Roundoff in Purchase Entry. This will setup automatic rounding of grand total of Sales and Purchase entry. If you want this difference to credit/debit to separate account then under Accounting Features you can select at Kasar Account Code field. Press Ctrl + W to save changes."
    },
    {
        id: 9,
        question: "How to make an entry at the time of Report viewing ?",
        answer: "Press Ctrl + I to  insert any entry at the display of Report."
    },
    {
        id: 10,
        question: "How to start Remote Support ?",
        answer: "Press  Ctrl+ A to  start Anydesk. Or you can download Anydesk program from google search for Anydesk."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Kishan Cement",
        quote: "Once we were searching for the solution of office accounting, we went through many accounting software. Finally we ended our search with Shree Sava - Digital Accountant.",
        job: "October 1st, 2011",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Sanraj Pollyprinters",
        quote: "Never thought the accounting software will work according to our system. They customized Shree Sava according to our requirements in a day.",
        job: "April 11th, 2012",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Kich Industry",
        quote: "Very well satisfied with the services they provide. It's really good to have updated technology for our business.",
        job: "June 19th, 2012",
        avatar: require("./images/avatar3.jpg")
    }
]




export const clients = [
    {
        id: 1,
        name: 'Industries and Manufacturers',
        Industry: [
            {client_name: 'Kishan Cement Pvt. Ltd.'},
            {client_name: 'Sadguru Cotton Pvt. Ltd.'},
            {client_name: 'Almighty Agro Pvt. Ltd.'},
            {client_name: 'J.K Machine Tools'},
            {client_name: 'Kich Industries'},
            {client_name: 'Major Cement Pvt. Ltd.'},
            {client_name: 'Sanraj Polyprinters'},
            {client_name: 'Royal Tiles'},
            {client_name: 'Kishan Autoparts Ltd.'},
            {client_name: 'Essel Valves Pvt. Ltd.'},
            {client_name: 'Hicon Technocast Pvt. Ltd.'},
            {client_name: 'Italica Metalware  Pvt. Ltd.' }
        ]
        
    },
    {
        id: 2,
        name: 'Traders',
        Industry: [
            {client_name: 'Laxmi Stationary'},
            {client_name: 'Mahavir Trading CO.'},
            {client_name: 'Victory Electronics'},
            {client_name: 'Coronation Motors'},
            {client_name: 'Haresh Engineering'},
            {client_name: 'Patel Mobile'},
            {client_name: 'Punit Automobiles'}
        ]
        
    },
    {
        id: 3,
        name: 'Schools & Colleges',
        Industry: [
            {client_name: 'Bharad School'},
            {client_name: 'R.P. Bhalodia College'},
            {client_name: 'B.M. Kyada School'},
            {client_name: 'Green Farm School'},
            {client_name: 'Parimal School'},
            {client_name: 'Sarvoday School'}
        ]
        
    },
    {
        id: 4,
        name: 'Supermarkets & Shopping Malls',
        Industry: [
            {client_name: 'Chandan Supermarket'},
            {client_name: 'Umiya Supermarket'},
            {client_name: "Pick 'N Pack"}
        ]
        
    },
    {
        id: 5,
        name: 'Hotel & Restaurants',
        Industry: [
            {client_name: 'Apple Bite Restaurant'},
            {client_name: 'Hotel Kavery'},
            {client_name: 'Krishna Park'},
            {client_name: 'JMC Hotel'}
        ]
        
    }
    
    
]
export const products = [
    {
        id: 1,
        name: 'Shree Sava Accounting Software - Windows(Single/Multi user)',
        image: require("./images/vfpbox.jpg"),
        desc: [
            {point: 'Compatible with all WINDOWS operating System.'},
            {point: 'Easy conversion of DOS based SHREE data.'},
            {point: 'Fastest performance.'},
            {point: 'Easy Operating and easy MENU system.'},
            {point: 'Good and clean VISIBILITY and Graphical User Interface.'},
            {point: 'Supports both DOT-MATRIX and LASER Printer.'},
            {point: 'Report export and Email facility to PDF, HTML, WORD, EXCEL, etc.'},
            {point: 'New Smart Backup System.'},
            {point: 'Multiple Users & Customized user rights facility.'},
        ]
        
    },
    {
        id: 2,
        name: 'Shree Sava Accounting Software - DOS(Single/Multi user)',
        image: require("./images/dosbox.jpg"),
        desc: [
            {point: 'Compatible with all DOS based operating System.'},
            {point: 'Fast performance.'},
            {point: 'Easy Operating and easy MENU system.'},
            {point: 'Good and clean VISIBILITY and Graphical User Interface.'},
            {point: 'Smart Backup System.'},
            {point: 'Multiple Users & Customized user rights facility.'}
        ]
        
    },
    {
        id: 3,
        name: 'Network Servers',
        image: require("./images/server.png"),
        desc: [
            {point: 'Server Computing for network.'},
            {point: 'Control, manage and protect your network.'},
            {point: 'Provides remote access to files.'},
            {point: 'A central computing point for information across a distributed network.'},
            {point: 'Provides remote access to other devices on the network.'}
        ]
        
    },
    {
        id: 4,
        name: 'Desktop Computers',
        image: require("./images/desktop.png"),
        desc: [
            {point: 'Personal Computer for regular use'},
            {point: 'Desk-sized Computer for Home & Office.'},
            {point: 'Branded Computers.'},
            {point: 'Assembled Computers.'},
            {point: 'Multimedia Computers.'}
        ]
        
    },
    {
        id: 5,
        name: 'Laptops',
        image: require("./images/laptop.png"),
        desc: [
            {point: 'Portable Computer for travelling use.'},
            {point: 'Requires less space to work.'},
            {point: 'Wireless Computing.'},
            {point: 'Touch Screen Access.'}
        ]
        
    },
    {
        id: 6,
        name: 'All-in-one Computers.',
        image: require("./images/allinone.png"),
        desc: [
            {point: 'Semi-Portable Computer.'},
            {point: 'Multi purpose Computer.'},
            {point: 'Can be used as Television.'},
            {point: 'Lesser Cable Management.'}
        ]
        
    },
    {
        id: 7,
        name: 'Printers & Scanners',
        image: require("./images/printer.png"),
        desc: [
            {point: 'Printing solution for office.'},
            {point: 'Printer with copying ability.'},
            {point: 'Network Printers used as network resource.'},
            {point: 'Lesser Cable Management.'},
            {point: 'Laser Printers & Dot-Matrix Printers.'}
        ]
        
    },
    {
        id: 8,
        name: 'Computer Accessories',
        image: require("./images/computer_accessories.png"),
        desc: [
            {point: 'Music System & Computer Speakers.'},
            {point: 'Portable Hard Disks & Pen drives.'},
            {point: 'All size of Laptop Bags.'},
            {point: 'Security Cameras & Web Cameras.'},
            {point: 'Cartridges & Toners.'},
            {point: 'Headphones & Earphones.'},
            {point: 'Computer Cables & Projectors.'}
        ]
        












        
    }
    
]
export const GSTVideos = [
    {
        id: 1,
        title: 'Shree Sava Backup Restore Password',
        videoId: "dRN2s550oUI",
        opts : {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }
    },
    {
        id: 2,
        title: 'ShreeSava Einvoice EwayBill',
        videoId: "uJbRtvcL9cg",
        opts : {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }
    },
    {
        id: 3,
        title: 'Shree Sava ShortCut Keys Video',
        videoId: "XeDVCjH85No",
        opts : {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }
    },
    {
        id: 4,
        title: 'ERP VIDEO FOR AUDITOR SHREESAVA',
        videoId: "KrM1eoUD5b4",
        opts : {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }
    },
    {
        id: 5,
        title: 'How to Manage TCS AND TDS in Shree Sava',
        videoId: "uksyOdaN7Qk",
        opts : {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }
    }
]

export const plans = [
    {
        id: 1,
        name: 'Single User',
        fee: 12000,
        desc: 'This package is perfect for beginners who need constant help',
        price: 2500,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Multi User / Lan Version',
        fee: 22000,
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 4500,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    }
    // {
    //     id: 3,
    //     name: 'Platinum Package',
    //     desc: 'This package is perfect for busy people who need home service',
    //     price: 89.99,
    //     features: [
    //         {feature: 'First Feature', available: true},
    //         {feature: 'Second Feature', available: true},
    //         {feature: 'Third Feature', available: true},
    //         {feature: 'Fourth Feature', available: true},
    //         {feature: 'Fifth Feature', available: true},
    //         {feature: 'Fifth Feature Plus', available: true},
    //         {feature: 'Sixth Feature', available: true},
    //         {feature: 'Seventh Feature', available: true},
    //         {feature: 'Seventh Feature Plus', available: true},
    //         {feature: 'Eighth Feature', available: true},
    //         {feature: 'Ninth Feature', available: true},
    //         {feature: 'Tenth Feature', available: true},
    //         {feature: 'Eleventh Feature', available: true}
    //     ]
    // }
]



