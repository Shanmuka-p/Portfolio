
import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: '2023 – 2027',
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Aditya College of Engineering and Technology',
      details: 'CGPA: 8.40 / 10.0'
    },
    {
      year: '2021 – 2023',
      degree: 'Intermediate (MPC)',
      institution: 'Gamyam Junior College, Kakinada',
      details: '95%'
    },
    {
      year: '2020',
      degree: 'SSC',
      institution: 'Gamyam',
      details: '98%'
    }
  ];

  const certifications = [
    { title: 'Programming in Java – NPTEL', link: 'https://drive.google.com/file/d/1jNp-38Nwva2_Va_imdnn_PCKaY_h6xv3/view?usp=sharing' },
    { title: 'Full Stack Development using Flutter – Technical Hub', link: 'https://drive.google.com/file/d/1SFtfAEb0fmz34NVkBfuVIPZXrR7yKrfF/view?usp=sharing' },
    { title: 'MongoDB Associate Developer – MongoDB', link: 'https://drive.google.com/file/d/1_APPfSW9wskXmANJmx-NtUnAXJmPoioc/view?usp=sharing' },
    { title: 'API Fundamentals – Postman Student Expert', link: 'https://drive.google.com/file/d/1ngxojykgWVBQGq9YJR3S2qvL8U-35756/view?usp=sharing' },
    { title: 'GITHUB – Github Foundations', link: 'https://drive.google.com/file/d/1HOTq-kTI3OLDhcZNzGGiNT6kDjoDE_L-/view?usp=sharing' }
  ];

  return (
    <section id="education" className="bg-gradient-to-br from-corporate-cream to-corporate-lightGray py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-semibold text-corporate-black text-center mb-16">
          Education & Certifications
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="animate-slide-in-left">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-corporate-orange"></div>
              
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  {/* Circle Marker */}
                  <div className="flex-shrink-0 w-8 h-8 bg-corporate-black rounded-full flex items-center justify-center mr-6 border-2 border-corporate-orange">
                    <div className="w-3 h-3 bg-corporate-orange rounded-full"></div>
                  </div>
                  
                  <div className="flex-grow bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-white font-medium text-sm bg-corporate-orange px-2 py-1 rounded">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-corporate-black mt-2">
                      {item.degree}
                    </h3>
                    <p className="text-corporate-gray font-medium">
                      {item.institution}
                    </p>
                    <p className="text-sm text-corporate-darkGray mt-1">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-medium text-corporate-black mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-corporate-darkGray px-4 py-3 rounded-xl text-sm font-medium hover:bg-corporate-orange hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm border border-gray-200"
                >
                  {cert.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
