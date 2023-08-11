import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialInfo = [
    {
        key : 1 ,
        icon : <GitHubIcon className='icon-class'/>,
        link : "https://github.com/leesha19",
        content : "Github"
    },
    {
        key : 2 ,
        icon : <LinkedInIcon className='icon-class'/>,
        link : "https://www.linkedin.com/in/leesha-vani/",
        content : "LinkedIn"

    },
    {
        key : 3 ,
        icon : <EmailIcon className='icon-class' />,
        link : "mailto: leeshavani@gmail.com",
        content : "leeshavani19@gmail.com"
    },
    {
        key : 4 ,
        icon : <YouTubeIcon className='icon-class' />,
        link : "https://www.youtube.com/@leeshavani649",
        content : "YouTube"
    }
  ];
  export default SocialInfo;