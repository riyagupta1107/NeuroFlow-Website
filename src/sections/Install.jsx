import React from 'react'

export const installContent = {
    header: {
      title: "Get Started in Seconds",
      subtitle: "NeuroFlow is currently in Beta. Follow these simple steps to install it directly into your browser."
    },
    steps: [
      {
        id: 1,
        title: "Download the Extension",
        description: "Click the button below to download the latest version of NeuroFlow. Unzip the downloaded folder to a location you can easily find.",
        action: "Download v1.0 (Zip)"
      },
      {
        id: 2,
        title: "Open Extension Management",
        description: "In your browser (Chrome, Edge, or Brave), click the puzzle piece icon or type 'chrome://extensions' in the address bar.",
      },
      {
        id: 3,
        title: "Enable Developer Mode",
        description: "Look for the 'Developer mode' toggle in the top right corner of the extensions page and switch it on.",
      },
      {
        id: 4,
        title: "Load Unpacked",
        description: "Click the 'Load unpacked' button that appears. Select the folder you unzipped in Step 1. That's it—NeuroFlow is ready!",
      }
    ]
  }
  
function Install({ sectionRef }) {
  return (
    <section 
      ref={sectionRef} 
      className="bg-[#FDFBD4] py-24 px-6 border-t border-[#38240D]/10"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-[#A0522D] font-bold text-sm">
            Installation Guide
          </span>
          <h2 className="text-[#38240D] font-bold text-3xl md:text-5xl mt-3 mb-6">
            {installContent.header.title}
          </h2>
          <p className="text-xl text-[#713600]">
            {installContent.header.subtitle}
          </p>
        </div>

        {/* Steps Container */}
        <div className="space-y-6">
          {installContent.steps.map((step, index) => (
            <div 
              key={step.id} 
              className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-[#38240D]/5 items-start md:items-center"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#38240D] text-[#FDFBD4] rounded-full flex items-center justify-center font-bold text-xl">
                {step.id}
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#38240D] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#713600] leading-relaxed">
                  {step.description}
                </p>
                
                {/* Optional Download Button for Step 1 */}
                {step.action && (
                  <button className="mt-4 bg-[#A0522D] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#8B4513] transition-colors text-sm">
                    {step.action}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Final Note */}
        <div className="mt-12 text-center bg-[#F5F5DC] p-6 rounded-xl border border-[#A0522D]/20">
          <p className="text-[#713600] font-medium">
            <strong>Note:</strong> Since this is a developer build, your browser might ask for confirmation. This is normal for unpacked extensions.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Install