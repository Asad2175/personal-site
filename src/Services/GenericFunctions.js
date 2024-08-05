
import {WHATSAPP_NO } from '../constants/General';
import resume from '../public/files/resume.pdf'

const handleWhatsapp = () => {
    var phoneNumber = WHATSAPP_NO; // Note: No need for the plus sign
    var message = 'Hello! ....';
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    
    window.open(whatsappURL, '_blank')
};

const handleResumeDownload = () => {
    const pdfUrl = resume; // URL relative to the public directory

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resume.pdf'; // Optional: Set the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

export {handleWhatsapp, handleResumeDownload}