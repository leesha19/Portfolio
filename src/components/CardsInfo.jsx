import SchoolIcon from '@mui/icons-material/School';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import TerminalIcon from '@mui/icons-material/Terminal';
import GppGoodIcon from '@mui/icons-material/GppGood';

const CardsInfo =[
    {
        key: 1,
        icon: <SchoolIcon className='icon-class' />,
        title : "Education",
        content : " I am currently a 3rd year student pursuing B.Tech degree in CSE (AI) from Medi-caps University Indore."
       
    },
    {
        key : 2,
        icon: <AutoFixHighIcon className='icon-class' />,
        title : "Skills",
        content : "Html, Css ,Javascript, React JS, C++ "
    },
    {
        key : 3,
        icon: <TerminalIcon className='icon-class' />,
        title : "Open-Source",
        content : "Hacktoberfest-22, Scipt Winter of Code 22"
    },
    {
        key : 4,
        icon: <GppGoodIcon className='icon-class' />,
        title : "Certification",
        links: [
            { name: " Hacktoberfest,", url: "https://www.holopin.io/@leesha19#" },
            { name: " DSA Workshop (IIT Roorkee),", url: "https://hyperstack.id/credential/65951bdd-d620-4f87-96db-3c91e9901e64" },
            { name: " Script Winter of code,", url: "https://certificate.givemycertificate.com/c/55fde87f-2b10-4fbf-a60d-4961227d7357" }
          ]
    }
    
];
export default CardsInfo;